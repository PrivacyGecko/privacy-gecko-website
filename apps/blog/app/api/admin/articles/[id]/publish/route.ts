import { revalidatePath } from 'next/cache'
import {
  getArticleById,
  publishArticle,
  validateArticleForPublish,
  QualityGateError,
} from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
  notFoundResponse,
} from '../../../middleware'

type RouteParams = { params: Promise<{ id: string }> }

/**
 * POST /api/admin/articles/[id]/publish
 * Publish an article (set status to published and publishedAt timestamp)
 * Enforces quality gates unless ?force=true is passed
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

  // Check for force publish flag (admin override)
  const url = new URL(request.url)
  const forcePublish = url.searchParams.get('force') === 'true'

  try {
    // Check if article exists
    const existing = await getArticleById(articleId)
    if (!existing) {
      return notFoundResponse('Article')
    }

    if (existing.status === 'published') {
      return errorResponse('Article is already published', 400)
    }

    // Publish with quality gates (unless force flag is set)
    const article = await publishArticle(articleId, {
      skipQualityGates: forcePublish,
    })

    // Revalidate affected pages
    revalidatePath('/')
    if (article?.slug) {
      revalidatePath(`/${article.slug}`)
    }

    return successResponse(article)
  } catch (error) {
    // Handle quality gate errors with specific response
    if (error instanceof QualityGateError) {
      return errorResponse(error.message, 422) // 422 Unprocessable Entity
    }

    console.error('Error publishing article:', error)
    return errorResponse('Failed to publish article', 500)
  }
}
