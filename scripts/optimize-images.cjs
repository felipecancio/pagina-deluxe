const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "public", "images");

async function toWebp(input, output, width, quality) {
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(output);
  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(
    `${path.relative(root, input)} ${(before / 1024).toFixed(0)}KB -> ${path.relative(root, output)} ${(after / 1024).toFixed(0)}KB`
  );
}

async function walk(dir, width, quality) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, width, quality);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    const out = full.replace(/\.(png|jpe?g)$/i, ".webp");
    const isMockup = entry.name.includes("mockup");
    await toWebp(full, out, isMockup ? 1400 : width, isMockup ? 82 : quality);
  }
}

(async () => {
  await walk(root, 900, 78);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
