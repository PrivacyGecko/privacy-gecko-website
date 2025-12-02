# Privacy Gecko Website

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Official open-source website for Privacy Gecko - a suite of 8 privacy-focused tools.

## 🦎 About

Privacy Gecko provides open-source privacy tools that actually work:
- **GeckoAdvisor** - Privacy & Security Audit Tool (Live)
- **GeckoShare** - Encrypted File Sharing (Live)
- **GeckoGuard** - Tracker & Ad Blocker (Live)
- Plus 5 more tools coming in 2025

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payments**: Stripe (test mode configured)
- **Analytics**: Plausible Analytics (privacy-friendly)
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd privacy-gecko-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your:
- Stripe keys (get from https://stripe.com)
- Plausible domain (or keep placeholder)

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
privacy-gecko-website/
├── app/                      # Next.js App Router pages
│   ├── (routes)/            # Route groups
│   │   ├── page.tsx         # Homepage
│   │   ├── products/        # Product pages
│   │   ├── pricing/         # Pricing page
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog
│   │   ├── contact/         # Contact form
│   │   ├── resources/       # Documentation & support
│   │   └── legal/           # Legal pages
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── ui/                  # Base UI components
│   ├── layout/              # Navigation, Footer
│   ├── sections/            # Reusable sections
│   └── product/             # Product-specific components
├── lib/                     # Utilities & data
│   ├── utils.ts             # Utility functions
│   └── products.ts          # Product data
└── public/                  # Static assets
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Brand Colors

- **Gecko Green**: #10B981 (Primary)
- **Privacy Blue**: #1E3A8A (Accents)
- **Neutrals**: #FFFFFF, #F9FAFB, #1F2937

## 📄 Pages Included

### Core Pages
- ✅ Homepage with hero, product showcase, features
- ✅ Products overview (all 8 tools)
- ✅ Individual product pages (Advisor, Share, Guard)
- ✅ Pricing page with comparison tables
- ✅ About page with mission and values
- ✅ Contact page with form
- ✅ Blog landing page
- ✅ Resources hub

### Supporting Pages
- ✅ FAQ
- ✅ Support
- ✅ Documentation (placeholder)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Cookie Policy
- ✅ 404 Page

## 🔐 Privacy & Security

This website practices what we preach:
- ✅ No tracking cookies
- ✅ Privacy-friendly analytics (Plausible)
- ✅ No third-party scripts (except Stripe for payments)
- ✅ Minimal data collection
- ✅ GDPR compliant

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub

2. Import project to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository

3. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

4. Configure custom domain:
   - Add `privacygecko.com` in Vercel domains settings
   - Update DNS records as instructed by Vercel

5. Deploy!

### Environment Variables

Required for production:
```env
# Stripe (Production keys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=privacygecko.com

# Site
NEXT_PUBLIC_SITE_URL=https://privacygecko.com
```

## 📝 Todo / Roadmap

### Phase 1: MVP (Complete)
- ✅ All core pages built
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Legal pages

### Phase 2: Enhancements (Future)
- [ ] Stripe checkout integration
- [ ] Blog post MDX files
- [ ] Newsletter signup backend
- [ ] Contact form backend (Resend/Vercel Edge Function)
- [ ] Status page integration
- [ ] $PRICKO token integration

### Phase 3: Advanced Features (Future)
- [ ] User dashboards
- [ ] Authentication (Supabase)
- [ ] Actual product demos/downloads
- [ ] Community forum
- [ ] Multi-language support

## 🤝 Contributing

We welcome contributions from the community! Privacy Gecko is open source because we believe privacy tools should be transparent and community-driven.

**Ways to contribute:**
- 🐛 Report bugs or suggest features via [GitHub Issues](https://github.com/PrivacyGecko/privacy-gecko-website/issues)
- 💻 Submit pull requests for bug fixes or enhancements
- 📝 Improve documentation
- 🎨 Suggest UI/UX improvements
- 🌍 Help with translations (future)

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

**Security vulnerabilities?** See [SECURITY.md](SECURITY.md) for responsible disclosure.

## 📧 Contact

- **Email**: support@privacygecko.com
- **Twitter**: [@privacygecko](https://twitter.com/privacygecko)
- **Telegram**: [t.me/privacygecko](https://t.me/privacygecko)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License - Copyright (c) 2025 Privacy Gecko
```

**What this means:**
- ✅ Free to use, modify, and distribute
- ✅ Commercial use allowed
- ✅ Just keep the copyright notice
- 📖 See [LICENSE](LICENSE) for full details

---

Built with ❤️ for privacy by [@0xAnonA](https://twitter.com/0xAnonA)
