import { eq, desc, inArray } from 'drizzle-orm'
import { db } from './client'
import {
  categories,
  articles,
  type Category,
  type NewCategory,
  type Article,
  type NewArticle,
} from './schema'

// ============================================
// ARTICLES - ADMIN QUERIES
// ============================================

/**
 * Get all articles including drafts (for admin)
 */
export async function getAllArticlesAdmin(): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .orderBy(desc(articles.updatedAt))
}

/**
 * Get a single article by ID (for admin)
 */
export async function getArticleById(id: number): Promise<Article | null> {
  const [article] = await db
    .select()
    .from(articles)
    .where(eq(articles.id, id))
    .limit(1)
  return article ?? null
}

// ============================================
// ARTICLES - MUTATIONS
// ============================================

/**
 * Create a new article (as draft by default)
 */
export async function createArticle(
  data: Omit<NewArticle, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Article> {
  const now = new Date()
  const [article] = await db
    .insert(articles)
    .values({
      ...data,
      status: data.status ?? 'draft',
      createdAt: now,
      updatedAt: now,
    })
    .returning()
  return article
}

/**
 * Update an existing article
 */
export async function updateArticle(
  id: number,
  data: Partial<Omit<NewArticle, 'id' | 'createdAt'>>
): Promise<Article | null> {
  const [article] = await db
    .update(articles)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(articles.id, id))
    .returning()
  return article ?? null
}

/**
 * Delete an article
 */
export async function deleteArticle(id: number): Promise<boolean> {
  const result = await db
    .delete(articles)
    .where(eq(articles.id, id))
    .returning({ id: articles.id })
  return result.length > 0
}

/**
 * Quality gate errors for publishing
 */
export class QualityGateError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'QualityGateError'
  }
}

/**
 * Validate article quality before publishing
 * Returns validation result with errors and warnings
 */
export function validateArticleForPublish(article: Article): {
  valid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  // HARD REQUIREMENTS (block publish)

  // Word count minimum
  if (!article.wordCount || article.wordCount < 1200) {
    errors.push(`Word count (${article.wordCount || 0}) below minimum 1200`)
  }

  // Quality scores
  if (!article.overallScore || article.overallScore < 7) {
    errors.push(`Overall score (${article.overallScore || 0}) below minimum 7`)
  }
  if (article.spamScore && article.spamScore > 3) {
    errors.push(`Spam score (${article.spamScore}) exceeds maximum 3`)
  }
  if (!article.originalityScore || article.originalityScore < 6) {
    errors.push(`Originality score (${article.originalityScore || 0}) below minimum 6`)
  }

  // SEO requirements
  if (!article.metaTitle || article.metaTitle.length < 30) {
    errors.push('Meta title missing or too short (min 30 chars)')
  }
  if (article.metaTitle && article.metaTitle.length > 60) {
    errors.push('Meta title too long (max 60 chars)')
  }
  if (!article.metaDescription || article.metaDescription.length < 120) {
    errors.push('Meta description missing or too short (min 120 chars)')
  }
  if (article.metaDescription && article.metaDescription.length > 160) {
    errors.push('Meta description too long (max 160 chars)')
  }

  // Must have category
  if (!article.categoryId) {
    errors.push('Category is required')
  }

  // Must have excerpt
  if (!article.excerpt || article.excerpt.length < 50) {
    errors.push('Excerpt missing or too short (min 50 chars)')
  }

  // SOFT REQUIREMENTS (warnings only)

  // Keywords
  if (!article.keywords || article.keywords.length < 3) {
    warnings.push('Fewer than 3 keywords. Consider adding more.')
  }

  // Pillar association
  if (!article.pillarId) {
    warnings.push('Article not linked to a pillar page')
  }

  // Product integration check
  if (article.targetProducts && article.targetProducts.length > 2) {
    warnings.push('Too many target products. Max recommended: 2')
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Publish an article (set status to published and publishedAt timestamp)
 * Enforces quality gates before publishing
 */
export async function publishArticle(
  id: number,
  options?: { skipQualityGates?: boolean }
): Promise<Article | null> {
  // First, get the article to check quality gates
  const [existingArticle] = await db
    .select()
    .from(articles)
    .where(eq(articles.id, id))
    .limit(1)

  if (!existingArticle) {
    return null
  }

  // Enforce quality gates unless explicitly skipped (for admin override)
  if (!options?.skipQualityGates) {
    const validation = validateArticleForPublish(existingArticle)

    if (!validation.valid) {
      throw new QualityGateError(
        `Cannot publish: ${validation.errors.join('; ')}`
      )
    }
  }

  const now = new Date()
  const [article] = await db
    .update(articles)
    .set({
      status: 'published',
      publishedAt: now,
      updatedAt: now,
    })
    .where(eq(articles.id, id))
    .returning()
  return article ?? null
}

/**
 * Unpublish an article (revert to draft status)
 */
export async function unpublishArticle(id: number): Promise<Article | null> {
  const [article] = await db
    .update(articles)
    .set({
      status: 'draft',
      publishedAt: null,
      updatedAt: new Date(),
    })
    .where(eq(articles.id, id))
    .returning()
  return article ?? null
}

// ============================================
// CATEGORIES - ADMIN QUERIES
// ============================================

/**
 * Get a single category by ID (for admin)
 */
export async function getCategoryById(id: number): Promise<Category | null> {
  const [category] = await db
    .select()
    .from(categories)
    .where(eq(categories.id, id))
    .limit(1)
  return category ?? null
}

// ============================================
// CATEGORIES - MUTATIONS
// ============================================

/**
 * Create a new category
 */
export async function createCategory(
  data: Omit<NewCategory, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Category> {
  const now = new Date()
  const [category] = await db
    .insert(categories)
    .values({
      ...data,
      createdAt: now,
      updatedAt: now,
    })
    .returning()
  return category
}

/**
 * Update an existing category
 */
export async function updateCategory(
  id: number,
  data: Partial<Omit<NewCategory, 'id' | 'createdAt'>>
): Promise<Category | null> {
  const [category] = await db
    .update(categories)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(categories.id, id))
    .returning()
  return category ?? null
}

/**
 * Delete a category
 */
export async function deleteCategory(id: number): Promise<boolean> {
  const result = await db
    .delete(categories)
    .where(eq(categories.id, id))
    .returning({ id: categories.id })
  return result.length > 0
}

// ============================================
// BULK ACTIONS
// ============================================

/**
 * Bulk publish articles with quality gate validation
 * Returns count of successfully published articles and any failures
 */
export async function bulkPublishArticles(
  ids: number[],
  options?: { skipQualityGates?: boolean }
): Promise<{ published: number; failed: { id: number; errors: string[] }[] }> {
  if (ids.length === 0) return { published: 0, failed: [] }

  const failed: { id: number; errors: string[] }[] = []
  const validIds: number[] = []

  // Validate each article if quality gates are enabled
  if (!options?.skipQualityGates) {
    const articlesToCheck = await db
      .select()
      .from(articles)
      .where(inArray(articles.id, ids))

    for (const article of articlesToCheck) {
      const validation = validateArticleForPublish(article)
      if (validation.valid) {
        validIds.push(article.id)
      } else {
        failed.push({ id: article.id, errors: validation.errors })
      }
    }
  } else {
    validIds.push(...ids)
  }

  if (validIds.length === 0) {
    return { published: 0, failed }
  }

  const now = new Date()
  const result = await db
    .update(articles)
    .set({
      status: 'published',
      publishedAt: now,
      updatedAt: now,
    })
    .where(inArray(articles.id, validIds))
    .returning({ id: articles.id })

  return { published: result.length, failed }
}

/**
 * Bulk delete articles
 */
export async function bulkDeleteArticles(ids: number[]): Promise<number> {
  if (ids.length === 0) return 0

  const result = await db
    .delete(articles)
    .where(inArray(articles.id, ids))
    .returning({ id: articles.id })

  return result.length
}

/**
 * Schedule an article for future publishing
 */
export async function scheduleArticle(
  id: number,
  publishAt: Date
): Promise<Article | null> {
  const [article] = await db
    .update(articles)
    .set({
      status: 'queued',
      publishedAt: publishAt,
      updatedAt: new Date(),
    })
    .where(eq(articles.id, id))
    .returning()

  return article ?? null
}
