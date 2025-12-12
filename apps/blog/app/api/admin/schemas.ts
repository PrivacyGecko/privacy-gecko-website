import { z } from 'zod'

// ============================================
// ARTICLE SCHEMAS
// ============================================

export const createArticleSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(255)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  categoryId: z.number().int().positive('Category ID must be a positive integer'),
  pillarId: z.number().int().positive().optional().nullable(),
  metaTitle: z.string().max(255).optional(),
  metaDescription: z.string().max(320).optional(),
  keywords: z.array(z.string()).optional(),
  targetProducts: z.array(z.string()).optional(),
  searchIntent: z.enum(['informational', 'commercial', 'tutorial']).optional(),
  depthScore: z.number().int().min(0).max(10).optional(),
  originalityScore: z.number().int().min(0).max(10).optional(),
  usefulnessScore: z.number().int().min(0).max(10).optional(),
  spamScore: z.number().int().min(0).max(10).optional(),
  overallScore: z.number().int().min(0).max(10).optional(),
  wordCount: z.number().int().positive().optional(),
  readingTime: z.number().int().positive().optional(),
})

export const updateArticleSchema = createArticleSchema.partial()

export type CreateArticleInput = z.infer<typeof createArticleSchema>
export type UpdateArticleInput = z.infer<typeof updateArticleSchema>

// ============================================
// CATEGORY SCHEMAS
// ============================================

export const createCategorySchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens'),
  description: z.string().optional(),
})

export const updateCategorySchema = createCategorySchema.partial()

export type CreateCategoryInput = z.infer<typeof createCategorySchema>
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>

// ============================================
// VALIDATION HELPER
// ============================================

export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodError } {
  const result = schema.safeParse(data)
  if (result.success) {
    return { success: true, data: result.data }
  }
  return { success: false, errors: result.error }
}
