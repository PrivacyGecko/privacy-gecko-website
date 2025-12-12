import { revalidatePath } from 'next/cache'
import {
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
  notFoundResponse,
} from '../../middleware'
import { updateCategorySchema, validateRequest } from '../../schemas'

type RouteParams = { params: Promise<{ id: string }> }

/**
 * GET /api/admin/categories/[id]
 * Get a single category by ID
 */
export async function GET(request: Request, { params }: RouteParams) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  const { id } = await params
  const categoryId = parseInt(id, 10)

  if (isNaN(categoryId)) {
    return errorResponse('Invalid category ID', 400)
  }

  try {
    const category = await getCategoryById(categoryId)

    if (!category) {
      return notFoundResponse('Category')
    }

    return successResponse(category)
  } catch (error) {
    console.error('Error fetching category:', error)
    return errorResponse('Failed to fetch category', 500)
  }
}

/**
 * PUT /api/admin/categories/[id]
 * Update a category
 */
export async function PUT(request: Request, { params }: RouteParams) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  const { id } = await params
  const categoryId = parseInt(id, 10)

  if (isNaN(categoryId)) {
    return errorResponse('Invalid category ID', 400)
  }

  try {
    const body = await request.json()
    const validation = validateRequest(updateCategorySchema, body)

    if (!validation.success) {
      return errorResponse('Validation failed', 400, validation.errors.format())
    }

    // Check if category exists
    const existing = await getCategoryById(categoryId)
    if (!existing) {
      return notFoundResponse('Category')
    }

    const category = await updateCategory(categoryId, validation.data)

    // Revalidate affected pages
    revalidatePath('/')
    if (existing.slug) {
      revalidatePath(`/${existing.slug}`)
    }
    if (category?.slug && category.slug !== existing.slug) {
      revalidatePath(`/${category.slug}`)
    }

    return successResponse(category)
  } catch (error) {
    console.error('Error updating category:', error)
    if (error instanceof SyntaxError) {
      return errorResponse('Invalid JSON body', 400)
    }
    return errorResponse('Failed to update category', 500)
  }
}

/**
 * DELETE /api/admin/categories/[id]
 * Delete a category
 */
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  const { id } = await params
  const categoryId = parseInt(id, 10)

  if (isNaN(categoryId)) {
    return errorResponse('Invalid category ID', 400)
  }

  try {
    // Check if category exists
    const existing = await getCategoryById(categoryId)
    if (!existing) {
      return notFoundResponse('Category')
    }

    const deleted = await deleteCategory(categoryId)

    if (!deleted) {
      return errorResponse('Failed to delete category', 500)
    }

    // Revalidate affected pages
    revalidatePath('/')
    if (existing.slug) {
      revalidatePath(`/${existing.slug}`)
    }

    return successResponse({ deleted: true })
  } catch (error) {
    console.error('Error deleting category:', error)
    return errorResponse('Failed to delete category', 500)
  }
}
