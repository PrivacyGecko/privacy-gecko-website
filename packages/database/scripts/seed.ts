import 'dotenv/config'
import { db } from '../src/client'
import {
  categories,
  pillars,
  articles,
  ArticleStatus,
  SearchIntent,
  TargetProduct,
} from '../src/schema'

async function seed() {
  console.log('🌱 Seeding database...')

  // Clear existing data (in reverse order of dependencies)
  console.log('Clearing existing data...')
  await db.delete(articles)
  await db.delete(pillars)
  await db.delete(categories)

  // ============================================
  // SEED CATEGORIES
  // ============================================
  // NOTE: Security category merged into Privacy per SEO guide
  // 5 categories total (removed separate Security category)
  console.log('Seeding categories...')
  const [privacy, cryptoSafety, browserProtection, fileSecurity, passwordsIdentity] =
    await db
      .insert(categories)
      .values([
        {
          name: 'Privacy',
          slug: 'privacy',
          description:
            'Data protection, tracking prevention, security fundamentals, and digital privacy guides.',
        },
        {
          name: 'Crypto Safety',
          slug: 'crypto-safety',
          description:
            'Privacy-focused cryptocurrency, wallet security, DeFi safety, and on-chain privacy.',
        },
        {
          name: 'Browser Protection',
          slug: 'browser-protection',
          description:
            'Browser fingerprinting, extensions, tracker blocking, and browser hardening.',
        },
        {
          name: 'File Security',
          slug: 'file-security',
          description:
            'Secure file sharing, encryption, metadata protection, and GeckoShare workflows.',
        },
        {
          name: 'Passwords & Identity',
          slug: 'passwords-identity',
          description:
            'Password security, identity protection, MFA, and authentication best practices.',
        },
      ])
      .returning()

  console.log(`✅ Seeded ${5} categories`)

  // ============================================
  // SEED PILLARS
  // ============================================
  // NOTE: Pillar slugs are evergreen (no years) per SEO guide
  console.log('Seeding pillars...')
  const seededPillars = await db
    .insert(pillars)
    .values([
      {
        title: 'The Complete Online Privacy Guide',
        slug: 'online-privacy-guide',
        excerpt:
          'Everything you need to know about protecting your privacy online, from basic browser settings to advanced anonymity techniques.',
        categoryId: privacy.id,
        targetProducts: [
          TargetProduct.GECKO_ADVISOR,
          TargetProduct.GECKO_GUARD,
          TargetProduct.GECKO_LOCK,
        ],
        status: ArticleStatus.DRAFT,
        metaTitle: 'Complete Online Privacy Guide | Protect Your Digital Life',
        metaDescription:
          'Master online privacy. Learn how websites track you, essential browser settings, must-have privacy tools, and daily habits that protect your data.',
      },
      {
        title: 'Secure File Sharing Guide',
        slug: 'secure-file-sharing-guide',
        excerpt:
          'Learn why normal file sharing is risky and how to send sensitive documents securely with encryption and access controls.',
        categoryId: fileSecurity.id,
        targetProducts: [TargetProduct.GECKO_SHARE],
        status: ArticleStatus.DRAFT,
        metaTitle: 'Secure File Sharing Guide | Send Files Safely',
        metaDescription:
          'Stop sharing files insecurely. Learn about encrypted file sharing, time-limited links, and how to send sensitive documents without risk.',
      },
      {
        title: 'Browser Fingerprinting & Tracker Protection',
        slug: 'browser-fingerprinting-protection',
        excerpt:
          'Discover how advertisers and trackers identify you without cookies, and what you can do to reduce your fingerprint.',
        categoryId: browserProtection.id,
        targetProducts: [TargetProduct.GECKO_GUARD, TargetProduct.GECKO_ADVISOR],
        status: ArticleStatus.DRAFT,
        metaTitle: 'Browser Fingerprinting Explained | How Trackers Follow You',
        metaDescription:
          'Learn how browser fingerprinting works, why ad blockers aren\'t enough, and how to test and reduce your browser\'s unique fingerprint.',
      },
    ])
    .returning()

  console.log(`✅ Seeded ${seededPillars.length} pillars`)

  // ============================================
  // SEED SAMPLE ARTICLES
  // ============================================
  console.log('Seeding sample articles...')

  const fileSharingPillar = seededPillars.find(
    (p) => p.slug === 'secure-file-sharing-guide'
  )!

  const browserPillar = seededPillars.find(
    (p) => p.slug === 'browser-fingerprinting-protection'
  )!

  const privacyPillar = seededPillars.find(
    (p) => p.slug === 'online-privacy-guide'
  )!

  const seededArticles = await db
    .insert(articles)
    .values([
      // File Security cluster
      {
        title: '7 Common Mistakes People Make When Sharing Files Over Email',
        slug: 'common-file-sharing-mistakes-email',
        excerpt:
          'Email feels safe, but these 7 mistakes could expose your sensitive files to anyone.',
        content: '# 7 Common Mistakes People Make When Sharing Files Over Email\n\nThis is a sample article content. Replace with actual content.',
        categoryId: fileSecurity.id,
        pillarId: fileSharingPillar.id,
        targetProducts: [TargetProduct.GECKO_SHARE],
        searchIntent: SearchIntent.INFORMATIONAL,
        status: ArticleStatus.DRAFT,
        keywords: ['email security', 'file sharing mistakes', 'secure file transfer'],
      },
      {
        title: 'How to Share Large Files Without Using Google Drive',
        slug: 'share-large-files-without-google-drive',
        excerpt:
          'Google Drive is convenient but not always secure. Here are better alternatives for large file sharing.',
        content: '# How to Share Large Files Without Using Google Drive\n\nThis is a sample article content. Replace with actual content.',
        categoryId: fileSecurity.id,
        pillarId: fileSharingPillar.id,
        targetProducts: [TargetProduct.GECKO_SHARE],
        searchIntent: SearchIntent.COMMERCIAL,
        status: ArticleStatus.DRAFT,
        keywords: ['large file sharing', 'google drive alternatives', 'secure file transfer'],
      },
      // Browser Protection cluster
      {
        title: 'Canvas Fingerprinting Explained Like You\'re Not a Developer',
        slug: 'canvas-fingerprinting-explained',
        excerpt:
          'What is canvas fingerprinting and why should you care? A non-technical explanation.',
        content: '# Canvas Fingerprinting Explained\n\nThis is a sample article content. Replace with actual content.',
        categoryId: browserProtection.id,
        pillarId: browserPillar.id,
        targetProducts: [TargetProduct.GECKO_GUARD, TargetProduct.GECKO_ADVISOR],
        searchIntent: SearchIntent.INFORMATIONAL,
        status: ArticleStatus.DRAFT,
        keywords: ['canvas fingerprinting', 'browser tracking', 'online privacy'],
      },
      {
        title: 'How Advertisers Track You Across Sites Without Cookies',
        slug: 'how-advertisers-track-without-cookies',
        excerpt:
          'Cookies are just the beginning. Learn the sneaky ways advertisers follow you across the web.',
        content: '# How Advertisers Track You Without Cookies\n\nThis is a sample article content. Replace with actual content.',
        categoryId: browserProtection.id,
        pillarId: browserPillar.id,
        targetProducts: [TargetProduct.GECKO_GUARD],
        searchIntent: SearchIntent.INFORMATIONAL,
        status: ArticleStatus.DRAFT,
        keywords: ['ad tracking', 'cookie alternatives', 'browser privacy'],
      },
      // Privacy cluster
      {
        title: 'Online Privacy Basics: 10 Settings You Should Change Right Now',
        slug: 'online-privacy-basics-10-settings',
        excerpt:
          'Quick wins for your privacy. Change these 10 settings today and dramatically reduce your exposure.',
        content: '# Online Privacy Basics: 10 Settings You Should Change Right Now\n\nThis is a sample article content. Replace with actual content.',
        categoryId: privacy.id,
        pillarId: privacyPillar.id,
        targetProducts: [TargetProduct.GECKO_ADVISOR, TargetProduct.GECKO_GUARD],
        searchIntent: SearchIntent.TUTORIAL,
        status: ArticleStatus.DRAFT,
        keywords: ['privacy settings', 'online privacy', 'privacy basics'],
      },
    ])
    .returning()

  console.log(`✅ Seeded ${seededArticles.length} sample articles`)

  console.log('\n🎉 Database seeding complete!')
  console.log(`
Summary:
- ${5} categories (Security merged into Privacy)
- ${seededPillars.length} pillars (evergreen slugs, no years)
- ${seededArticles.length} sample articles (drafts)

Next steps:
1. Run 'pnpm db:studio' to view data in Drizzle Studio
2. Update article content with real content
3. Change status to 'published' when ready
  `)

  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err)
  process.exit(1)
})
