const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateHomeOGImage() {
  try {
    // Create canvas
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');

    // Background gradient (Dark Blue to Dark Slate)
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#1e3a8a');
    gradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Load and draw logo - centered at top
    const logoPath = path.join(__dirname, '../public/images/logo.png');
    const logo = await loadImage(logoPath);

    // Use appropriate logo size
    const logoWidth = 320;
    const logoHeight = (logo.height / logo.width) * logoWidth;
    const logoX = (1200 - logoWidth) / 2;
    const logoY = 50;

    ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

    // Calculate where content should start (below logo with spacing)
    const contentStartY = logoY + logoHeight + 30;

    // Subheading: "8 AI-Enhanced Privacy Tools"
    ctx.fillStyle = '#00D98A'; // Gecko Green
    ctx.font = 'bold 30px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('8 AI-Enhanced Privacy Tools', 600, contentStartY);

    // Tagline
    ctx.fillStyle = '#9ca3af'; // Medium Gray
    ctx.font = '20px Inter, sans-serif';
    ctx.fillText('Privacy Tools That Actually Work', 600, contentStartY + 35);

    // Divider line
    ctx.strokeStyle = '#00D98A';
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, contentStartY + 60);
    ctx.lineTo(900, contentStartY + 60);
    ctx.stroke();
    ctx.globalAlpha = 1.0;

    // Feature Cards - position based on content
    const cardsY = contentStartY + 90;
    const cards = [
      { x: 130, icon: '🔧', title: '8 Products', subtitle: 'Complete Toolkit' },
      { x: 400, icon: '🔒', title: 'Zero Data', subtitle: 'No Collection' },
      { x: 670, icon: '💻', title: 'Open Source', subtitle: 'Fully Transparent' },
      { x: 940, icon: '✨', title: 'Free Tier', subtitle: 'Always Available' }
    ];

    cards.forEach(card => {
      // Card background
      ctx.fillStyle = '#1a1d29';
      ctx.strokeStyle = '#00D98A';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.9;
      roundRect(ctx, card.x, cardsY, 240, 110, 12);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      ctx.stroke();

      // Icon
      ctx.font = '28px Arial';
      ctx.fillText(card.icon, card.x + 120, cardsY + 35);

      // Title
      ctx.fillStyle = '#00D98A';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText(card.title, card.x + 120, cardsY + 65);

      // Subtitle
      ctx.fillStyle = '#9ca3af';
      ctx.font = '13px Inter, sans-serif';
      ctx.fillText(card.subtitle, card.x + 120, cardsY + 85);
    });

    // Product Icons Row Label
    const iconsLabelY = cardsY + 140;
    ctx.fillStyle = '#9ca3af';
    ctx.font = '600 14px Inter, sans-serif';
    ctx.fillText('ALL 8 PRIVACY TOOLS', 600, iconsLabelY);

    // Product Icons
    const iconsY = iconsLabelY + 35;
    const products = [
      { cx: 280, icon: '🔍', color: '#00D98A' },
      { cx: 380, icon: '📤', color: '#00D98A' },
      { cx: 480, icon: '🛡️', color: '#3b82f6' },
      { cx: 580, icon: '🔒', color: '#FFD700' },
      { cx: 680, icon: '👁️', color: '#a855f7' },
      { cx: 780, icon: '💻', color: '#00D98A' },
      { cx: 880, icon: '🌐', color: '#3b82f6' },
      { cx: 980, icon: '⚠️', color: '#FFD700' }
    ];

    products.forEach(product => {
      // Circle background
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.arc(product.cx, iconsY, 28, 0, Math.PI * 2);
      ctx.fill();

      // Circle border
      ctx.strokeStyle = product.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Icon
      ctx.font = '18px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(product.icon, product.cx, iconsY + 6);
    });

    // Gecko Logo (top-right) - simple version
    ctx.fillStyle = '#00D98A';
    ctx.beginPath();
    ctx.arc(1130, 50, 25, 0, Math.PI * 2);
    ctx.fill();

    // Gecko eye
    ctx.fillStyle = '#1a1d29';
    ctx.beginPath();
    ctx.arc(1130, 43, 6, 0, Math.PI * 2);
    ctx.fill();

    // Gecko body
    ctx.beginPath();
    ctx.ellipse(1130, 53, 12, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Gecko eye whites
    ctx.fillStyle = '#00D98A';
    ctx.beginPath();
    ctx.arc(1126, 41, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(1134, 41, 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Launch Badge (bottom-right)
    ctx.fillStyle = '#00D98A';
    roundRect(ctx, 1055, 550, 130, 50, 25);
    ctx.fill();

    ctx.fillStyle = '#1a1d29';
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.fillText('Nov 2025', 1120, 581);

    // Save as PNG
    const outputPath = path.join(__dirname, '../public/images/og-home.png');
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);

    console.log('✅ Successfully generated homepage OG image!');
    console.log(`📁 Output: ${outputPath}`);
    console.log(`📊 File size: ${(buffer.length / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

// Helper function for rounded rectangles
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

generateHomeOGImage();
