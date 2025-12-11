import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Categories table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Pillars table (for pillar content strategy)
export const pillars = pgTable("pillars", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => categories.id),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Authors table
export const authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  bio: text("bio"),
  avatar: varchar("avatar", { length: 500 }),
  twitter: varchar("twitter", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Articles table
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  pillarId: integer("pillar_id").references(() => pillars.id),
  authorId: integer("author_id").references(() => authors.id),

  // SEO fields
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: varchar("meta_description", { length: 320 }),
  keywords: text("keywords").array(),

  // Targeting
  targetProducts: text("target_products").array(),
  searchIntent: varchar("search_intent", { length: 50 }),

  // Quality scores (0-100)
  depthScore: integer("depth_score"),
  originalityScore: integer("originality_score"),
  usefulnessScore: integer("usefulness_score"),
  spamScore: integer("spam_score"),
  overallScore: integer("overall_score"),

  // Status: draft, review, published, archived
  status: varchar("status", { length: 20 }).default("draft"),

  // OG Image
  ogImage: varchar("og_image", { length: 500 }),

  // Timestamps
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  publishedAt: timestamp("published_at"),

  // Reading metrics
  wordCount: integer("word_count"),
  readingTime: integer("reading_time"),
});

// Internal links table (for SEO internal linking)
export const internalLinks = pgTable("internal_links", {
  id: serial("id").primaryKey(),
  sourceArticleId: integer("source_article_id").references(() => articles.id),
  targetArticleId: integer("target_article_id").references(() => articles.id),
  anchorText: varchar("anchor_text", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Pipeline jobs table (for AI content pipeline tracking)
export const pipelineJobs = pgTable("pipeline_jobs", {
  id: serial("id").primaryKey(),
  articleId: integer("article_id").references(() => articles.id),
  stage: varchar("stage", { length: 50 }).notNull(),
  status: varchar("status", { length: 20 }).default("pending"),
  input: jsonb("input"),
  output: jsonb("output"),
  error: text("error"),
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Keywords table (for SEO keyword tracking)
export const keywords = pgTable("keywords", {
  id: serial("id").primaryKey(),
  keyword: varchar("keyword", { length: 255 }).notNull(),
  searchVolume: integer("search_volume"),
  difficulty: integer("difficulty"),
  cpc: varchar("cpc", { length: 20 }),
  used: boolean("used").default(false),
  articleId: integer("article_id").references(() => articles.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles),
  pillars: many(pillars),
}));

export const pillarsRelations = relations(pillars, ({ one, many }) => ({
  category: one(categories, {
    fields: [pillars.categoryId],
    references: [categories.id],
  }),
  articles: many(articles),
}));

export const authorsRelations = relations(authors, ({ many }) => ({
  articles: many(articles),
}));

export const articlesRelations = relations(articles, ({ one, many }) => ({
  category: one(categories, {
    fields: [articles.categoryId],
    references: [categories.id],
  }),
  pillar: one(pillars, {
    fields: [articles.pillarId],
    references: [pillars.id],
  }),
  author: one(authors, {
    fields: [articles.authorId],
    references: [authors.id],
  }),
  sourceLinks: many(internalLinks, { relationName: "sourceLinks" }),
  targetLinks: many(internalLinks, { relationName: "targetLinks" }),
  pipelineJobs: many(pipelineJobs),
  keywords: many(keywords),
}));

export const internalLinksRelations = relations(internalLinks, ({ one }) => ({
  sourceArticle: one(articles, {
    fields: [internalLinks.sourceArticleId],
    references: [articles.id],
    relationName: "sourceLinks",
  }),
  targetArticle: one(articles, {
    fields: [internalLinks.targetArticleId],
    references: [articles.id],
    relationName: "targetLinks",
  }),
}));

export const pipelineJobsRelations = relations(pipelineJobs, ({ one }) => ({
  article: one(articles, {
    fields: [pipelineJobs.articleId],
    references: [articles.id],
  }),
}));

export const keywordsRelations = relations(keywords, ({ one }) => ({
  article: one(articles, {
    fields: [keywords.articleId],
    references: [articles.id],
  }),
}));

// Type exports
export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
export type Pillar = typeof pillars.$inferSelect;
export type NewPillar = typeof pillars.$inferInsert;
export type Author = typeof authors.$inferSelect;
export type NewAuthor = typeof authors.$inferInsert;
export type Article = typeof articles.$inferSelect;
export type NewArticle = typeof articles.$inferInsert;
export type InternalLink = typeof internalLinks.$inferSelect;
export type NewInternalLink = typeof internalLinks.$inferInsert;
export type PipelineJob = typeof pipelineJobs.$inferSelect;
export type NewPipelineJob = typeof pipelineJobs.$inferInsert;
export type Keyword = typeof keywords.$inferSelect;
export type NewKeyword = typeof keywords.$inferInsert;
