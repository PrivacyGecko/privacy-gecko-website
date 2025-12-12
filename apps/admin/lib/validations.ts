import { z } from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(255)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
  excerpt: z.string().optional().nullable(),
  content: z.string().min(1, "Content is required"),
  categoryId: z.number().int().positive("Category is required"),
  pillarId: z.number().int().positive().optional().nullable(),
  metaTitle: z.string().max(255).optional().nullable(),
  metaDescription: z.string().max(320).optional().nullable(),
  keywords: z.array(z.string()).optional().nullable(),
  targetProducts: z.array(z.string()).optional().nullable(),
  searchIntent: z.string().optional().nullable(),
  depthScore: z.number().int().min(0).max(10).optional().nullable(),
  originalityScore: z.number().int().min(0).max(10).optional().nullable(),
  usefulnessScore: z.number().int().min(0).max(10).optional().nullable(),
  spamScore: z.number().int().min(0).max(10).optional().nullable(),
  overallScore: z.number().int().min(0).max(10).optional().nullable(),
  status: z.enum(["draft", "queued", "published", "rejected"]).optional(),
  publishedAt: z.string().datetime().optional().nullable(),
  wordCount: z.number().int().optional().nullable(),
  readingTime: z.number().int().optional().nullable(),
});

export const createArticleSchema = articleSchema;
export const updateArticleSchema = articleSchema.partial();

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
  description: z.string().optional().nullable(),
});

export const createCategorySchema = categorySchema;
export const updateCategorySchema = categorySchema.partial();

export type ArticleFormData = z.infer<typeof articleSchema>;
export type CategoryFormData = z.infer<typeof categorySchema>;
