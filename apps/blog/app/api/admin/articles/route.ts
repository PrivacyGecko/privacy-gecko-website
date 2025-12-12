import { revalidatePath } from 'next/cache'
import {
  getAllArticlesAdmin,
  createArticle,
} from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
} from '../middleware'
import { createArticleSchema, validateRequest } from '../schemas'

/**
 * GET /api/admin/articles
 * List all articles (including drafts)
 */
export async function GET(request: Request) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  try {
    const articles = await getAllArticlesAdmin()
    return successResponse(articles)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return errorResponse('Failed to fetch articles', 500)
  }
}

/**
 * POST /api/admin/articles
 * Create a new article (as draft)
 */
export async function POST(request: Request) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  try {
    const body = await request.json()
    const validation = validateRequest(createArticleSchema, body)

    if (!validation.success) {
      return errorResponse('Validation failed', 400, validation.errors.format())
    }

    const article = await createArticle(validation.data)

    // Revalidate the home page and category pages
    revalidatePath('/')
    revalidatePath(`/${article.categoryId}`)

    return successResponse(article, 201)
  } catch (error) {
    console.error('Error creating article:', error)
    if (error instanceof SyntaxError) {
      return errorResponse('Invalid JSON body', 400)
    }
    return errorResponse('Failed to create article', 500)
  }
}
