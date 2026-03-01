---
name: blog-management
description: Manage blog content - create articles, publish/unpublish, audit SEO, manage categories. Use when user asks to create blog posts, manage content, check article status, or audit blog SEO.
user_invocable: true
---

# Blog Management Skill

You are managing Privacy Gecko's blog content system. The blog runs as a separate Next.js app (`apps/blog/`) backed by a PostgreSQL database via Drizzle ORM (`packages/database/`).

## Architecture

- **Blog App**: `apps/blog/` (port 3001, proxied to `/blog` via web app rewrites)
- **Admin App**: `apps/admin/` (port 3002, Tiptap WYSIWYG editor)
- **Database**: `packages/database/` (Drizzle ORM)
  - Schema: `packages/database/src/schema.ts`
  - Queries: `packages/database/src/queries.ts`
  - Mutations: `packages/database/src/mutations.ts`

## Database Tables

- `categories` - Blog categories (5 approved: Privacy, Browser Protection, File Security, Passwords & Identity, Security)
- `articles` - Blog articles with title, slug, content, excerpt, featured image, SEO metadata, quality scores
- `pillars` - Content pillar/series groupings
- `internalLinks` - SEO internal linking between articles

## Article Quality Scores (0-10)

- `depthScore` - How in-depth is the content?
- `originalityScore` - How original/unique?
- `usefulnessScore` - How useful to the reader?
- `spamScore` - Spam detection (lower is better)
- `overallScore` - Combined quality score

## Key Operations

### Check article status
```bash
# List all articles via admin API
curl -H "Authorization: Bearer $ADMIN_API_KEY" http://localhost:3002/api/articles
```

### Create article
Use the admin app at `http://localhost:3002/articles/new` or via API:
```bash
curl -X POST -H "Authorization: Bearer $ADMIN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title":"...","slug":"...","content":"...","categoryId":1,"status":"draft"}' \
  http://localhost:3002/api/articles
```

### Publish/Unpublish
```bash
curl -X POST -H "Authorization: Bearer $ADMIN_API_KEY" \
  http://localhost:3002/api/articles/{id}/publish
```

### SEO Audit
```bash
curl -H "Authorization: Bearer $ADMIN_API_KEY" \
  http://localhost:3001/api/admin/seo-audit/{slug}
```

### Revalidate ISR Cache
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"secret":"$REVALIDATE_SECRET","path":"/blog"}' \
  http://localhost:3001/api/admin/revalidate
```

## Approved Blog Categories

Per the SEO guide, only these 5 categories are allowed:
1. **Privacy** - General privacy topics
2. **Browser Protection** - Browser security and tracking prevention
3. **File Security** - File encryption and secure sharing
4. **Passwords & Identity** - Password management and identity protection
5. **Security** - General security topics (merged into Privacy when appropriate)

## Blog Features

- Dynamic OG images per article (`opengraph-image.tsx`)
- Twitter card images per article (`twitter-image.tsx`)
- RSS feed at `/feed.xml`
- JSON-LD structured data (BlogPosting schema)
- Reading time estimation
- Category-based navigation with color-coded pills
- Featured article highlight on homepage
- Newsletter signup section
- Internal linking system for SEO

## When Running This Skill

1. First check what the user wants to do (create, edit, publish, audit, etc.)
2. Read current database state if needed
3. For new articles: ensure category is one of the 5 approved categories
4. For publishing: verify quality scores are set
5. After changes: remind about ISR revalidation if content is live
6. For SEO: run the seo-audit endpoint and report findings
