const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

// Brand Colors
const COLORS = {
  geckoGreen: '#00D98A',
  darkGreen: '#00A86B',
  lightGreen: '#A0F5D7',
  darkSlate: '#1A1D29',
  mediumGray: '#6B7280',
  lightGray: '#F3F4F6',
  white: '#FFFFFF',
  privacyBlue: '#3B82F6',
  warningOrange: '#F59E0B',
  errorRed: '#EF4444',
  successGreen: '#10B981',
  prickoGold: '#FFD700',
  darkPurple: '#7C3AED',
  darkBlue: '#1E40AF'
};

const WIDTH = 1200;
const HEIGHT = 630;
const TEXT_MARGIN = 80;
const LOGO_MARGIN = 40;

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawLock(ctx, x, y, size, fillColor) {
  ctx.save();
  ctx.fillStyle = fillColor;

  // Shackle
  ctx.strokeStyle = fillColor;
  ctx.lineWidth = size * 0.15;
  ctx.beginPath();
  ctx.arc(x + size * 0.5, y + size * 0.3, size * 0.25, Math.PI, 0);
  ctx.stroke();

  // Body
  roundRect(ctx, x + size * 0.2, y + size * 0.4, size * 0.6, size * 0.5, size * 0.1);
  ctx.fill();

  // Keyhole
  ctx.fillStyle = COLORS.white;
  ctx.beginPath();
  ctx.arc(x + size * 0.5, y + size * 0.55, size * 0.08, 0, Math.PI * 2);
  ctx.fill();
  roundRect(ctx, x + size * 0.45, y + size * 0.6, size * 0.1, size * 0.15, size * 0.02);
  ctx.fill();

  ctx.restore();
}

// Simplified og-token.png
async function createTokenImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Simple solid background
  ctx.fillStyle = COLORS.darkSlate;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Gradient overlay (simplified)
  const gradient = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, WIDTH);
  gradient.addColorStop(0, 'rgba(0, 217, 138, 0.15)');
  gradient.addColorStop(1, 'rgba(30, 41, 59, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Simple coin visual
  const coinSize = 220;
  const coinX = WIDTH * 0.25 - coinSize / 2;
  const coinY = HEIGHT / 2 - coinSize / 2;

  // Coin circle
  ctx.fillStyle = COLORS.prickoGold;
  ctx.beginPath();
  ctx.arc(coinX + coinSize / 2, coinY + coinSize / 2, coinSize / 2, 0, Math.PI * 2);
  ctx.fill();

  // Inner circle
  ctx.strokeStyle = COLORS.darkSlate;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(coinX + coinSize / 2, coinY + coinSize / 2, coinSize / 2 - 15, 0, Math.PI * 2);
  ctx.stroke();

  // $PRICKO text on coin
  ctx.fillStyle = COLORS.darkSlate;
  ctx.font = 'bold 40px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('$PRICKO', coinX + coinSize / 2, coinY + coinSize / 2);

  // Text content - right side
  const textX = WIDTH * 0.55;

  // Title
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 72px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('$PRICKO', textX, 160);

  // Subtitle
  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = 'bold 42px Inter, sans-serif';
  ctx.fillText('Token', textX, 220);

  // Tagline
  ctx.fillStyle = COLORS.lightGray;
  ctx.font = '32px Inter, sans-serif';
  ctx.fillText('Powering Privacy-First AI', textX, 290);

  // Launch date
  ctx.fillStyle = COLORS.prickoGold;
  ctx.font = 'bold 38px Inter, sans-serif';
  ctx.fillText('Fair Launch', textX, 380);
  ctx.font = 'bold 52px Inter, sans-serif';
  ctx.fillText('November 2025', textX, 440);

  // Privacy Gecko logo
  try {
    const logo = await loadImage(path.join(__dirname, '../public/images/PrivacyGecko_logo.png'));
    const logoHeight = 50;
    const logoWidth = (logo.width / logo.height) * logoHeight;
    ctx.drawImage(logo, WIDTH - logoWidth - LOGO_MARGIN, LOGO_MARGIN, logoWidth, logoHeight);
  } catch (err) {
    console.log('Logo not found, skipping');
  }

  return canvas;
}

// Simplified og-lock.png
async function createLockImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Simple solid background
  ctx.fillStyle = '#0F0F0F';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Gradient overlay
  const gradient = ctx.createRadialGradient(WIDTH * 0.25, HEIGHT / 2, 0, WIDTH * 0.25, HEIGHT / 2, 400);
  gradient.addColorStop(0, 'rgba(0, 217, 138, 0.2)');
  gradient.addColorStop(1, 'rgba(26, 29, 41, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Central lock
  const lockSize = 240;
  const lockX = WIDTH * 0.25 - lockSize / 2;
  const lockY = HEIGHT / 2 - lockSize / 2;

  drawLock(ctx, lockX, lockY, lockSize, COLORS.geckoGreen);

  // Key icons (simplified)
  ctx.fillStyle = COLORS.prickoGold;

  // Left key
  ctx.beginPath();
  ctx.arc(lockX - 50, lockY + 80, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(lockX - 53, lockY + 80, 6, 35);

  // Right key
  ctx.beginPath();
  ctx.arc(lockX + lockSize + 38, lockY + 80, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(lockX + lockSize + 35, lockY + 80, 6, 35);

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 68px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoLock', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'Zero-Knowledge',
    'Password Manager',
    'Military-Grade Encryption'
  ];
  taglines.forEach((line, i) => {
    ctx.fillText(line, textX, 260 + i * 55);
  });

  // Status badge
  ctx.fillStyle = COLORS.successGreen;
  roundRect(ctx, textX, 470, 140, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('LIVE NOW', textX + 70, 500);

  // Logo
  try {
    const logo = await loadImage(path.join(__dirname, '../public/images/PrivacyGecko_logo.png'));
    const logoHeight = 50;
    const logoWidth = (logo.width / logo.height) * logoHeight;
    ctx.drawImage(logo, WIDTH - logoWidth - LOGO_MARGIN, LOGO_MARGIN, logoWidth, logoHeight);
  } catch (err) {
    console.log('Logo not found, skipping');
  }

  return canvas;
}

async function recreateImages() {
  const outputDir = path.join(__dirname, '../public/images');

  console.log('Recreating large images with simplified designs...\n');

  // Recreate og-token.png
  console.log('Creating og-token.png...');
  const tokenCanvas = await createTokenImage();
  const tokenBuffer = tokenCanvas.toBuffer('image/png', { compressionLevel: 9, filters: tokenCanvas.PNG_FILTER_NONE });
  fs.writeFileSync(path.join(outputDir, 'og-token.png'), tokenBuffer);
  console.log(`  ✓ Created og-token.png (${(tokenBuffer.length / 1024).toFixed(2)} KB)\n`);

  // Recreate og-lock.png
  console.log('Creating og-lock.png...');
  const lockCanvas = await createLockImage();
  const lockBuffer = lockCanvas.toBuffer('image/png', { compressionLevel: 9, filters: lockCanvas.PNG_FILTER_NONE });
  fs.writeFileSync(path.join(outputDir, 'og-lock.png'), lockBuffer);
  console.log(`  ✓ Created og-lock.png (${(lockBuffer.length / 1024).toFixed(2)} KB)\n`);

  console.log('Optimized images created successfully!');
}

recreateImages().catch(console.error);
