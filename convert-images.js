import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = [
  './public/images',
  './public/images/services',
];

async function convertImages() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, file.replace('.png', '.webp'));

        console.log(`Converting ${inputPath} to ${outputPath}...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Deleting old file ${inputPath}...`);
        fs.unlinkSync(inputPath);
      }
    }
  }
}

convertImages().then(() => console.log('Done converting images.'));
