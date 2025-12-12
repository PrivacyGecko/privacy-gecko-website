import { eq, desc } from 'drizzle-orm'
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
 * Publish an article (set status to published and publishedAt timestamp)
 */
export async function publishArticle(id: number): Promise<Article | null> {
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
