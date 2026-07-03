import sharp from "sharp";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  console.error("Usage: node remove-green-background.mjs <input> <output>");
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

function isGreenKey(index, loose = false) {
  const i = offset(index);
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const strongestNonGreen = Math.max(r, b);
  const dominance = g - strongestNonGreen;
  const brightness = (r + g + b) / 3;

  if (g >= 170 && dominance >= 42) return true;
  if (g >= 135 && dominance >= 62) return true;
  if (loose && g >= 110 && dominance >= 22 && brightness >= 95) return true;
  return false;
}

function enqueue(index) {
  if (visited[index] || !isGreenKey(index)) return;
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

const expanded = new Uint8Array(mask);
for (let pass = 0; pass < 3; pass += 1) {
  const next = new Uint8Array(expanded);
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = y * width + x;
      if (expanded[index] || !isGreenKey(index, true)) continue;

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

  const nearBackground =
    (index > 0 && expanded[index - 1]) ||
    (index < total - 1 && expanded[index + 1]) ||
    (index >= width && expanded[index - width]) ||
    (index < total - width && expanded[index + width]);

  if (!nearBackground) continue;

  const r = output[i];
  const g = output[i + 1];
  const b = output[i + 2];
  const allowedGreen = Math.max(r, b) + 12;

  if (g > allowedGreen) {
    output[i + 1] = Math.round(allowedGreen);
  }
}

await sharp(output, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`Wrote ${outputPath}`);
