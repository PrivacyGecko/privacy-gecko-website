import { revalidatePath } from 'next/cache'
import { getAllCategories, createCategory } from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
} from '../middleware'
import { createCategorySchema, validateRequest } from '../schemas'

/**
 * GET /api/admin/categories
 * List all categories
 */
export async function GET(request: Request) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  try {
    const categories = await getAllCategories()
    return successResponse(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return errorResponse('Failed to fetch categories', 500)
  }
}

/**
 * POST /api/admin/categories
 * Create a new category
 */
export async function POST(request: Request) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  try {
    const body = await request.json()
    const validation = validateRequest(createCategorySchema, body)

    if (!validation.success) {
      return errorResponse('Validation failed', 400, validation.errors.format())
    }

    const category = await createCategory(validation.data)

    // Revalidate the home page
    revalidatePath('/')

    return successResponse(category, 201)
  } catch (error) {
    console.error('Error creating category:', error)
    if (error instanceof SyntaxError) {
      return errorResponse('Invalid JSON body', 400)
    }
    return errorResponse('Failed to create category', 500)
  }
}
