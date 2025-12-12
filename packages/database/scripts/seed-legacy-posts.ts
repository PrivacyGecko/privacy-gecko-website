import 'dotenv/config'
import { db } from '../src/client'
import { categories, articles } from '../src/schema'
import { eq } from 'drizzle-orm'

// Legacy blog posts from main site that need to be migrated
const legacyPosts = [
  {
    slug: 'geckocore-protocol-whitepaper-v1-launch',
    title: 'GeckoCore Protocol Whitepaper v1.0: The Privacy Proof Layer for Solana',
    excerpt: 'The GeckoCore Protocol Whitepaper v1.0 is officially live. Discover the Privacy Proof Layer for Solana with zero-knowledge proofs, 5 Privacy Feeds, and token economics.',
    category: 'product-updates',
    content: `# GeckoCore Protocol Whitepaper v1.0

The GeckoCore Protocol Whitepaper v1.0 is officially live. This document outlines the Privacy Proof Layer for Solana with zero-knowledge proofs, 5 Privacy Feeds, and token economics.

## Key Features

- Zero-knowledge proofs for privacy verification
- 5 Privacy Feeds for comprehensive coverage
- Token economics designed for sustainability

Read the full whitepaper for complete details.`,
    targetProducts: ['geckocore'],
  },
  {
    slug: 'introducing-geckocore-protocol',
    title: 'Introducing GeckoCore Protocol: The Hub for Privacy Tools',
    excerpt: 'GeckoCore Protocol unifies 8 privacy tools with one wallet login powered by $PRICKO. Open-source, zero-knowledge, launching Q4 2026.',
    category: 'product-updates',
    content: `# Introducing GeckoCore Protocol

GeckoCore Protocol is the central hub that unifies all 8 Privacy Gecko tools with a single wallet login, powered by the $PRICKO token.

## What is GeckoCore?

- Unified authentication across all privacy tools
- Zero-knowledge architecture
- Open-source and auditable
- Launching Q4 2026

Stay tuned for more updates on our development progress.`,
    targetProducts: ['geckocore'],
  },
  {
    slug: 'introducing-privacy-gecko',
    title: 'Introducing Privacy Gecko: Our Story',
    excerpt: "Learn about the mission behind Privacy Gecko and why we're building the privacy tools we wished existed.",
    category: 'product-updates',
    content: `# Introducing Privacy Gecko

Privacy Gecko started with a simple observation: privacy tools are either too complex for everyday users or compromise on actual privacy.

## Our Mission

We're building privacy tools that are:
- Easy to use
- Actually private
- Open source
- Community-driven

Join us on this journey to make digital privacy accessible to everyone.`,
    targetProducts: ['geckoadvisor', 'geckoshare'],
  },
  {
    slug: 'why-privacy-tools-matter-2025',
    title: 'Why Privacy Tools Matter in 2025',
    excerpt: 'Exploring the growing importance of digital privacy and why accessible privacy tools are more critical than ever.',
    category: 'privacy',
    content: `# Why Privacy Tools Matter in 2025

Digital privacy has never been more important. In 2025, we face unprecedented challenges to our online privacy.

## The Current Landscape

- Data breaches are at an all-time high
- Tracking technologies are more sophisticated
- AI makes data analysis more powerful
- Regulations are struggling to keep up

## What You Can Do

1. Use privacy-focused tools
2. Understand your data footprint
3. Make informed choices about services you use

Privacy is not about having something to hide—it's about having control over your own information.`,
    targetProducts: ['geckoadvisor', 'geckoguard'],
  },
  {
    slug: 'open-source-privacy-tools',
    title: 'Open Source Privacy Tools: Why It Matters',
    excerpt: 'Why open source matters for privacy tools. Learn how transparency, community audits, and verifiable security make open source the gold standard.',
    category: 'privacy',
    content: `# Open Source Privacy Tools: Why It Matters

When it comes to privacy tools, open source isn't just a nice-to-have—it's essential.

## Why Open Source?

### Transparency
- You can verify exactly what the code does
- No hidden backdoors or tracking

### Community Audits
- Security researchers can review the code
- Vulnerabilities are found and fixed faster

### Trust Through Verification
- "Don't trust, verify" becomes possible
- Independence from any single company

All Privacy Gecko tools are open source because we believe privacy requires transparency.`,
    targetProducts: ['geckoadvisor', 'geckoshare', 'geckoguard'],
  },
  {
    slug: 'getting-started-geckoadvisor',
    title: 'Getting Started with GeckoAdvisor',
    excerpt: 'A complete guide to using GeckoAdvisor to scan website privacy policies and detect hidden trackers.',
    category: 'tutorials',
    content: `# Getting Started with GeckoAdvisor

GeckoAdvisor helps you understand what websites really do with your data. Here's how to get started.

## Step 1: Install the Extension

Download GeckoAdvisor from your browser's extension store.

## Step 2: Visit Any Website

Navigate to any website you want to analyze.

## Step 3: Check the Privacy Score

Click the GeckoAdvisor icon to see:
- Overall privacy score
- Data collection practices
- Third-party trackers
- Cookie usage

## Step 4: Make Informed Decisions

Use the insights to decide whether to continue using a service or find a more privacy-respecting alternative.`,
    targetProducts: ['geckoadvisor'],
  },
  {
    slug: 'complete-guide-privacy-tools-2025',
    title: 'The Complete Guide to Privacy Tools in 2025',
    excerpt: 'Discover the best privacy tools in 2025. Complete guide covering VPNs, password managers, ad blockers, and more.',
    category: 'privacy',
    content: `# The Complete Guide to Privacy Tools in 2025

Protecting your privacy online requires the right tools. Here's our comprehensive guide to the best privacy tools in 2025.

## Essential Categories

### 1. Password Managers
Secure, unique passwords for every account.

### 2. VPNs
Encrypt your internet traffic and hide your IP.

### 3. Ad Blockers
Block trackers and intrusive advertisements.

### 4. Encrypted Messaging
Keep your conversations private.

### 5. Privacy-Focused Browsers
Browse without being tracked.

### 6. File Sharing
Share files without exposing your data.

## Our Recommendations

Privacy Gecko offers tools across several of these categories, all built with privacy-first principles.`,
    targetProducts: ['geckoadvisor', 'geckoshare', 'geckoguard', 'geckolock'],
  },
  {
    slug: 'crypto-trader-privacy-tools',
    title: 'Privacy Tools Every Crypto Trader Needs',
    excerpt: 'Essential privacy tools for crypto traders in 2025. Learn how to protect your wallet, transactions, and identity.',
    category: 'crypto-safety',
    content: `# Privacy Tools Every Crypto Trader Needs

Crypto trading requires extra privacy considerations. Your wallet addresses are public, but your identity doesn't have to be.

## Essential Privacy Practices

### 1. Wallet Privacy
- Use multiple wallets
- Consider privacy-focused chains
- Never share private keys

### 2. Transaction Privacy
- Mix or tumble when appropriate
- Use privacy tokens for sensitive transactions
- Be aware of chain analysis

### 3. Identity Protection
- Use VPNs when trading
- Separate trading email from personal
- Enable 2FA everywhere

### 4. Operational Security
- Use hardware wallets
- Keep software updated
- Verify all addresses carefully

Stay safe out there, traders.`,
    targetProducts: ['geckoguard', 'geckolock'],
  },
  {
    slug: 'privacy-memecoins-explained',
    title: 'Privacy Memecoins: Memes with a Mission Explained',
    excerpt: 'What are privacy memecoins? Learn how $PRICKO and other privacy-focused tokens combine community fun with real privacy utility.',
    category: 'crypto-safety',
    content: `# Privacy Memecoins: Memes with a Mission

Memecoins don't have to be just about the memes. Privacy memecoins combine community engagement with real utility.

## What Makes a Privacy Memecoin?

### Community + Utility
- Fun, engaging community
- Real products and services
- Sustainable tokenomics

### $PRICKO: Our Approach

$PRICKO powers the Privacy Gecko ecosystem:
- Access to premium features
- Governance rights
- Staking rewards
- Community incentives

## Memes With a Mission

We believe crypto can be fun AND useful. $PRICKO represents this philosophy—building real privacy tools while maintaining an engaging, meme-friendly community.`,
    targetProducts: ['geckocore'],
  },
  {
    slug: 'local-ai-privacy-protection',
    title: 'How Local AI Protects Your Privacy (vs Cloud AI)',
    excerpt: 'Local AI vs cloud AI for privacy. Learn how on-device AI processing protects your data with federated learning and edge computing.',
    category: 'privacy',
    content: `# How Local AI Protects Your Privacy

AI is powerful, but cloud-based AI comes with privacy tradeoffs. Local AI offers an alternative.

## Cloud AI Privacy Concerns

- Your data is sent to external servers
- Data may be used for training
- Potential for breaches
- Less control over your information

## Local AI Benefits

### On-Device Processing
- Data never leaves your device
- No network transmission risks
- Full control over your information

### Federated Learning
- Models improve without sharing raw data
- Privacy-preserving machine learning
- Community benefits without individual exposure

### Edge Computing
- Processing happens at the "edge"
- Faster response times
- No cloud dependency

## The Future of Private AI

Privacy Gecko is committed to local-first AI wherever possible. Your data stays yours.`,
    targetProducts: ['geckoadvisor'],
  },
]

async function seedLegacyPosts() {
  console.log('Starting legacy posts migration...')

  // First, ensure required categories exist
  const requiredCategories = [
    { name: 'Product Updates', slug: 'product-updates', description: 'News and announcements about Privacy Gecko products' },
    { name: 'Tutorials', slug: 'tutorials', description: 'Step-by-step guides for using Privacy Gecko tools' },
  ]

  for (const cat of requiredCategories) {
    const existing = await db.select().from(categories).where(eq(categories.slug, cat.slug)).limit(1)
    if (existing.length === 0) {
      console.log(`Creating category: ${cat.name}`)
      await db.insert(categories).values(cat)
    } else {
      console.log(`Category already exists: ${cat.name}`)
    }
  }

  // Get all categories for mapping
  const allCategories = await db.select().from(categories)
  const categoryMap = new Map(allCategories.map(c => [c.slug, c.id]))

  // Add legacy posts
  for (const post of legacyPosts) {
    const categoryId = categoryMap.get(post.category)
    if (!categoryId) {
      console.error(`Category not found: ${post.category}`)
      continue
    }

    // Check if article already exists
    const existing = await db.select().from(articles).where(eq(articles.slug, post.slug)).limit(1)
    if (existing.length > 0) {
      console.log(`Article already exists: ${post.slug}`)
      continue
    }

    console.log(`Adding article: ${post.title}`)
    await db.insert(articles).values({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      categoryId,
      status: 'published',
      targetProducts: post.targetProducts,
      publishedAt: new Date(),
      readingTime: Math.ceil(post.content.split(/\s+/).length / 200),
      wordCount: post.content.split(/\s+/).length,
    })
  }

  console.log('Legacy posts migration complete!')
  process.exit(0)
}

seedLegacyPosts().catch(console.error)
