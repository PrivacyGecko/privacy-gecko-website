const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function convertSVGtoPNG() {
  try {
    // Read the SVG file
    const svgPath = path.join(__dirname, '../public/images/og-geckocore-protocol.svg');
    const pngPath = path.join(__dirname, '../public/images/og-geckocore-protocol.png');

    const svgData = fs.readFileSync(svgPath, 'utf8');

    // Create a canvas with the exact dimensions
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');

    // Convert SVG to data URL
    const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svgData).toString('base64')}`;

    // Load and draw the image
    const img = await loadImage(svgDataUrl);
    ctx.drawImage(img, 0, 0, 1200, 630);

    // Save as PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(pngPath, buffer);

    console.log('✅ Successfully converted SVG to PNG!');
    console.log(`📁 Output: ${pngPath}`);
    console.log(`📊 File size: ${(buffer.length / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error converting SVG to PNG:', error);
    process.exit(1);
  }
}

convertSVGtoPNG();
