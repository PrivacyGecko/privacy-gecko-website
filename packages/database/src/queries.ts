import { eq, desc, and, sql } from 'drizzle-orm'
import { db } from './client'
import {
  categories,
  pillars,
  articles,
  internalLinks,
  type Category,
  type Pillar,
  type Article,
} from './schema'

// ============================================
// CATEGORIES
// ============================================
export async function getAllCategories(): Promise<Category[]> {
  return db.select().from(categories).orderBy(categories.name)
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const [category] = await db
    .select()
    .from(categories)
    .where(eq(categories.slug, slug))
    .limit(1)
  return category ?? null
}

// ============================================
// PILLARS
// ============================================
export async function getAllPillars(): Promise<Pillar[]> {
  return db
    .select()
    .from(pillars)
    .where(eq(pillars.status, 'published'))
    .orderBy(desc(pillars.publishedAt))
}

export async function getPillarBySlug(slug: string): Promise<Pillar | null> {
  const [pillar] = await db
    .select()
    .from(pillars)
    .where(eq(pillars.slug, slug))
    .limit(1)
  return pillar ?? null
}

export async function getPillarsByCategory(categoryId: number): Promise<Pillar[]> {
  return db
    .select()
    .from(pillars)
    .where(
      and(eq(pillars.categoryId, categoryId), eq(pillars.status, 'published'))
    )
    .orderBy(desc(pillars.publishedAt))
}

// ============================================
// ARTICLES
// ============================================
export async function getLatestArticles(limit: number = 20): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .where(eq(articles.status, 'published'))
    .orderBy(desc(articles.publishedAt))
    .limit(limit)
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const [article] = await db
    .select()
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1)
  return article ?? null
}

export async function getArticlesByCategory(
  categoryId: number,
  limit: number = 50
): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .where(
      and(eq(articles.categoryId, categoryId), eq(articles.status, 'published'))
    )
    .orderBy(desc(articles.publishedAt))
    .limit(limit)
}

export async function getArticlesByPillar(
  pillarId: number,
  limit: number = 50
): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .where(
      and(eq(articles.pillarId, pillarId), eq(articles.status, 'published'))
    )
    .orderBy(desc(articles.publishedAt))
    .limit(limit)
}

export async function getRelatedArticles(
  articleId: number,
  categoryId: number,
  limit: number = 4
): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .where(
      and(
        eq(articles.categoryId, categoryId),
        eq(articles.status, 'published'),
        sql`${articles.id} != ${articleId}`
      )
    )
    .orderBy(desc(articles.publishedAt))
    .limit(limit)
}

// ============================================
// ARTICLE WITH RELATIONS
// ============================================
export async function getArticleWithCategory(slug: string) {
  const result = await db
    .select({
      article: articles,
      category: categories,
      pillar: pillars,
    })
    .from(articles)
    .leftJoin(categories, eq(articles.categoryId, categories.id))
    .leftJoin(pillars, eq(articles.pillarId, pillars.id))
    .where(eq(articles.slug, slug))
    .limit(1)

  if (result.length === 0) return null

  return {
    ...result[0].article,
    category: result[0].category,
    pillar: result[0].pillar,
  }
}

// ============================================
// INTERNAL LINKS
// ============================================
export async function getInternalLinksForArticle(articleId: number) {
  return db
    .select({
      link: internalLinks,
      targetArticle: articles,
    })
    .from(internalLinks)
    .innerJoin(articles, eq(internalLinks.targetArticleId, articles.id))
    .where(eq(internalLinks.sourceArticleId, articleId))
}

// ============================================
// STATS
// ============================================
export async function getArticleCount(): Promise<number> {
  const [result] = await db
    .select({ count: sql<number>`count(*)` })
    .from(articles)
    .where(eq(articles.status, 'published'))
  return result?.count ?? 0
}

export async function getCategoryWithArticleCount() {
  return db
    .select({
      category: categories,
      articleCount: sql<number>`count(${articles.id})`,
    })
    .from(categories)
    .leftJoin(
      articles,
      and(
        eq(articles.categoryId, categories.id),
        eq(articles.status, 'published')
      )
    )
    .groupBy(categories.id)
    .orderBy(categories.name)
}

// ============================================
// DASHBOARD STATS (Admin)
// ============================================
export async function getArticleCountByStatus(): Promise<Record<string, number>> {
  const result = await db
    .select({
      status: articles.status,
      count: sql<number>`count(*)::int`,
    })
    .from(articles)
    .groupBy(articles.status)

  const counts: Record<string, number> = {
    draft: 0,
    queued: 0,
    published: 0,
    rejected: 0,
    total: 0,
  }

  for (const row of result) {
    counts[row.status] = row.count
    counts.total += row.count
  }

  return counts
}

export async function getRecentlyUpdatedArticles(limit: number = 5): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .orderBy(desc(articles.updatedAt))
    .limit(limit)
}
