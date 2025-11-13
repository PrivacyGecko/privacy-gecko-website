const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

// Optimize images that are over 100KB by reducing quality
async function optimizeImage(filePath) {
  const image = await loadImage(filePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(image, 0, 0);

  // Try different compression levels
  for (let quality = 6; quality <= 9; quality++) {
    const buffer = canvas.toBuffer('image/png', {
      compressionLevel: quality,
      filters: canvas.PNG_FILTER_NONE
    });

    const sizeKB = buffer.length / 1024;
    console.log(`  Quality ${quality}: ${sizeKB.toFixed(2)} KB`);

    if (sizeKB < 100) {
      fs.writeFileSync(filePath, buffer);
      console.log(`  ✓ Optimized to ${sizeKB.toFixed(2)} KB\n`);
      return true;
    }
  }

  // If still too large, save with highest compression
  const buffer = canvas.toBuffer('image/png', {
    compressionLevel: 9,
    filters: canvas.PNG_FILTER_NONE
  });
  fs.writeFileSync(filePath, buffer);
  const finalSize = (buffer.length / 1024).toFixed(2);
  console.log(`  ✓ Best effort: ${finalSize} KB\n`);
  return false;
}

async function checkAndOptimize() {
  const outputDir = path.join(__dirname, '../public/images');
  const images = [
    'og-token.png',
    'og-share.png',
    'og-guard.png',
    'og-lock.png',
    'og-advisor.png',
    'og-view.png',
    'og-shell.png',
    'og-vpn.png',
    'og-watch.png',
    'og-products.png'
  ];

  console.log('Checking file sizes and optimizing if needed...\n');

  for (const filename of images) {
    const filePath = path.join(outputDir, filename);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);

    console.log(`${filename}: ${sizeKB} KB`);

    if (stats.size > 100 * 1024) {
      console.log(`  ⚠ Over 100KB, optimizing...`);
      await optimizeImage(filePath);
    } else {
      console.log(`  ✓ Size OK\n`);
    }
  }

  console.log('\nOptimization complete!');
  console.log('\nFinal file sizes:');

  for (const filename of images) {
    const filePath = path.join(outputDir, filename);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const status = stats.size > 100 * 1024 ? '⚠' : '✓';
    console.log(`  ${status} ${filename}: ${sizeKB} KB`);
  }
}

checkAndOptimize().catch(console.error);
