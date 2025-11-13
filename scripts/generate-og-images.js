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

// Canvas dimensions (Open Graph standard)
const WIDTH = 1200;
const HEIGHT = 630;

// Safe zones
const TEXT_MARGIN = 80;
const LOGO_MARGIN = 40;

// Helper function to draw rounded rectangle
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

// Helper function to draw shield icon
function drawShield(ctx, x, y, size, fillColor) {
  ctx.save();
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size, y + size * 0.6);
  ctx.quadraticCurveTo(x + size, y + size * 0.9, x + size * 0.5, y + size);
  ctx.quadraticCurveTo(x, y + size * 0.9, x, y + size * 0.6);
  ctx.closePath();
  ctx.fill();

  // Inner shield detail
  ctx.strokeStyle = COLORS.white;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x + size * 0.3, y + size * 0.5);
  ctx.lineTo(x + size * 0.45, y + size * 0.65);
  ctx.lineTo(x + size * 0.7, y + size * 0.35);
  ctx.stroke();
  ctx.restore();
}

// Helper function to draw lock icon
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

// Helper function to draw AI chip/circuit pattern
function drawAICircuit(ctx, x, y, size, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;

  // Central chip
  roundRect(ctx, x + size * 0.35, y + size * 0.35, size * 0.3, size * 0.3, 4);
  ctx.stroke();

  // Circuit lines
  ctx.beginPath();
  // Top
  ctx.moveTo(x + size * 0.5, y + size * 0.35);
  ctx.lineTo(x + size * 0.5, y + size * 0.1);
  // Bottom
  ctx.moveTo(x + size * 0.5, y + size * 0.65);
  ctx.lineTo(x + size * 0.5, y + size * 0.9);
  // Left
  ctx.moveTo(x + size * 0.35, y + size * 0.5);
  ctx.lineTo(x + size * 0.1, y + size * 0.5);
  // Right
  ctx.moveTo(x + size * 0.65, y + size * 0.5);
  ctx.lineTo(x + size * 0.9, y + size * 0.5);
  ctx.stroke();

  // Connection dots
  ctx.fillStyle = color;
  const dots = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.5, y + size * 0.9],
    [x + size * 0.1, y + size * 0.5],
    [x + size * 0.9, y + size * 0.5]
  ];
  dots.forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(dx, dy, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

// Helper function to wrap text
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + ' ' + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);
  return lines;
}

// 1. og-token.png - HIGHEST PRIORITY
async function createTokenImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background gradient (dark to darker with purple/blue tints)
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, '#1A1D29');
  gradient.addColorStop(0.5, '#2D1B4E');
  gradient.addColorStop(1, '#1E293B');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Accent circles (bokeh effect)
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = COLORS.geckoGreen;
  ctx.beginPath();
  ctx.arc(WIDTH * 0.2, HEIGHT * 0.3, 200, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = COLORS.privacyBlue;
  ctx.beginPath();
  ctx.arc(WIDTH * 0.8, HEIGHT * 0.7, 250, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = COLORS.prickoGold;
  ctx.beginPath();
  ctx.arc(WIDTH * 0.9, HEIGHT * 0.2, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Central coin/token visual
  const coinSize = 280;
  const coinX = WIDTH * 0.25 - coinSize / 2;
  const coinY = HEIGHT / 2 - coinSize / 2;

  // Outer glow
  ctx.save();
  ctx.shadowColor = COLORS.prickoGold;
  ctx.shadowBlur = 40;
  ctx.fillStyle = COLORS.prickoGold;
  ctx.beginPath();
  ctx.arc(coinX + coinSize / 2, coinY + coinSize / 2, coinSize / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Inner coin details
  ctx.strokeStyle = COLORS.darkSlate;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(coinX + coinSize / 2, coinY + coinSize / 2, coinSize / 2 - 20, 0, Math.PI * 2);
  ctx.stroke();

  // $PRICKO text on coin
  ctx.fillStyle = COLORS.darkSlate;
  ctx.font = 'bold 48px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('$PRICKO', coinX + coinSize / 2, coinY + coinSize / 2);

  // AI Circuit overlay on coin
  ctx.globalAlpha = 0.3;
  drawAICircuit(ctx, coinX + 20, coinY + 20, coinSize - 40, COLORS.darkSlate);
  ctx.globalAlpha = 1;

  // Text content - right side
  const textX = WIDTH * 0.55;
  const contentWidth = WIDTH - textX - TEXT_MARGIN;

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
  const taglineLines = wrapText(ctx, 'Powering Privacy-First AI', contentWidth);
  taglineLines.forEach((line, i) => {
    ctx.fillText(line, textX, 290 + i * 45);
  });

  // Launch date - highlighted
  ctx.fillStyle = COLORS.prickoGold;
  ctx.font = 'bold 38px Inter, sans-serif';
  ctx.fillText('Fair Launch', textX, 410);
  ctx.font = 'bold 52px Inter, sans-serif';
  ctx.fillText('November 2025', textX, 470);

  // Privacy Gecko logo (top right)
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

// 2. og-share.png - GeckoShare
async function createShareImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#0F172A');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Background pattern
  ctx.globalAlpha = 0.05;
  ctx.strokeStyle = COLORS.geckoGreen;
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
      const x = i * 150 + 75;
      const y = j * 150 + 75;
      roundRect(ctx, x - 30, y - 30, 60, 60, 8);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;

  // Central visual - file with lock
  const fileX = WIDTH * 0.25;
  const fileY = HEIGHT / 2;

  // File icon
  ctx.fillStyle = COLORS.geckoGreen;
  ctx.beginPath();
  ctx.moveTo(fileX - 80, fileY - 100);
  ctx.lineTo(fileX + 40, fileY - 100);
  ctx.lineTo(fileX + 80, fileY - 60);
  ctx.lineTo(fileX + 80, fileY + 100);
  ctx.lineTo(fileX - 80, fileY + 100);
  ctx.closePath();
  ctx.fill();

  // File corner fold
  ctx.fillStyle = COLORS.darkGreen;
  ctx.beginPath();
  ctx.moveTo(fileX + 40, fileY - 100);
  ctx.lineTo(fileX + 80, fileY - 60);
  ctx.lineTo(fileX + 40, fileY - 60);
  ctx.closePath();
  ctx.fill();

  // Lock on file
  drawLock(ctx, fileX - 40, fileY - 20, 80, COLORS.white);

  // Timer/countdown icon
  ctx.strokeStyle = COLORS.warningOrange;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(fileX + 100, fileY - 120, 35, -Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fileX + 100, fileY - 120);
  ctx.lineTo(fileX + 100, fileY - 100);
  ctx.stroke();

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 68px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoShare', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'Encrypted File Sharing',
    'Self-Destructing Links',
    'No Registration Required'
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

// 3. og-guard.png - GeckoGuard
async function createGuardImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#0F172A');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Central shield with AI circuit
  const shieldSize = 250;
  const shieldX = WIDTH * 0.25 - shieldSize / 2;
  const shieldY = HEIGHT / 2 - shieldSize / 2;

  // Glow effect
  ctx.save();
  ctx.shadowColor = COLORS.geckoGreen;
  ctx.shadowBlur = 50;
  drawShield(ctx, shieldX, shieldY, shieldSize, COLORS.geckoGreen);
  ctx.restore();

  // AI circuit on shield
  ctx.globalAlpha = 0.6;
  drawAICircuit(ctx, shieldX + 40, shieldY + 40, shieldSize - 80, COLORS.white);
  ctx.globalAlpha = 1;

  // Blocked trackers
  const blockedIcons = [
    { x: WIDTH * 0.15, y: HEIGHT * 0.2 },
    { x: WIDTH * 0.35, y: HEIGHT * 0.15 },
    { x: WIDTH * 0.15, y: HEIGHT * 0.75 },
    { x: WIDTH * 0.35, y: HEIGHT * 0.8 }
  ];

  blockedIcons.forEach(({ x, y }) => {
    // Eye icon (tracker)
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = COLORS.mediumGray;
    ctx.beginPath();
    ctx.ellipse(x, y, 25, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLORS.darkSlate;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Red X over it
    ctx.globalAlpha = 1;
    ctx.strokeStyle = COLORS.errorRed;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x - 20, y - 20);
    ctx.lineTo(x + 20, y + 20);
    ctx.moveTo(x + 20, y - 20);
    ctx.lineTo(x - 20, y + 20);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 68px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoGuard', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'AI Tracker Blocker',
    'Privacy Extension',
    'Block Tracking Scripts'
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

// 4. og-lock.png - GeckoLock
async function createLockImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, '#0F0F0F');
  gradient.addColorStop(1, COLORS.darkSlate);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Central vault/lock
  const lockSize = 280;
  const lockX = WIDTH * 0.25 - lockSize / 2;
  const lockY = HEIGHT / 2 - lockSize / 2;

  // Glow
  ctx.save();
  ctx.shadowColor = COLORS.geckoGreen;
  ctx.shadowBlur = 60;
  drawLock(ctx, lockX, lockY, lockSize, COLORS.geckoGreen);
  ctx.restore();

  // Key icons around lock
  const keyPositions = [
    { x: lockX - 60, y: lockY + 40, rotation: -30 },
    { x: lockX + lockSize + 20, y: lockY + 40, rotation: 30 }
  ];

  keyPositions.forEach(({ x, y, rotation }) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.fillStyle = COLORS.prickoGold;
    ctx.globalAlpha = 0.7;

    // Key shape
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-3, 0, 6, 40);
    ctx.fillRect(0, 30, 15, 5);
    ctx.fillRect(0, 40, 10, 5);

    ctx.restore();
  });
  ctx.globalAlpha = 1;

  // Zero-knowledge visual (blurred data)
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = COLORS.privacyBlue;
  for (let i = 0; i < 6; i++) {
    const barY = 150 + i * 40;
    const barWidth = 100 + Math.random() * 80;
    roundRect(ctx, 80, barY, barWidth, 20, 4);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

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

// 5. og-advisor.png - GeckoAdvisor
async function createAdvisorImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#1E293B');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Document/policy visual
  const docX = WIDTH * 0.25;
  const docY = HEIGHT / 2;
  const docWidth = 180;
  const docHeight = 240;

  // Document
  ctx.fillStyle = COLORS.white;
  roundRect(ctx, docX - docWidth / 2, docY - docHeight / 2, docWidth, docHeight, 8);
  ctx.fill();

  // Text lines on document
  ctx.fillStyle = COLORS.mediumGray;
  for (let i = 0; i < 8; i++) {
    const lineY = docY - docHeight / 2 + 30 + i * 25;
    const lineWidth = i % 3 === 0 ? docWidth - 40 : docWidth - 60;
    roundRect(ctx, docX - docWidth / 2 + 20, lineY, lineWidth, 4, 2);
    ctx.fill();
  }

  // Magnifying glass
  ctx.strokeStyle = COLORS.geckoGreen;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(docX + 40, docY + 40, 50, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(docX + 75, docY + 75);
  ctx.lineTo(docX + 105, docY + 105);
  ctx.stroke();

  // Shield with checkmark overlay
  ctx.globalAlpha = 0.9;
  drawShield(ctx, docX - 50, docY - 100, 60, COLORS.successGreen);
  ctx.globalAlpha = 1;

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 64px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoAdvisor', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'Privacy Policy Scanner',
    'AI-Powered Analysis',
    'Understand Your Data'
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

// 6. og-view.png - GeckoView
async function createViewImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#1E293B');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Bookmark ribbon
  const ribbonX = WIDTH * 0.25;
  const ribbonY = HEIGHT / 2 - 100;
  ctx.fillStyle = COLORS.geckoGreen;
  ctx.beginPath();
  ctx.moveTo(ribbonX - 60, ribbonY);
  ctx.lineTo(ribbonX + 60, ribbonY);
  ctx.lineTo(ribbonX + 60, ribbonY + 160);
  ctx.lineTo(ribbonX, ribbonY + 120);
  ctx.lineTo(ribbonX - 60, ribbonY + 160);
  ctx.closePath();
  ctx.fill();

  // AI brain/chip on ribbon
  ctx.globalAlpha = 0.7;
  drawAICircuit(ctx, ribbonX - 50, ribbonY + 20, 100, COLORS.white);
  ctx.globalAlpha = 1;

  // Book/reading visual
  ctx.strokeStyle = COLORS.privacyBlue;
  ctx.lineWidth = 6;
  ctx.fillStyle = 'transparent';
  ctx.beginPath();
  ctx.arc(ribbonX + 140, ribbonY + 80, 40, -Math.PI / 4, Math.PI / 4);
  ctx.stroke();

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 68px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoView', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'AI Bookmark Manager',
    'Private Summaries',
    'Smart Organization'
  ];
  taglines.forEach((line, i) => {
    ctx.fillText(line, textX, 260 + i * 55);
  });

  // Coming soon badge
  ctx.fillStyle = COLORS.privacyBlue;
  roundRect(ctx, textX, 470, 200, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('COMING SOON', textX + 100, 500);

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

// 7. og-shell.png - GeckoShell
async function createShellImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#1E293B');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Mobile phone outline
  const phoneX = WIDTH * 0.25;
  const phoneY = HEIGHT / 2;
  const phoneWidth = 140;
  const phoneHeight = 240;

  ctx.strokeStyle = COLORS.geckoGreen;
  ctx.lineWidth = 8;
  roundRect(ctx, phoneX - phoneWidth / 2, phoneY - phoneHeight / 2, phoneWidth, phoneHeight, 20);
  ctx.stroke();

  // Screen
  ctx.fillStyle = COLORS.darkSlate;
  roundRect(ctx, phoneX - phoneWidth / 2 + 10, phoneY - phoneHeight / 2 + 30, phoneWidth - 20, phoneHeight - 60, 12);
  ctx.fill();

  // Browser UI on screen
  ctx.fillStyle = COLORS.geckoGreen;
  roundRect(ctx, phoneX - phoneWidth / 2 + 20, phoneY - phoneHeight / 2 + 40, phoneWidth - 40, 20, 4);
  ctx.fill();

  // Shield on phone
  drawShield(ctx, phoneX - 30, phoneY - 20, 60, COLORS.geckoGreen);

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 68px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoShell', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'Privacy Mobile Browser',
    'iOS & Android',
    'Block Trackers on Mobile'
  ];
  taglines.forEach((line, i) => {
    ctx.fillText(line, textX, 260 + i * 55);
  });

  // Coming soon badge
  ctx.fillStyle = COLORS.privacyBlue;
  roundRect(ctx, textX, 470, 200, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('COMING SOON', textX + 100, 500);

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

// 8. og-vpn.png - Gecko VPN
async function createVPNImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#0F172A');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // World map dots (simplified)
  ctx.fillStyle = COLORS.privacyBlue;
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * WIDTH * 0.4 + 50;
    const y = Math.random() * HEIGHT;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // VPN tunnel visual
  const tunnelX = WIDTH * 0.25;
  const tunnelY = HEIGHT / 2;

  // Shield at center
  drawShield(ctx, tunnelX - 60, tunnelY - 80, 120, COLORS.geckoGreen);

  // Connection lines
  ctx.strokeStyle = COLORS.geckoGreen;
  ctx.lineWidth = 4;
  ctx.setLineDash([10, 10]);

  const connections = [
    { startX: tunnelX - 150, startY: tunnelY - 80, endX: tunnelX - 30, endY: tunnelY - 40 },
    { startX: tunnelX - 150, startY: tunnelY + 80, endX: tunnelX - 30, endY: tunnelY + 40 },
    { startX: tunnelX + 30, startY: tunnelY - 40, endX: tunnelX + 150, endY: tunnelY - 80 },
    { startX: tunnelX + 30, startY: tunnelY + 40, endX: tunnelX + 150, endY: tunnelY + 80 }
  ];

  connections.forEach(({ startX, startY, endX, endY }) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Server dots
    ctx.setLineDash([]);
    ctx.fillStyle = COLORS.geckoGreen;
    ctx.beginPath();
    ctx.arc(startX, startY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(endX, endY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.setLineDash([10, 10]);
  });
  ctx.setLineDash([]);

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 68px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Gecko VPN', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'Privacy-First VPN',
    'No-Logs Policy',
    'Global Network'
  ];
  taglines.forEach((line, i) => {
    ctx.fillText(line, textX, 260 + i * 55);
  });

  // Coming soon badge
  ctx.fillStyle = COLORS.privacyBlue;
  roundRect(ctx, textX, 470, 200, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('COMING SOON', textX + 100, 500);

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

// 9. og-watch.png - GeckoWatch
async function createWatchImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#1E293B');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Website preview with magnifying glass
  const siteX = WIDTH * 0.25;
  const siteY = HEIGHT / 2;

  // Browser window
  ctx.strokeStyle = COLORS.geckoGreen;
  ctx.lineWidth = 4;
  roundRect(ctx, siteX - 100, siteY - 80, 200, 140, 8);
  ctx.stroke();

  // Browser chrome
  ctx.fillStyle = COLORS.mediumGray;
  roundRect(ctx, siteX - 100, siteY - 80, 200, 30, 8);
  ctx.fill();

  // Content lines
  ctx.fillStyle = COLORS.lightGray;
  for (let i = 0; i < 4; i++) {
    roundRect(ctx, siteX - 80, siteY - 40 + i * 25, 160, 10, 2);
    ctx.fill();
  }

  // Magnifying glass
  ctx.strokeStyle = COLORS.privacyBlue;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(siteX + 80, siteY + 50, 45, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(siteX + 110, siteY + 80);
  ctx.lineTo(siteX + 140, siteY + 110);
  ctx.stroke();

  // Compliance badges
  const badges = ['GDPR', 'CCPA'];
  badges.forEach((badge, i) => {
    const badgeX = siteX - 80 + i * 90;
    const badgeY = siteY - 130;

    ctx.fillStyle = COLORS.successGreen;
    roundRect(ctx, badgeX, badgeY, 70, 30, 4);
    ctx.fill();

    ctx.fillStyle = COLORS.white;
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(badge, badgeX + 35, badgeY + 20);
  });

  // Text content
  const textX = WIDTH * 0.55;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 64px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('GeckoWatch', textX, 180);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = '36px Inter, sans-serif';
  const taglines = [
    'Privacy Compliance',
    'Monitor Websites',
    'GDPR & CCPA Tracking'
  ];
  taglines.forEach((line, i) => {
    ctx.fillText(line, textX, 260 + i * 55);
  });

  // Coming soon badge
  ctx.fillStyle = COLORS.privacyBlue;
  roundRect(ctx, textX, 470, 200, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('COMING SOON', textX + 100, 500);

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

// 10. og-products.png - Products Hub
async function createProductsImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, COLORS.darkSlate);
  gradient.addColorStop(1, '#0F172A');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Grid of product icons
  const iconSize = 100;
  const gridStartX = 120;
  const gridStartY = 200;
  const spacing = 140;

  const products = [
    { name: 'Share', color: COLORS.geckoGreen, icon: 'file' },
    { name: 'Guard', color: COLORS.privacyBlue, icon: 'shield' },
    { name: 'Lock', color: COLORS.prickoGold, icon: 'lock' },
    { name: 'Advisor', color: COLORS.successGreen, icon: 'doc' },
    { name: 'View', color: COLORS.darkPurple, icon: 'bookmark' },
    { name: 'Shell', color: COLORS.geckoGreen, icon: 'phone' },
    { name: 'VPN', color: COLORS.privacyBlue, icon: 'globe' },
    { name: 'Watch', color: COLORS.prickoGold, icon: 'eye' }
  ];

  products.forEach((product, index) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const x = gridStartX + col * spacing;
    const y = gridStartY + row * spacing;

    // Icon background
    ctx.fillStyle = product.color;
    ctx.globalAlpha = 0.2;
    roundRect(ctx, x, y, iconSize, iconSize, 16);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Icon border
    ctx.strokeStyle = product.color;
    ctx.lineWidth = 3;
    roundRect(ctx, x, y, iconSize, iconSize, 16);
    ctx.stroke();

    // Simple icon representation
    ctx.fillStyle = product.color;
    const centerX = x + iconSize / 2;
    const centerY = y + iconSize / 2;

    if (product.icon === 'shield') {
      drawShield(ctx, centerX - 25, centerY - 30, 50, product.color);
    } else if (product.icon === 'lock') {
      drawLock(ctx, centerX - 20, centerY - 25, 40, product.color);
    } else {
      // Generic icon (circle)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fill();
    }

    // Product name
    ctx.fillStyle = COLORS.lightGray;
    ctx.font = '16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(product.name, centerX, y + iconSize + 25);
  });

  // Text content - right side
  const textX = WIDTH * 0.62;

  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 72px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Privacy', textX, 200);
  ctx.fillText('Toolkit', textX, 270);

  ctx.fillStyle = COLORS.geckoGreen;
  ctx.font = 'bold 48px Inter, sans-serif';
  ctx.fillText('8 Tools', textX, 350);

  ctx.fillStyle = COLORS.lightGray;
  ctx.font = '28px Inter, sans-serif';
  ctx.fillText('2 Live Products', textX, 410);
  ctx.fillText('6 In Development', textX, 450);

  // Powered by token badge
  ctx.fillStyle = COLORS.prickoGold;
  ctx.globalAlpha = 0.2;
  roundRect(ctx, textX, 490, 280, 60, 30);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = COLORS.prickoGold;
  ctx.font = 'bold 32px Inter, sans-serif';
  ctx.fillText('Powered by $PRICKO', textX + 20, 530);

  // Logo
  try {
    const logo = await loadImage(path.join(__dirname, '../public/images/PrivacyGecko_logo.png'));
    const logoHeight = 60;
    const logoWidth = (logo.width / logo.height) * logoHeight;
    ctx.drawImage(logo, WIDTH - logoWidth - LOGO_MARGIN, LOGO_MARGIN, logoWidth, logoHeight);
  } catch (err) {
    console.log('Logo not found, skipping');
  }

  return canvas;
}

// Main function to generate all images
async function generateAllImages() {
  const outputDir = path.join(__dirname, '../public/images');

  const images = [
    { name: 'og-token.png', generator: createTokenImage, priority: 'HIGHEST' },
    { name: 'og-share.png', generator: createShareImage, priority: 'HIGH' },
    { name: 'og-guard.png', generator: createGuardImage, priority: 'HIGH' },
    { name: 'og-lock.png', generator: createLockImage, priority: 'HIGH' },
    { name: 'og-advisor.png', generator: createAdvisorImage, priority: 'HIGH' },
    { name: 'og-view.png', generator: createViewImage, priority: 'MEDIUM' },
    { name: 'og-shell.png', generator: createShellImage, priority: 'MEDIUM' },
    { name: 'og-vpn.png', generator: createVPNImage, priority: 'MEDIUM' },
    { name: 'og-watch.png', generator: createWatchImage, priority: 'MEDIUM' },
    { name: 'og-products.png', generator: createProductsImage, priority: 'MEDIUM' }
  ];

  console.log('Generating Open Graph images for Privacy Gecko...\n');

  for (const image of images) {
    try {
      console.log(`[${image.priority}] Generating ${image.name}...`);
      const canvas = await image.generator();
      const buffer = canvas.toBuffer('image/png', { compressionLevel: 9 });
      const filePath = path.join(outputDir, image.name);
      fs.writeFileSync(filePath, buffer);
      const sizeKB = (buffer.length / 1024).toFixed(2);
      console.log(`  ✓ Created ${image.name} (${sizeKB} KB)\n`);
    } catch (err) {
      console.error(`  ✗ Error generating ${image.name}:`, err.message, '\n');
    }
  }

  console.log('All Open Graph images generated successfully!');
  console.log(`\nImages saved to: ${outputDir}`);
  console.log('\nNext steps:');
  console.log('1. Verify images display correctly at thumbnail size');
  console.log('2. Test on social media platforms:');
  console.log('   - Facebook: https://developers.facebook.com/tools/debug/');
  console.log('   - Twitter: https://cards-dev.twitter.com/validator');
  console.log('   - LinkedIn: https://www.linkedin.com/post-inspector/');
}

// Run if called directly
if (require.main === module) {
  generateAllImages().catch(console.error);
}

module.exports = { generateAllImages };
