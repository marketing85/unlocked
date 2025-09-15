import path from 'path';
import fs from 'fs/promises';
import { glob } from 'glob';
import sharp from 'sharp';

const files = await glob('public/**/*.{jpg,jpeg,png}', { nocase: true });

for (const file of files) {
  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');

  // Skip if up-to-date
  try {
    const [srcStat, outStat] = await Promise.all([fs.stat(file), fs.stat(out)]);
    if (outStat.mtimeMs >= srcStat.mtimeMs) continue;
  } catch {}

  await sharp(file)
    // Optional resize cap
    //.resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(out);

  console.log('→', out);
}
