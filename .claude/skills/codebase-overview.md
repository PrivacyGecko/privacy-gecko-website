---
name: codebase-overview
description: Quick reference for Privacy Gecko's codebase structure, key files, and architecture. Use when you need to understand the project layout or find specific files.
user_invocable: true
---

# Privacy Gecko Codebase Overview

## Project Summary

Privacy Gecko is a B2B privacy tools company with two live products. The website is a pnpm monorepo with three Next.js 14 apps and two shared packages.

## Products

| Product | Status | URL | Description |
|---------|--------|-----|-------------|
| GeckoAdvisor | Live | geckoadvisor.com | Privacy policy scanner |
| GeckoShare | Live | geckoshare.com | Encrypted file sharing |

## Monorepo Structure

```
privacy-gecko-website/
├── apps/
│   ├── web/              # Marketing website (port 3000)
│   │   ├── app/          # Next.js App Router pages
│   │   ├── components/   # React components
│   │   ├── lib/          # Utilities and data (products.ts, etc.)
│   │   └── public/       # Static assets
│   ├── blog/             # Blog app (port 3001)
│   │   ├── app/          # Blog pages + API routes
│   │   └── components/   # Blog-specific components
│   └── admin/            # CMS admin panel (port 3002)
│       ├── app/          # Admin pages + API routes
│       └── components/   # Admin components (Tiptap editor, etc.)
├── packages/
│   ├── ui/               # Shared UI component library
│   │   ├── components/   # Button, Card, etc.
│   │   └── lib/          # Utility functions (cn, clsx)
│   └── database/         # Drizzle ORM database layer
│       └── src/
│           ├── schema.ts     # Database table definitions
│           ├── queries.ts    # Read operations
│           ├── mutations.ts  # Write operations (admin)
│           └── index.ts      # Exports
├── scripts/              # Utility scripts
├── .claude/
│   ├── agents/           # 14 specialized AI agents
│   ├── skills/           # Workflow skills
│   └── settings.local.json
├── pnpm-workspace.yaml
├── turbo.json
├── package.json
└── .env.example
```

## Key Files

| File | Purpose |
|------|---------|
| `apps/web/lib/products.ts` | Single source of truth for all products |
| `apps/web/next.config.mjs` | Security headers, blog rewrites, redirects |
| `apps/web/app/page.tsx` | Homepage |
| `apps/web/app/api/checkout/route.ts` | Stripe checkout |
| `apps/web/app/api/contact/route.ts` | Contact form (Resend) |
| `apps/web/app/api/newsletter/route.ts` | Newsletter signup (Resend) |
| `apps/blog/app/page.tsx` | Blog homepage |
| `apps/admin/app/(dashboard)/` | Admin CMS pages |
| `packages/database/src/schema.ts` | Database schema (Drizzle) |
| `packages/database/src/queries.ts` | Database read operations |
| `packages/database/src/mutations.ts` | Database write operations |

## Web App Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/products` | All products overview |
| `/products/advisor` | GeckoAdvisor page |
| `/products/share` | GeckoShare page |
| `/pricing` | Pricing comparison |
| `/about` | About company |
| `/contact` | Contact form |
| `/blog` | Blog (proxied to blog app) |
| `/roadmap` | Development roadmap |
| `/security` | Security overview |
| `/resources` | Help & documentation |
| `/resources/faq` | FAQ page |
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of service |
| `/legal/cookies` | Cookie policy |
| `/compare` | Product comparison |
| `/success` | Post-checkout success |

## Tech Stack Quick Reference

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript 5.x | Language |
| Tailwind CSS 3.4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Drizzle ORM | Database ORM (PostgreSQL) |
| Resend | Email (contact, newsletter) |
| Stripe | Payments (subscriptions) |
| Plausible | Analytics (privacy-first) |
| Tiptap | Rich text editor (admin) |
| pnpm + Turbo | Build orchestration |
| Vercel | Deployment |
| AWS S3 | File uploads (admin) |

## Common Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start all apps
pnpm dev:web          # Start web app only
pnpm dev:blog         # Start blog app only
pnpm build            # Build all apps
pnpm lint             # Lint all apps
pnpm db:push          # Push schema to database
pnpm db:studio        # Open Drizzle Studio
```

## Design System

- **Colors**: Gecko Green (#00D98A), Dark Slate (#1A1D29), Privacy Blue (#3B82F6)
- **Font**: Inter
- **Spacing**: 4px grid
- **Icons**: Lucide React
- **Animations**: Framer Motion (fade-up, fade-in, slide-up, float, shimmer)
