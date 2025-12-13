import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
  boolean,
  index,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ============================================
// CATEGORIES
// ============================================
export const categories = pgTable(
  'categories',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    slug: varchar('slug', { length: 100 }).notNull().unique(),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    slugIdx: uniqueIndex('categories_slug_idx').on(table.slug),
  })
)

export const categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles),
  pillars: many(pillars),
}))

// ============================================
// PILLARS
// ============================================
export const pillars = pgTable(
  'pillars',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    excerpt: text('excerpt'),
    content: text('content'),
    categoryId: integer('category_id')
      .references(() => categories.id, { onDelete: 'cascade' })
      .notNull(),

    // SEO
    metaTitle: varchar('meta_title', { length: 255 }),
    metaDescription: varchar('meta_description', { length: 320 }),

    // Targeting
    targetProducts: text('target_products').array(),

    // Status
    status: varchar('status', { length: 20 }).default('draft').notNull(),

    // Timestamps
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    publishedAt: timestamp('published_at'),

    // Reading stats
    wordCount: integer('word_count'),
    readingTime: integer('reading_time'),
  },
  (table) => ({
    slugIdx: uniqueIndex('pillars_slug_idx').on(table.slug),
    categoryIdx: index('pillars_category_idx').on(table.categoryId),
    statusIdx: index('pillars_status_idx').on(table.status),
  })
)

export const pillarsRelations = relations(pillars, ({ one, many }) => ({
  category: one(categories, {
    fields: [pillars.categoryId],
    references: [categories.id],
  }),
  articles: many(articles),
}))

// ============================================
// ARTICLES
// ============================================
export const articles = pgTable(
  'articles',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    excerpt: text('excerpt'),
    content: text('content').notNull(),

    // Featured image URL (article-specific image)
    featuredImage: varchar('featured_image', { length: 500 }),

    // Relations
    categoryId: integer('category_id')
      .references(() => categories.id, { onDelete: 'cascade' })
      .notNull(),
    pillarId: integer('pillar_id').references(() => pillars.id, {
      onDelete: 'set null',
    }),

    // SEO
    metaTitle: varchar('meta_title', { length: 255 }),
    metaDescription: varchar('meta_description', { length: 320 }),
    keywords: text('keywords').array(),

    // Targeting
    targetProducts: text('target_products').array(),
    searchIntent: varchar('search_intent', { length: 50 }),

    // Quality scores (0-10)
    depthScore: integer('depth_score'),
    originalityScore: integer('originality_score'),
    usefulnessScore: integer('usefulness_score'),
    spamScore: integer('spam_score'),
    overallScore: integer('overall_score'),

    // Status
    status: varchar('status', { length: 20 }).default('draft').notNull(),

    // Timestamps
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    publishedAt: timestamp('published_at'),

    // Reading stats
    wordCount: integer('word_count'),
    readingTime: integer('reading_time'),
  },
  (table) => ({
    slugIdx: uniqueIndex('articles_slug_idx').on(table.slug),
    categoryIdx: index('articles_category_idx').on(table.categoryId),
    pillarIdx: index('articles_pillar_idx').on(table.pillarId),
    statusIdx: index('articles_status_idx').on(table.status),
    publishedAtIdx: index('articles_published_at_idx').on(table.publishedAt),
    overallScoreIdx: index('articles_overall_score_idx').on(table.overallScore),
  })
)

export const articlesRelations = relations(articles, ({ one, many }) => ({
  category: one(categories, {
    fields: [articles.categoryId],
    references: [categories.id],
  }),
  pillar: one(pillars, {
    fields: [articles.pillarId],
    references: [pillars.id],
  }),
  outgoingLinks: many(internalLinks, { relationName: 'sourceArticle' }),
  incomingLinks: many(internalLinks, { relationName: 'targetArticle' }),
}))

// ============================================
// INTERNAL LINKS
// ============================================
export const internalLinks = pgTable(
  'internal_links',
  {
    id: serial('id').primaryKey(),
    sourceArticleId: integer('source_article_id')
      .references(() => articles.id, { onDelete: 'cascade' })
      .notNull(),
    targetArticleId: integer('target_article_id')
      .references(() => articles.id, { onDelete: 'cascade' })
      .notNull(),
    anchorText: varchar('anchor_text', { length: 255 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    sourceIdx: index('internal_links_source_idx').on(table.sourceArticleId),
    targetIdx: index('internal_links_target_idx').on(table.targetArticleId),
  })
)

export const internalLinksRelations = relations(internalLinks, ({ one }) => ({
  sourceArticle: one(articles, {
    fields: [internalLinks.sourceArticleId],
    references: [articles.id],
    relationName: 'sourceArticle',
  }),
  targetArticle: one(articles, {
    fields: [internalLinks.targetArticleId],
    references: [articles.id],
    relationName: 'targetArticle',
  }),
}))

// ============================================
// TYPES
// ============================================
export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert

export type Pillar = typeof pillars.$inferSelect
export type NewPillar = typeof pillars.$inferInsert

export type Article = typeof articles.$inferSelect
export type NewArticle = typeof articles.$inferInsert

export type InternalLink = typeof internalLinks.$inferSelect
export type NewInternalLink = typeof internalLinks.$inferInsert

// Status and intent enums (for type safety in app code)
export const ArticleStatus = {
  DRAFT: 'draft',
  QUEUED: 'queued',
  PUBLISHED: 'published',
  REJECTED: 'rejected',
} as const

export const SearchIntent = {
  INFORMATIONAL: 'informational',
  COMMERCIAL: 'commercial',
  TUTORIAL: 'tutorial',
} as const

export const TargetProduct = {
  GECKO_ADVISOR: 'geckoadvisor',
  GECKO_SHARE: 'geckoshare',
  GECKO_GUARD: 'geckoguard',
  GECKO_LOCK: 'geckolock',
} as const
