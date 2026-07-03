from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


SOURCE = Path("tmp/service-card-refs/creative-current.png")
OUT_DIR = Path("tmp/service-card-refs")


def make_variant(low_threshold, saturation_threshold):
    image = Image.open(SOURCE).convert("RGB")
    width, height = image.size
    pixels = image.load()
    visited = bytearray(width * height)
    background = bytearray(width * height)
    queue = deque()

    def is_candidate(x, y):
        r, g, b = pixels[x, y]
        hi = max(r, g, b)
        lo = min(r, g, b)
        return lo >= low_threshold and (hi - lo) <= saturation_threshold

    def add(x, y):
        index = y * width + x
        if visited[index]:
            return
        visited[index] = 1
        if is_candidate(x, y):
            background[index] = 1
            queue.append((x, y))

    for x in range(width):
        add(x, 0)
        add(x, height - 1)
    for y in range(height):
        add(0, y)
        add(width - 1, y)

    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < width and 0 <= ny < height:
                add(nx, ny)

    mask = Image.new("L", (width, height), 0)
    mask_pixels = mask.load()
    for y in range(height):
        offset = y * width
        for x in range(width):
            if background[offset + x]:
                mask_pixels[x, y] = 255

    soft_background = mask.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.85))
    alpha = Image.eval(soft_background, lambda value: 255 - value)
    rgba = image.convert("RGBA")
    rgba.putalpha(alpha)

    name = f"creative-t{low_threshold}-s{saturation_threshold}"
    transparent_path = OUT_DIR / f"{name}.png"
    dark_path = OUT_DIR / f"{name}-dark.png"
    rgba.save(transparent_path)
    dark = Image.new("RGBA", image.size, (18, 18, 18, 255))
    dark.alpha_composite(rgba)
    dark.save(dark_path)

    transparent = sum(1 for value in alpha.getdata() if value == 0)
    partial = sum(1 for value in alpha.getdata() if 0 < value < 255)
    print(f"{name}: transparent={transparent} partial={partial}")


def main():
    for low_threshold, saturation_threshold in (
        (236, 18),
        (232, 22),
        (228, 26),
        (224, 30),
        (220, 34),
        (216, 36),
    ):
        make_variant(low_threshold, saturation_threshold)


if __name__ == "__main__":
    main()
