import { getArticleById, validateArticleForPublish } from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
  notFoundResponse,
} from '../../../middleware'

type RouteParams = { params: Promise<{ id: string }> }

/**
 * GET /api/admin/articles/[id]/validate
 * Validate an article before publishing
 * Returns validation result with errors and warnings
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

    const validation = validateArticleForPublish(article)

    return successResponse({
      articleId: article.id,
      title: article.title,
      slug: article.slug,
      status: article.status,
      // Quality scores
      scores: {
        overall: article.overallScore || 0,
        depth: article.depthScore || 0,
        originality: article.originalityScore || 0,
        usefulness: article.usefulnessScore || 0,
        spam: article.spamScore || 0,
      },
      // SEO metadata
      seo: {
        metaTitleLength: article.metaTitle?.length || 0,
        metaDescriptionLength: article.metaDescription?.length || 0,
        keywordCount: article.keywords?.length || 0,
        wordCount: article.wordCount || 0,
        hasExcerpt: !!article.excerpt && article.excerpt.length >= 50,
        hasCategory: !!article.categoryId,
        hasPillar: !!article.pillarId,
      },
      // Validation result
      validation: {
        ...validation,
        readyToPublish: validation.valid && validation.warnings.length === 0,
        canPublish: validation.valid,
      },
    })
  } catch (error) {
    console.error('Error validating article:', error)
    return errorResponse('Failed to validate article', 500)
  }
}
