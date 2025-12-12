import { revalidatePath } from 'next/cache'
import {
  getArticleById,
  updateArticle,
  deleteArticle,
} from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
  notFoundResponse,
} from '../../middleware'
import { updateArticleSchema, validateRequest } from '../../schemas'

type RouteParams = { params: Promise<{ id: string }> }

/**
 * GET /api/admin/articles/[id]
 * Get a single article by ID
 */
export async function GET(request: Request, { params }: RouteParams) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  const { id } = await params
  const articleId = parseInt(id, 10)

  if (isNaN(articleId)) {
    return errorResponse('Invalid article ID', 400)
  }

  try {
    const article = await getArticleById(articleId)

    if (!article) {
      return notFoundResponse('Article')
    }

    return successResponse(article)
  } catch (error) {
    console.error('Error fetching article:', error)
    return errorResponse('Failed to fetch article', 500)
  }
}

/**
 * PUT /api/admin/articles/[id]
 * Update an article
 */
export async function PUT(request: Request, { params }: RouteParams) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  const { id } = await params
  const articleId = parseInt(id, 10)

  if (isNaN(articleId)) {
    return errorResponse('Invalid article ID', 400)
  }

  try {
    const body = await request.json()
    const validation = validateRequest(updateArticleSchema, body)

    if (!validation.success) {
      return errorResponse('Validation failed', 400, validation.errors.format())
    }

    // Check if article exists
    const existing = await getArticleById(articleId)
    if (!existing) {
      return notFoundResponse('Article')
    }

    const article = await updateArticle(articleId, validation.data)

    // Revalidate affected pages
    revalidatePath('/')
    if (existing.slug) {
      revalidatePath(`/${existing.slug}`)
    }
    if (article?.slug && article.slug !== existing.slug) {
      revalidatePath(`/${article.slug}`)
    }

    return successResponse(article)
  } catch (error) {
    console.error('Error updating article:', error)
    if (error instanceof SyntaxError) {
      return errorResponse('Invalid JSON body', 400)
    }
    return errorResponse('Failed to update article', 500)
  }
}

/**
 * DELETE /api/admin/articles/[id]
 * Delete an article
 */
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  const { id } = await params
  const articleId = parseInt(id, 10)

  if (isNaN(articleId)) {
    return errorResponse('Invalid article ID', 400)
  }

  try {
    // Check if article exists
    const existing = await getArticleById(articleId)
    if (!existing) {
      return notFoundResponse('Article')
    }

    const deleted = await deleteArticle(articleId)

    if (!deleted) {
      return errorResponse('Failed to delete article', 500)
    }

    // Revalidate affected pages
    revalidatePath('/')
    if (existing.slug) {
      revalidatePath(`/${existing.slug}`)
    }

    return successResponse({ deleted: true })
  } catch (error) {
    console.error('Error deleting article:', error)
    return errorResponse('Failed to delete article', 500)
  }
}
