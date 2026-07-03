from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


SOURCE = Path("tmp/service-card-refs/creative-current.png")
OUTPUT = Path("public/images/services/service-card-creative-production.png")


STRICT_LOW_THRESHOLD = 236
STRICT_SATURATION_THRESHOLD = 18
FLOOR_LOW_THRESHOLD = 174
FLOOR_SATURATION_THRESHOLD = 42
FLOOR_START_RATIO = 0.62


def is_background_candidate(pixel, low_threshold, saturation_threshold):
    r, g, b = pixel
    hi = max(r, g, b)
    lo = min(r, g, b)
    saturation = hi - lo

    return lo >= low_threshold and saturation <= saturation_threshold


def flood_background(image, low_threshold, saturation_threshold):
    width, height = image.size
    pixels = image.load()
    visited = bytearray(width * height)
    background = bytearray(width * height)
    queue = deque()

    def add_if_candidate(x, y):
        index = y * width + x
        if visited[index]:
            return
        visited[index] = 1
        if is_background_candidate(pixels[x, y], low_threshold, saturation_threshold):
            background[index] = 1
            queue.append((x, y))

    for x in range(width):
        add_if_candidate(x, 0)
        add_if_candidate(x, height - 1)
    for y in range(height):
        add_if_candidate(0, y)
        add_if_candidate(width - 1, y)

    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < width and 0 <= ny < height:
                add_if_candidate(nx, ny)

    return background


def main():
    image = Image.open(SOURCE).convert("RGB")
    width, height = image.size
    strict_background = flood_background(
        image,
        STRICT_LOW_THRESHOLD,
        STRICT_SATURATION_THRESHOLD,
    )
    floor_background = flood_background(
        image,
        FLOOR_LOW_THRESHOLD,
        FLOOR_SATURATION_THRESHOLD,
    )

    mask = Image.new("L", (width, height), 0)
    mask_pixels = mask.load()
    floor_start_y = int(height * FLOOR_START_RATIO)
    for y in range(height):
        offset = y * width
        for x in range(width):
            index = offset + x
            is_floor = y >= floor_start_y and floor_background[index]
            if strict_background[index] or is_floor:
                mask_pixels[x, y] = 255

    soft_background = mask.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.85))
    alpha = Image.eval(soft_background, lambda value: 255 - value)

    rgba = image.convert("RGBA")
    rgba.putalpha(alpha)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    rgba.save(OUTPUT)

    transparent = sum(1 for value in alpha.getdata() if value == 0)
    partial = sum(1 for value in alpha.getdata() if 0 < value < 255)
    print(f"Wrote {OUTPUT}")
    print(f"Transparent pixels: {transparent}/{width * height}")
    print(f"Partially transparent pixels: {partial}/{width * height}")


if __name__ == "__main__":
    main()
