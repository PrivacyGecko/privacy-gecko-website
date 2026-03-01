import 'dotenv/config'
import { db } from '../src/client'
import { categories } from '../src/schema'
import { eq } from 'drizzle-orm'

// Fix stale product references in category descriptions
const fixes: Record<string, string> = {
  'browser-protection':
    'Hardening your browser: fingerprinting, trackers, extensions, and browser settings.',
  'passwords-identity':
    'Password strategy, MFA, identity theft prevention, and authentication best practices.',
}

async function fixCategoryDescriptions() {
  console.log('Fixing stale category descriptions...\n')

  for (const [slug, newDescription] of Object.entries(fixes)) {
    const [category] = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, slug))
      .limit(1)

    if (!category) {
      console.log(`  Category "${slug}" not found, skipping`)
      continue
    }

    console.log(`  ${category.name}: "${category.description}"`)
    console.log(`  → "${newDescription}"`)

    await db
      .update(categories)
      .set({ description: newDescription, updatedAt: new Date() })
      .where(eq(categories.id, category.id))

    console.log(`  ✓ Updated\n`)
  }

  console.log('Done!')
  process.exit(0)
}

fixCategoryDescriptions().catch(console.error)
