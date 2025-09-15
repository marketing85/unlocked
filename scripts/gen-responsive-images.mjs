// scripts/gen-responsive-images.mjs
import fg from 'fast-glob'
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = 'public'              // scan your static assets
const WIDTHS = [480, 768, 1100, 1600] // tweak as you like
const QUALITY_JPEG = 82
const QUALITY_WEBP = 82

const entries = await fg(['**/*.{jpg,jpeg,png}'], {
  cwd: ROOT,
  dot: false,
  ignore: ['**/*-480.*', '**/*-768.*', '**/*-1100.*', '**/*-1600.*'],
})

let made = 0
for (const rel of entries) {
  const abs = path.join(ROOT, rel)
  const dir = path.dirname(abs)
  const ext = path.extname(abs).toLowerCase().replace('.', '')
  const base = path.basename(abs, path.extname(abs))
  const src = sharp(abs)
  const meta = await src.metadata()

  // 1) Make 1:1 WebP next to original
  const webpPath = path.join(dir, `${base}.webp`)
  try {
    await fs.access(webpPath)
  } catch {
    await src.clone().webp({ quality: QUALITY_WEBP, effort: 5 }).toFile(webpPath)
    made++
  }

  // 2) Make responsive sizes (only if source is wider than target)
  for (const w of WIDTHS) {
    if (!meta.width || meta.width <= w) continue

    // Original format resized
    const oPath = path.join(dir, `${base}-${w}.${ext}`)
    try { await fs.access(oPath) } catch {
      const pipe = src.clone().resize({ width: w, withoutEnlargement: true })
      if (ext === 'png') {
        await pipe.png({ compressionLevel: 9 }).toFile(oPath)
      } else {
        await pipe.jpeg({ mozjpeg: true, quality: QUALITY_JPEG }).toFile(oPath)
      }
      made++
    }

    // WebP resized
    const wPath = path.join(dir, `${base}-${w}.webp`)
    try { await fs.access(wPath) } catch {
      await src.clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY_WEBP, effort: 5 })
        .toFile(wPath)
      made++
    }
  }
}

console.log(`Done. Created/verified responsive assets for ${entries.length} images. New files: ${made}`)
