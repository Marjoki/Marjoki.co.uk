from __future__ import annotations

from collections import deque
from pathlib import Path
from typing import Dict

from PIL import Image, ImageFilter

ASSETS_DIR = Path(r"C:\Users\tahir\.cursor\projects\c-Users-tahir-Desktop-MARJOKI\assets")
OUTPUT_DIR = Path(r"C:\Users\tahir\Desktop\MARJOKI\public\brand\cutouts")

SOURCES: Dict[str, str] = {
    "strawberry-100g.webp": "MARJOKI_STRAWBERRY_FLAVOUR-568f76b0-d03a-4332-8437-72d29021964d.png",
    "mango-100g.webp": "MARJOKI_MANGO_FLAVOUR-72017870-3c3e-4c1c-86d4-39decdd6bfc6.png",
    "raspberry-100g.webp": "MARJOKI_RASPBERRY_FLAVOUR-c07bd3e9-8e53-4529-90b5-117f1e5b0000.png",
    "blueberry-100g.webp": "MARJOKI_BLUEBERRY_FLAVOUR-ef147179-b31e-4e73-9763-e4fb41a31413.png",
    "passionfruit-100g.webp": "MARJOKI_PASSIONFRUIT_FLAVOUR-94a72f06-fc1d-453a-b57f-f45631fdd059.png",
    "discovery-pack-20g.webp": "MARJOKI_NEW_DISCOVERY_PACK_IMAGE-b68f3bab-86b9-447f-9025-33525fcc4f88.png",
    "logo-title.webp": "MARJOKI_SITE_LOGO_TITLE-180f3143-8857-450e-b3b1-6e70c83df9f5.png",
    "logo-app.webp": "MARJOKI_APP_LOGO_MOBILE-172ad6b6-4850-49ce-a44d-2ca4150335a2.png",
}


def find_source(needle: str) -> Path:
    matches = [path for path in ASSETS_DIR.iterdir() if needle in path.name]
    if not matches:
        raise FileNotFoundError(f"Could not find source asset: {needle}")
    return matches[0]


def color_distance(a: tuple[int, int, int], b: tuple[int, int, int]) -> int:
    return abs(a[0] - b[0]) + abs(a[1] - b[1]) + abs(a[2] - b[2])


def remove_background_and_crop(source_path: Path, output_path: Path) -> None:
    image = Image.open(source_path).convert("RGBA")
    width, height = image.size
    pixels = image.load()

    # Estimate background from edge samples.
    edge_samples = []
    for x in range(width):
        edge_samples.append(pixels[x, 0][:3])
        edge_samples.append(pixels[x, height - 1][:3])
    for y in range(height):
        edge_samples.append(pixels[0, y][:3])
        edge_samples.append(pixels[width - 1, y][:3])
    edge_samples.sort()
    bg = edge_samples[len(edge_samples) // 2]

    threshold = 40
    visited = [[False] * height for _ in range(width)]
    queue = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= width or y >= height:
            continue
        if visited[x][y]:
            continue
        visited[x][y] = True
        rgb = pixels[x, y][:3]
        if color_distance(rgb, bg) <= threshold:
            pixels[x, y] = (rgb[0], rgb[1], rgb[2], 0)
            queue.append((x + 1, y))
            queue.append((x - 1, y))
            queue.append((x, y + 1))
            queue.append((x, y - 1))

    alpha = image.getchannel("A").filter(ImageFilter.GaussianBlur(radius=0.6))
    image.putalpha(alpha)

    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path, format="WEBP", quality=100, method=6)


def main() -> None:
    for filename, needle in SOURCES.items():
        src = find_source(needle)
        dst = OUTPUT_DIR / filename
        remove_background_and_crop(src, dst)
        print(f"Generated {dst.name} from {src.name}")


if __name__ == "__main__":
    main()
