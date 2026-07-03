import sharp from "sharp";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  console.error("Usage: node remove-white-background.mjs <input> <output>");
  process.exit(1);
}

const image = sharp(inputPath).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const total = width * height;
const mask = new Uint8Array(total);
const visited = new Uint8Array(total);
const queue = new Int32Array(total);
let head = 0;
let tail = 0;

function offset(index) {
  return index * channels;
}

function isLikelyBackground(index) {
  const i = offset(index);
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max - min;
  const avg = (r + g + b) / 3;

  // White/very-light gray canvas plus soft studio shadow. The connected-edge
  // flood fill keeps bright device highlights that are enclosed by the subject.
  if (min >= 240 && saturation <= 22) return true;
  if (avg >= 224 && saturation <= 26) return true;
  if (avg >= 190 && saturation <= 18) return true;
  return false;
}

function enqueue(index) {
  if (visited[index]) return;
  if (!isLikelyBackground(index)) return;
  visited[index] = 1;
  mask[index] = 1;
  queue[tail++] = index;
}

for (let x = 0; x < width; x += 1) {
  enqueue(x);
  enqueue((height - 1) * width + x);
}

for (let y = 0; y < height; y += 1) {
  enqueue(y * width);
  enqueue(y * width + width - 1);
}

while (head < tail) {
  const index = queue[head++];
  const x = index % width;
  const y = Math.floor(index / width);

  if (x > 0) enqueue(index - 1);
  if (x < width - 1) enqueue(index + 1);
  if (y > 0) enqueue(index - width);
  if (y < height - 1) enqueue(index + width);
}

const expanded = new Uint8Array(total);
expanded.set(mask);

// Slightly expand the background mask into antialiased light fringes and the
// light studio shadow that was part of the original white canvas.
for (let pass = 0; pass < 4; pass += 1) {
  const next = new Uint8Array(expanded);
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = y * width + x;
      if (expanded[index]) continue;
      if (!isLikelyBackground(index)) continue;

      if (
        expanded[index - 1] ||
        expanded[index + 1] ||
        expanded[index - width] ||
        expanded[index + width]
      ) {
        next[index] = 1;
      }
    }
  }
  expanded.set(next);
}

const output = Buffer.from(data);
for (let index = 0; index < total; index += 1) {
  const i = offset(index);
  if (expanded[index]) {
    output[i + 3] = 0;
    continue;
  }

  const r = output[i];
  const g = output[i + 1];
  const b = output[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max - min;
  const avg = (r + g + b) / 3;

  // Fade/despill bright edge pixels near the removed background.
  const nearBackground =
    (index > 0 && expanded[index - 1]) ||
    (index < total - 1 && expanded[index + 1]) ||
    (index >= width && expanded[index - width]) ||
    (index < total - width && expanded[index + width]);

  if (nearBackground && avg > 168 && saturation < 34) {
    output[i + 3] = Math.max(0, Math.min(255, Math.round((255 - avg) * 3.2)));
    const gray = Math.round((r + g + b) / 3);
    const darken = output[i + 3] / 255;
    output[i] = Math.round((r - (255 - gray) * 0.5) * darken + r * (1 - darken));
    output[i + 1] = Math.round((g - (255 - gray) * 0.5) * darken + g * (1 - darken));
    output[i + 2] = Math.round((b - (255 - gray) * 0.5) * darken + b * (1 - darken));
  }
}

await sharp(output, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`Wrote ${outputPath}`);
