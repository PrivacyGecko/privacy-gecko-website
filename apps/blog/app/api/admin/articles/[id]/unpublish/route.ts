import { revalidatePath } from 'next/cache'
import { getArticleById, unpublishArticle } from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
  notFoundResponse,
} from '../../../middleware'

type RouteParams = { params: Promise<{ id: string }> }

/**
 * POST /api/admin/articles/[id]/unpublish
 * Unpublish an article (revert to draft status)
 */
export async function POST(request: Request, { params }: RouteParams) {
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

    if (existing.status !== 'published') {
      return errorResponse('Article is not published', 400)
    }

    const article = await unpublishArticle(articleId)

    // Revalidate affected pages
    revalidatePath('/')
    if (article?.slug) {
      revalidatePath(`/${article.slug}`)
    }

    return successResponse(article)
  } catch (error) {
    console.error('Error unpublishing article:', error)
    return errorResponse('Failed to unpublish article', 500)
  }
}
