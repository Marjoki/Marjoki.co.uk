from __future__ import annotations

from collections import deque
from pathlib import Path
from typing import Dict, Tuple

from PIL import Image, ImageEnhance, ImageFilter

ASSETS_DIR = Path(r"C:\Users\tahir\.cursor\projects\c-Users-tahir-Desktop-MARJOKI\assets")
FRUIT_SOURCES_DIR = Path(r"C:\Users\tahir\Desktop\MARJOKI\public\brand\fruits")
OUTPUT_DIR = Path(r"C:\Users\tahir\Desktop\MARJOKI\public\brand\orbit")

SOURCE_MAP: Dict[str, Tuple[Path, str]] = {
    "pastille-blueberry.webp": (ASSETS_DIR, "image-92cada75-2baf-4201-bb4b-b420a6564145.png"),
    "pastille-strawberry.webp": (ASSETS_DIR, "image-9fa3620d-ac37-4250-aee9-fff4b91423af.png"),
    "pastille-raspberry.webp": (ASSETS_DIR, "image-c74baf92-6bfb-4eef-90a2-df179369b53f.png"),
    "pastille-mango.webp": (ASSETS_DIR, "image-ef9597ab-7650-45f5-b421-6cfbca5df7bd.png"),
    "pastille-passionfruit.webp": (ASSETS_DIR, "image-2c03da58-f7ac-4c30-95bd-f668c768b513.png"),
    "fruit-strawberry.webp": (FRUIT_SOURCES_DIR, "strawberry-source.png"),
    "fruit-raspberry.webp": (FRUIT_SOURCES_DIR, "raspberry-source.png"),
    "fruit-mango.webp": (FRUIT_SOURCES_DIR, "mango-source.png"),
    "fruit-blueberry.webp": (FRUIT_SOURCES_DIR, "blueberry-source.jpg"),
    "fruit-passionfruit.webp": (FRUIT_SOURCES_DIR, "passionfruit-source.jpg"),
}


def find_file(base_dir: Path, needle: str) -> Path:
    if base_dir == FRUIT_SOURCES_DIR:
        path = base_dir / needle
        if not path.exists():
            raise FileNotFoundError(f"Missing source file: {path}")
        return path

    matches = [path for path in base_dir.iterdir() if needle in path.name]
    if not matches:
        raise FileNotFoundError(f"Could not find source asset: {needle}")
    return matches[0]


def color_distance(a: tuple[int, int, int], b: tuple[int, int, int]) -> int:
    return abs(a[0] - b[0]) + abs(a[1] - b[1]) + abs(a[2] - b[2])


def edge_background_color(image: Image.Image) -> tuple[int, int, int]:
    width, height = image.size
    pixels = image.load()
    samples = []
    for x in range(width):
        samples.append(pixels[x, 0][:3])
        samples.append(pixels[x, height - 1][:3])
    for y in range(height):
        samples.append(pixels[0, y][:3])
        samples.append(pixels[width - 1, y][:3])
    samples.sort()
    return samples[len(samples) // 2]


def remove_background(image: Image.Image, threshold: int = 52) -> Image.Image:
    image = image.convert("RGBA")
    width, height = image.size
    pixels = image.load()
    bg = edge_background_color(image)

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

        r, g, b, _ = pixels[x, y]
        if color_distance((r, g, b), bg) <= threshold:
            pixels[x, y] = (r, g, b, 0)
            queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    alpha = image.getchannel("A").filter(ImageFilter.GaussianBlur(radius=0.8))
    image.putalpha(alpha)
    bbox = image.getbbox()
    return image.crop(bbox) if bbox else image


def enhance(image: Image.Image) -> Image.Image:
    image = ImageEnhance.Sharpness(image).enhance(1.22)
    image = ImageEnhance.Color(image).enhance(1.08)
    image = ImageEnhance.Contrast(image).enhance(1.07)
    return image


def process_asset(output_name: str, source_path: Path) -> None:
    image = Image.open(source_path)
    if image.mode != "RGBA":
        image = image.convert("RGB")
    max_dim = 1600
    if max(image.size) > max_dim:
        ratio = max_dim / max(image.size)
        image = image.resize((int(image.size[0] * ratio), int(image.size[1] * ratio)), Image.Resampling.LANCZOS)
    image = enhance(image)
    cutout = remove_background(image, threshold=56)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    cutout.save(OUTPUT_DIR / output_name, format="WEBP", quality=98, method=6)


def main() -> None:
    for output_name, (base_dir, needle) in SOURCE_MAP.items():
        source_path = find_file(base_dir, needle)
        process_asset(output_name, source_path)
        print(f"Generated {output_name}")


if __name__ == "__main__":
    main()
