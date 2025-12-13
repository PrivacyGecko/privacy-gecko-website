import { db } from '../src/index';
import { articles } from '../src/schema';
import { eq } from 'drizzle-orm';

// High-quality Unsplash images matched to article topics
const articleImages: Record<number, string> = {
  // How Local AI Protects Your Privacy (vs Cloud AI) - AI chip/processor
  30: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',

  // Privacy Memecoins: Memes with a Mission - Colorful crypto/blockchain
  29: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',

  // Privacy Tools Every Crypto Trader Needs - Crypto security/trading
  28: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1200&q=80',

  // The Complete Guide to Privacy Tools in 2025 - Privacy/security concept
  27: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',

  // Introducing GeckoCore Protocol - Network/blockchain nodes
  22: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80',

  // GeckoCore Protocol Whitepaper - Technical document/blueprint
  21: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',

  // Getting Started with GeckoAdvisor - Dashboard/tutorial
  26: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',

  // Open Source Privacy Tools - Code/development
  25: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',

  // Why Privacy Tools Matter in 2025 - Digital privacy concept
  24: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80',

  // Introducing Privacy Gecko: Our Story - Team/startup
  23: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
};

async function updateArticleImages() {
  console.log('Updating article images...\n');

  for (const [articleId, imageUrl] of Object.entries(articleImages)) {
    try {
      const id = parseInt(articleId);
      await db
        .update(articles)
        .set({ featuredImage: imageUrl })
        .where(eq(articles.id, id));

      console.log(`✓ Updated article ${id} with image`);
    } catch (error) {
      console.error(`✗ Failed to update article ${articleId}:`, error);
    }
  }

  console.log('\nDone! Updated', Object.keys(articleImages).length, 'articles with unique images.');
  process.exit(0);
}

updateArticleImages();
