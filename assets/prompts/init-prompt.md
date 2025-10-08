You are an expert full-stack developer tasked with planning and implementing PrivacyGecko.com - a professional privacy tools ecosystem website. This is an MVP launch focused on getting a production-ready site live quickly.

# PROJECT CONTEXT

## Brand Overview
PrivacyGecko.com is the flagship website for a suite of 8 privacy-focused tools (3 live, 5 coming soon). It targets privacy-conscious individuals, small businesses, students, and crypto users. The site must build trust, drive product signups, and convert users to paid subscriptions.

## Brand Identity
- **Visual Theme**: Light, professional, trust-centric
- **Colors**: 
  - Gecko Green: #10B981 (primary)
  - Privacy Blue: #1E3A8A (accents)
  - Neutrals: #FFFFFF, #F9FAFB, #1F2937
- **Typography**: 
  - Body: Inter
  - Headings: SF Pro Display (or Space Grotesk as fallback)
- **Tone**: Clear, educational, friendly yet authoritative
- **Tagline**: "Privacy Tools That Actually Work – Powered by $PRICKO"

## Core Objectives (MVP)
1. Present brand as credible privacy leader
2. Drive product discovery and free-tier signups
3. Enable Pro subscription purchases (Stripe)
4. Serve as ecosystem hub for all products
5. Start SEO/content strategy via blog

# TECH STACK (Required)

## Frontend
- **Framework**: Next.js 14 with App Router (TypeScript)
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Animations**: Framer Motion (subtle, purposeful)
- **Icons**: Lucide React
- **State**: React hooks (no complex state management needed for MVP)

## Payments
- **Stripe**: For USD payments (Pro subscriptions)
- Configure Stripe test mode initially with clear toggle for production

## Analytics
- **Plausible Analytics**: Privacy-friendly, GDPR-compliant
- Simple event tracking (page views, CTA clicks, signups)

## Deployment
- **Hosting**: Vercel (configured for Next.js App Router)
- **Domain**: privacygecko.com (DNS via Cloudflare)
- **SSL**: Auto via Vercel

## Email (Simple)
- **Form submissions**: Use Vercel's Edge Functions + Resend or simple mailto: for MVP
- **Newsletter**: Integrate Plausible or simple email capture form (can add Mailchimp/ConvertKit later)

# MVP SCOPE - PAGES TO BUILD

## Priority 1: Core Pages (Week 1)

### 1. Homepage (/)
**Goal**: Present brand, showcase tools, start user journey

**Sections**:
- **Hero**
  - Headline: "Privacy Tools That Actually Work."
  - Subheadline: "8 open-source tools. No tracking. No data selling."
  - CTAs: "Try GeckoAdvisor Free" | "Explore All Products"
  - Visual: Animated gecko mascot or clean hero image

- **Product Showcase**
  - Grid showing 8 products
  - 3 with "LIVE" badges: GeckoAdvisor, GeckoShare, GeckoGuard
  - 5 with "Coming Q2-Q4 2025" badges
  - Each card: icon, name, one-liner, "Learn More" link

- **Why Privacy Gecko**
  - 4 cards: "Complete Ecosystem", "Free Tier Always", "Open Source", "Privacy-First"
  - Icons + short descriptions

- **How It Works**
  - 3 steps: Choose Your Tool → Use Free or Pro → Upgrade When Ready
  - Visual diagram with arrows

- **Social Proof**
  - Stats: "500+ Users Protected", "10,000+ Files Shared Securely", "99.9% Uptime"
  - Placeholder for testimonials

- **Token Bridge Section**
  - Banner: "Powered by $PRICKO"
  - Text: "Stake tokens for discounts and Pro access"
  - CTA: "Learn About $PRICKO →" (links to pricko.com - can be #token for MVP)

- **Final CTA**
  - "Ready to Take Back Your Privacy?"
  - Buttons: "Try GeckoAdvisor Free" | "View All Products"

### 2. Products Overview (/products)
- Hero: "Your Complete Privacy Toolkit"
- Grid of all 8 products with detailed cards
- Each card includes:
  - Product icon/illustration
  - Product name
  - Short description (2-3 sentences)
  - Status badge (LIVE or Coming Soon with date)
  - Features preview (3-4 bullet points)
  - Pricing summary
  - CTA button

**The 8 Products**:
1. **GeckoAdvisor** (LIVE) - Privacy & Security Audit Tool
2. **GeckoShare** (LIVE) - Encrypted File Sharing
3. **GeckoGuard** (LIVE) - Tracker & Ad Blocker
4. **GeckoVPN** (Coming Q2) - Privacy-First VPN
5. **GeckoPass** (Coming Q2) - Password Manager
6. **GeckoShell** (Coming Q3) - Anonymous Email
7. **GeckoView** (Coming Q3) - Privacy Browser
8. **GeckoWatch** (Coming Q4) - Website Privacy Scanner

### 3. Individual Product Pages (3 live products)

**Template Structure** (apply to all):
- Hero section (icon, tagline, primary CTA)
- Feature grid (6-9 key features with icons)
- "How It Works" (3-4 step process)
- Screenshot carousel or demo
- Pricing comparison (Free vs Pro)
- Related tools section
- FAQ (4-6 common questions)
- Final CTA

**Product Details**:

#### /products/advisor - GeckoAdvisor
- **Tagline**: "Know Your Privacy Score"
- **What it does**: Comprehensive privacy & security audit tool
- **Features**: Device scanning, vulnerability detection, privacy score, actionable recommendations, tracking detection, secure configuration tips
- **Free**: 3 scans/month, basic report
- **Pro ($9.99/mo)**: Unlimited scans, detailed reports, priority alerts

#### /products/share - GeckoShare
- **Tagline**: "Share Files, Not Your Privacy"
- **What it does**: End-to-end encrypted file sharing
- **Features**: E2E encryption, expiring links, password protection, no registration required, 256-bit AES, audit logs
- **Free**: Up to 100MB, 24hr expiry
- **Pro ($7.99/mo)**: Up to 5GB, custom expiry, branded links

#### /products/guard - GeckoGuard
- **Tagline**: "Browse Without Being Tracked"
- **What it does**: Browser extension for tracker & ad blocking
- **Features**: Real-time blocking, privacy dashboard, custom filters, cookie management, fingerprint protection
- **Free**: Basic blocking, 10,000 trackers blocked
- **Pro ($4.99/mo)**: Advanced filters, whitelisting, sync across devices

### 4. Pricing (/pricing)
- Hero: "Choose Your Privacy Level"
- Comparison table: Free vs Pro for each product
- Highlight: "Save 20% with annual billing"
- Stripe checkout integration
- Note: "Stake $PRICKO tokens for discounts (coming Q2 2025)"
- FAQ section (billing, refunds, cancellation)

### 5. About (/about)
- Hero: Brand story
- Mission: "Make privacy tools accessible to everyone"
- Values cards: Transparency, Accessibility, Community, Trust
- Founder info: "Created by @0xAnonA, privacy advocate since 2014"
- Team section (can be simple for MVP)
- CTA: "Join Our Mission"

### 6. Blog (/blog)
- Landing page with featured posts grid
- Categories: Privacy Tips, Tutorials, Product Updates, News
- Search functionality
- Newsletter signup form
- Author bios

**Seed with 3 posts** (can be markdown files for MVP):
1. "Why Privacy Tools Matter in 2025"
2. "Getting Started with GeckoAdvisor"
3. "Introducing Privacy Gecko: Our Story"

### 7. Resources (/resources)
Hub page with links to:
- Documentation (/resources/docs)
- FAQ (/resources/faq)
- Support (/resources/support)
- Status page (can link to external status page or placeholder)

### 8. Contact (/contact)
- Contact form with fields: Name, Email, Subject, Message
- Alternative contact: support@privacygecko.com
- Links to Telegram and Twitter
- FAQ prompt: "Check our FAQ first"

### 9. Legal Pages
- Privacy Policy (/legal/privacy)
- Terms of Service (/legal/terms)
- Cookie Policy (/legal/cookies)
- All GDPR-compliant, no tracking without consent

## Priority 2: Foundation Components

Build reusable components:
- Navigation (header with logo, menu, CTA button)
- Footer (links, social, copyright)
- Hero sections (multiple variants)
- Product cards
- Feature grids
- CTA sections
- Pricing tables
- FAQ accordions
- Blog post cards
- Form inputs (with validation)
- Buttons (primary, secondary, ghost)
- Badges (LIVE, Coming Soon, etc.)

# DESIGN & UX GUIDELINES

## Layout Principles
- Max content width: 1280px
- Generous whitespace (Tailwind: py-20, py-32 for sections)
- Mobile-first responsive design
- Consistent section spacing
- Clear visual hierarchy

## Component Patterns
- **Cards**: Rounded corners (rounded-xl), subtle shadows, hover effects
- **Buttons**: Clear hierarchy (primary = green, secondary = blue, ghost = neutral)
- **Forms**: Clear labels, inline validation, accessible
- **Navigation**: Sticky header on scroll, mobile hamburger menu
- **Footer**: Multi-column with sitemap, social links, legal

## Animations (Framer Motion)
- Subtle entrance animations (fade-in, slide-up)
- Smooth transitions (0.3s ease)
- Hover states on cards/buttons
- No distracting or excessive animations

## Accessibility
- Semantic HTML (header, nav, main, footer, article, section)
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG 2.1 AA
- Alt text for all images
- Focus indicators

## Performance
- Image optimization (Next.js Image component)
- Code splitting (dynamic imports where appropriate)
- Lazy loading for below-fold content
- Minimal bundle size
- LCP < 2.5s, CLS < 0.1

# IMPLEMENTATION INSTRUCTIONS

## Phase 1: Project Setup (Day 1)
1. Initialize Next.js 14 project with TypeScript and App Router
2. Install dependencies: Tailwind, Shadcn/ui, Framer Motion, Lucide icons
3. Configure Tailwind with custom colors (gecko green, privacy blue)
4. Set up basic folder structure:
/app
/(routes)
/page.tsx (homepage)
/products/page.tsx
/products/advisor/page.tsx
/products/share/page.tsx
/products/guard/page.tsx
/pricing/page.tsx
/about/page.tsx
/blog/page.tsx
/contact/page.tsx
/legal/privacy/page.tsx
/legal/terms/page.tsx
/components
/ui (shadcn components)
/layout
/sections
/product
/lib
/styles
/public
/images
5. Create global styles and theme configuration
6. Set up ESLint and Prettier

## Phase 2: Core Components (Day 1-2)
1. Build navigation component (responsive, sticky)
2. Build footer component (multi-column, responsive)
3. Create button variants (primary, secondary, ghost)
4. Create card components (product card, feature card, blog card)
5. Create hero component (reusable with props)
6. Create section wrapper component
7. Add Shadcn/ui components: Button, Card, Badge, Input, Textarea

## Phase 3: Homepage (Day 2-3)
1. Hero section with CTAs
2. Product showcase grid (8 products with badges)
3. Why Privacy Gecko (4 cards)
4. How It Works (3 steps)
5. Social proof section
6. Token bridge section
7. Final CTA
8. Add smooth scroll animations
9. Responsive breakpoints testing

## Phase 4: Product Pages (Day 3-4)
1. Create product page template component
2. Build individual pages for Advisor, Share, Guard
3. Add feature grids with icons
4. Create screenshot/demo sections (can use placeholder images)
5. Add pricing comparison tables
6. Include FAQs
7. Cross-link related products

## Phase 5: Supporting Pages (Day 5)
1. Products overview page with 8 products
2. Pricing page with comparison table
3. About page with story/mission
4. Contact page with form (basic validation)
5. Blog landing page structure
6. Resources hub page

## Phase 6: Content & SEO (Day 5-6)
1. Add metadata to all pages (title, description, OG tags)
2. Create 3 seed blog posts (markdown or MDX)
3. Add structured data (JSON-LD for Organization, Products)
4. Optimize images (use Next.js Image)
5. Add sitemap.xml and robots.txt
6. Create legal pages (use template generators if needed)

## Phase 7: Integrations (Day 6-7)
1. Set up Stripe test mode
2. Create simple checkout flow for Pro plans
3. Add Plausible analytics script
4. Configure contact form submission (Vercel Edge Function or mailto)
5. Add newsletter signup form (simple email capture)
6. Test all forms and payments

## Phase 8: Polish & Launch Prep (Day 7)
1. Cross-browser testing (Chrome, Firefox, Safari)
2. Mobile responsiveness check
3. Performance audit (Lighthouse)
4. Accessibility check (axe DevTools)
5. Fix any console errors
6. Add loading states
7. Add error boundaries
8. Create 404 page
9. Final review of all copy

## Phase 9: Deployment
1. Deploy to Vercel (connect GitHub repo)
2. Configure custom domain
3. Set up environment variables (Stripe keys, etc.)
4. Enable HTTPS
5. Test production build
6. Monitor for errors (Vercel Analytics)

# CONTENT GUIDELINES

## Tone & Voice
- Clear and direct, no jargon
- Friendly but professional
- Confident about privacy mission
- Transparent about what's live vs. coming soon
- Educational (explain concepts, don't assume knowledge)

## Copy Principles
- Short sentences and paragraphs
- Active voice
- Benefit-driven (focus on user outcomes)
- Specific (avoid vague claims)
- Consistent terminology

## CTA Language
- Use action verbs: "Try", "Explore", "Start", "Get", "Learn"
- Create urgency where appropriate: "Start protecting your privacy today"
- Be specific: "Try GeckoAdvisor Free" not just "Get Started"

# IMPORTANT CONSIDERATIONS

## Do NOT Include (Not MVP)
- ❌ Solana wallet integration (Phase 2)
- ❌ Staking verification (Phase 2)
- ❌ Token payment flow (Phase 2)
- ❌ Complex backend auth (use Supabase later)
- ❌ User dashboards (Phase 2)
- ❌ Live chat support
- ❌ Advanced CMS (use markdown/MDX for MVP)

## Do Include (MVP Essential)
- ✅ Stripe test mode for payments
- ✅ Responsive design (mobile-first)
- ✅ Basic SEO (metadata, sitemap)
- ✅ Analytics (Plausible)
- ✅ Forms with validation
- ✅ Fast page loads
- ✅ Accessible markup
- ✅ Clear pricing
- ✅ Professional design

## Cross-Site Integration (Minimal for MVP)
- Add "Powered by $PRICKO" section on homepage
- Link to pricko.com (can be placeholder link for now: #token)
- Mention "$PRICKO" in pricing page (coming soon note)
- Keep it simple - full integration in Phase 2

# SUCCESS CRITERIA

The site is launch-ready when:
1. ✅ All 9 core pages are built and responsive
2. ✅ Stripe checkout works in test mode
3. ✅ Forms validate and submit
4. ✅ Lighthouse score > 90 on performance
5. ✅ No console errors
6. ✅ Mobile experience is polished
7. ✅ All links work (no 404s)
8. ✅ SEO metadata is complete
9. ✅ Legal pages are present
10. ✅ Site deployed to production domain

# YOUR TASK

Plan and implement PrivacyGecko.com following this specification. 

**Approach**:
1. First, create a detailed implementation plan with file structure
2. Ask any clarifying questions about requirements
3. Begin implementation following the phase structure
4. Test each component as you build
5. Provide progress updates after completing each phase
6. Flag any challenges or decisions that need input

**Remember**: This is an MVP. Focus on quality over quantity. Build something that works perfectly for the core use case (showcasing products and enabling signups) rather than trying to build every possible feature.

Start with Phase 1 (project setup) and work systematically through each phase. Let's build something great! 🦎