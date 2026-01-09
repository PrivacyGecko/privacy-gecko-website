import 'dotenv/config';
import { db } from "../src/client";
import { articles, categories, pillars } from "../src/schema";
import { eq } from "drizzle-orm";

/**
 * Fix database to align with SEO guide:
 * 1. Re-categorize articles from deprecated categories
 * 2. Delete deprecated categories
 * 3. Publish pillars
 */

// Category mapping: deprecated -> approved
const CATEGORY_MAPPING: Record<string, string> = {
  "security": "privacy", // Security merged into Privacy
  "product-updates": "privacy", // Product Updates -> Privacy (company news)
  "tutorials": "privacy", // Tutorials -> Privacy (how-to guides)
};

async function fixCategories() {
  console.log("🦎 Starting database category cleanup...\n");

  // 1. Get all categories
  const allCategories = await db.select().from(categories);
  console.log("Current categories:");
  allCategories.forEach(c => console.log(`  ${c.id}. ${c.name} (${c.slug})`));

  // 2. Find approved categories and deprecated ones
  const approvedSlugs = ["privacy", "browser-protection", "file-security", "passwords-identity"];
  const approvedCategories = allCategories.filter(c => approvedSlugs.includes(c.slug));
  const deprecatedCategories = allCategories.filter(c => !approvedSlugs.includes(c.slug));

  console.log("\n✓ Approved categories:", approvedCategories.map(c => c.slug).join(", "));
  console.log("✗ Deprecated categories:", deprecatedCategories.map(c => c.slug).join(", "));

  // 3. Get the Privacy category ID (target for most re-categorizations)
  const privacyCategory = approvedCategories.find(c => c.slug === "privacy");
  if (!privacyCategory) {
    console.error("ERROR: Privacy category not found!");
    process.exit(1);
  }

  // 4. Re-categorize articles from deprecated categories
  console.log("\n📝 Re-categorizing articles...");

  for (const deprecatedCat of deprecatedCategories) {
    const targetSlug = CATEGORY_MAPPING[deprecatedCat.slug] || "privacy";
    const targetCategory = approvedCategories.find(c => c.slug === targetSlug);

    if (!targetCategory) {
      console.log(`  ⚠️ Target category '${targetSlug}' not found, using Privacy`);
      continue;
    }

    // Get articles in this deprecated category
    const articlesInCategory = await db
      .select({ id: articles.id, title: articles.title })
      .from(articles)
      .where(eq(articles.categoryId, deprecatedCat.id));

    if (articlesInCategory.length > 0) {
      console.log(`\n  Moving ${articlesInCategory.length} articles from '${deprecatedCat.slug}' to '${targetSlug}':`);
      articlesInCategory.forEach(a => console.log(`    - ${a.title.substring(0, 60)}...`));

      // Update articles to new category
      await db
        .update(articles)
        .set({ categoryId: targetCategory.id })
        .where(eq(articles.categoryId, deprecatedCat.id));

      console.log(`  ✓ Moved ${articlesInCategory.length} articles`);
    } else {
      console.log(`  No articles in '${deprecatedCat.slug}'`);
    }
  }

  // 5. Delete deprecated categories
  console.log("\n🗑️ Deleting deprecated categories...");
  for (const deprecatedCat of deprecatedCategories) {
    await db.delete(categories).where(eq(categories.id, deprecatedCat.id));
    console.log(`  ✓ Deleted: ${deprecatedCat.name} (${deprecatedCat.slug})`);
  }

  // 6. Publish pillars
  console.log("\n📚 Publishing pillars...");
  const allPillars = await db.select().from(pillars);
  for (const pillar of allPillars) {
    if (pillar.status === "draft") {
      await db.update(pillars).set({ status: "published" }).where(eq(pillars.id, pillar.id));
      console.log(`  ✓ Published: ${pillar.title.substring(0, 50)}...`);
    }
  }

  // 7. Final summary
  console.log("\n✅ Database cleanup complete!");

  const finalCategories = await db.select().from(categories);
  console.log("\nFinal categories:");
  finalCategories.forEach(c => console.log(`  ${c.id}. ${c.name} (${c.slug})`));

  const publishedArticles = await db
    .select({ id: articles.id, title: articles.title, categoryId: articles.categoryId })
    .from(articles)
    .where(eq(articles.status, "published"));

  console.log(`\nPublished articles: ${publishedArticles.length}`);

  const finalPillars = await db.select().from(pillars);
  console.log(`Published pillars: ${finalPillars.filter(p => p.status === "published").length}`);

  process.exit(0);
}

fixCategories().catch(e => {
  console.error("Error:", e);
  process.exit(1);
});
