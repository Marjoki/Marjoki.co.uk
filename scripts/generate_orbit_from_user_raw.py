from __future__ import annotations

from collections import Counter, deque
from pathlib import Path
from typing import Dict

from PIL import Image, ImageEnhance, ImageFilter

RAW_DIR = Path(r"C:\Users\tahir\Desktop\MARJOKI\public\brand\raw-user")
OUT_DIR = Path(r"C:\Users\tahir\Desktop\MARJOKI\public\brand\orbit")

MAPPING: Dict[str, str] = {
    "fruit-blueberry.webp": "fruit-blueberry-raw.png",
    "fruit-mango.webp": "fruit-mango-raw.png",
    "fruit-passionfruit.webp": "fruit-passionfruit-raw.png",
    "fruit-raspberry.webp": "fruit-raspberry-raw.png",
    "fruit-strawberry.webp": "fruit-strawberry-raw.png",
    "pastille-blueberry.webp": "pastille-blueberry-raw.png",
    "pastille-strawberry.webp": "pastille-strawberry-raw.png",
    "pastille-raspberry.webp": "pastille-raspberry-raw.png",
    "pastille-passionfruit.webp": "pastille-passionfruit-raw.png",
    "pastille-mango.webp": "pastille-mango-raw.png",
}


def q(rgb: tuple[int, int, int]) -> tuple[int, int, int]:
    # Quantize to reduce noise from antialiasing.
    return tuple((v // 12) * 12 for v in rgb)


def near(a: tuple[int, int, int], b: tuple[int, int, int], t: int = 36) -> bool:
    return abs(a[0] - b[0]) + abs(a[1] - b[1]) + abs(a[2] - b[2]) <= t


def edge_palette(image: Image.Image) -> list[tuple[int, int, int]]:
    w, h = image.size
    px = image.load()
    samples = []
    for x in range(w):
        samples.append(q(px[x, 0][:3]))
        samples.append(q(px[x, h - 1][:3]))
    for y in range(h):
        samples.append(q(px[0, y][:3]))
        samples.append(q(px[w - 1, y][:3]))
    common = Counter(samples).most_common(6)
    return [c[0] for c in common]


def remove_background(source: Path, output: Path) -> None:
    image = Image.open(source).convert("RGBA")
    image = ImageEnhance.Sharpness(image).enhance(1.18)
    image = ImageEnhance.Color(image).enhance(1.06)
    w, h = image.size
    px = image.load()
    palette = edge_palette(image)

    visited = [[False] * h for _ in range(w)]
    queue = deque()
    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= w or y >= h:
            continue
        if visited[x][y]:
            continue
        visited[x][y] = True

        rgb = px[x, y][:3]
        if any(near(rgb, bg) for bg in palette):
            px[x, y] = (rgb[0], rgb[1], rgb[2], 0)
            queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    # Remove semi-opaque leftovers: checker patterns, dark shadows, and WHITE HALOS.
    for x in range(w):
        for y in range(h):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if any(near((r, g, b), bg, 32) for bg in palette):
                px[x, y] = (r, g, b, 0)
                continue
            if r < 42 and g < 42 and b < 42:
                px[x, y] = (r, g, b, 0)
                continue
            # Aggressively remove near-white / light-gray halos (no white rings)
            if r > 235 and g > 235 and b > 235:
                px[x, y] = (r, g, b, 0)
                continue
            if r > 220 and g > 220 and b > 220 and a < 200:
                px[x, y] = (r, g, b, 0)

    alpha = image.getchannel("A").filter(ImageFilter.MinFilter(3))
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.2))
    image.putalpha(alpha)

    bbox = image.getbbox()
    if bbox:
      pad = 4
      left, top, right, bottom = bbox
      bbox = (max(0, left - pad), max(0, top - pad), min(w, right + pad), min(h, bottom + pad))
      image = image.crop(bbox)

    # Normalize all orbit assets to a consistent high-res transparent canvas.
    canvas_size = 256
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    scale = min((canvas_size * 0.78) / image.width, (canvas_size * 0.78) / image.height)
    nw, nh = max(1, int(image.width * scale)), max(1, int(image.height * scale))
    image = image.resize((nw, nh), Image.Resampling.LANCZOS)
    cx = (canvas_size - nw) // 2
    cy = (canvas_size - nh) // 2
    canvas.alpha_composite(image, (cx, cy))

    output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output, format="WEBP", quality=100, method=6)


def main() -> None:
    for out_name, in_name in MAPPING.items():
        source = RAW_DIR / in_name
        if not source.exists():
            raise FileNotFoundError(source)
        target = OUT_DIR / out_name
        remove_background(source, target)
        print(f"Updated {target.name}")


if __name__ == "__main__":
    main()
