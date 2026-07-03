import sharp from "sharp";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  console.error("Usage: node remove-neutral-background-keep-shadow.mjs <input> <output>");
  process.exit(1);
}

const BORDER = 18;
const image = sharp(inputPath).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const total = width * height;

function pixelOffset(index) {
  return index * channels;
}

function sample(x, y) {
  const i = (y * width + x) * channels;
  return [data[i], data[i + 1], data[i + 2]];
}

function averageStrip(getPoint, count) {
  const out = new Float32Array(count * 3);
  for (let p = 0; p < count; p += 1) {
    let r = 0;
    let g = 0;
    let b = 0;
    for (let i = 0; i < BORDER; i += 1) {
      const [x, y] = getPoint(p, i);
      const px = sample(x, y);
      r += px[0];
      g += px[1];
      b += px[2];
    }
    out[p * 3] = r / BORDER;
    out[p * 3 + 1] = g / BORDER;
    out[p * 3 + 2] = b / BORDER;
  }
  return smoothStrip(out, count, 42);
}

function smoothStrip(strip, count, radius) {
  const out = new Float32Array(strip.length);
  for (let p = 0; p < count; p += 1) {
    const from = Math.max(0, p - radius);
    const to = Math.min(count - 1, p + radius);
    let r = 0;
    let g = 0;
    let b = 0;
    let n = 0;
    for (let q = from; q <= to; q += 1) {
      r += strip[q * 3];
      g += strip[q * 3 + 1];
      b += strip[q * 3 + 2];
      n += 1;
    }
    out[p * 3] = r / n;
    out[p * 3 + 1] = g / n;
    out[p * 3 + 2] = b / n;
  }
  return out;
}

const top = averageStrip((x, i) => [x, i], width);
const bottom = averageStrip((x, i) => [x, height - 1 - i], width);
const left = averageStrip((y, i) => [i, y], height);
const right = averageStrip((y, i) => [width - 1 - i, y], height);

function estimatedBackground(x, y) {
  const tx = x / Math.max(1, width - 1);
  const ty = y / Math.max(1, height - 1);

  const topI = x * 3;
  const bottomI = x * 3;
  const leftI = y * 3;
  const rightI = y * 3;

  const vertical = [
    top[topI] * (1 - ty) + bottom[bottomI] * ty,
    top[topI + 1] * (1 - ty) + bottom[bottomI + 1] * ty,
    top[topI + 2] * (1 - ty) + bottom[bottomI + 2] * ty,
  ];
  const horizontal = [
    left[leftI] * (1 - tx) + right[rightI] * tx,
    left[leftI + 1] * (1 - tx) + right[rightI + 1] * tx,
    left[leftI + 2] * (1 - tx) + right[rightI + 2] * tx,
  ];

  return [
    vertical[0] * 0.62 + horizontal[0] * 0.38,
    vertical[1] * 0.62 + horizontal[1] * 0.38,
    vertical[2] * 0.62 + horizontal[2] * 0.38,
  ];
}

function stats(index) {
  const i = pixelOffset(index);
  const x = index % width;
  const y = Math.floor(index / width);
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const bg = estimatedBackground(x, y);
  const lum = (r + g + b) / 3;
  const bgLum = (bg[0] + bg[1] + bg[2]) / 3;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max - min;
  const diff = Math.hypot(r - bg[0], g - bg[1], b - bg[2]);
  const darkness = bgLum - lum;

  return { r, g, b, lum, bgLum, saturation, diff, darkness };
}

function isCleanBackground(index) {
  const s = stats(index);
  if (s.lum < 118 || s.saturation > 28) return false;
  if (s.darkness > 13) return false;
  return s.diff < 31;
}

const background = new Uint8Array(total);
const visited = new Uint8Array(total);
const queue = new Int32Array(total);
let head = 0;
let tail = 0;

function enqueue(index) {
  if (visited[index] || !isCleanBackground(index)) return;
  visited[index] = 1;
  background[index] = 1;
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

const expanded = new Uint8Array(background);
for (let pass = 0; pass < 2; pass += 1) {
  const next = new Uint8Array(expanded);
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = y * width + x;
      if (expanded[index] || !isCleanBackground(index)) continue;
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

const shadow = new Uint8Array(total);
for (let y = 1; y < height - 1; y += 1) {
  for (let x = 1; x < width - 1; x += 1) {
    const index = y * width + x;
    if (expanded[index]) continue;
    const s = stats(index);
    if (
      s.saturation <= 30 &&
      s.lum >= 42 &&
      s.lum <= 198 &&
      s.darkness >= 9 &&
      s.darkness <= 92
    ) {
      shadow[index] = 1;
    }
  }
}

for (let pass = 0; pass < 2; pass += 1) {
  const next = new Uint8Array(shadow);
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = y * width + x;
      if (!shadow[index]) continue;
      if (
        expanded[index - 1] ||
        expanded[index + 1] ||
        expanded[index - width] ||
        expanded[index + width]
      ) {
        continue;
      }
      next[index] = 0;
    }
  }
  shadow.set(next);
}

const output = Buffer.from(data);
for (let index = 0; index < total; index += 1) {
  const i = pixelOffset(index);

  if (expanded[index]) {
    output[i + 3] = 0;
    continue;
  }

  if (!shadow[index]) {
    output[i + 3] = 255;
    continue;
  }

  const s = stats(index);
  const alpha = Math.max(24, Math.min(142, Math.round(s.darkness * 2.2)));
  output[i] = 0;
  output[i + 1] = 0;
  output[i + 2] = 0;
  output[i + 3] = alpha;
}

await sharp(output, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`Wrote ${outputPath}`);
