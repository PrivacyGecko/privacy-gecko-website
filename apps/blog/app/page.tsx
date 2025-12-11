import { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Shield, Lock, ArrowRight, Sparkles } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PrivacyGecko Blog - Privacy, Security & Crypto Safety",
  description:
    "Expert guides on online privacy, cybersecurity, and crypto safety. Learn how to protect your digital life with our comprehensive articles.",
};

const mockCategories = [
  { id: 1, name: "Privacy", slug: "privacy", description: "Digital privacy guides" },
  { id: 2, name: "Security", slug: "security", description: "Cybersecurity tips" },
  { id: 3, name: "Crypto", slug: "crypto", description: "Crypto safety guides" },
  { id: 4, name: "Tools", slug: "tools", description: "Privacy tool reviews" },
];

const mockArticles = [
  {
    id: 1,
    title: "The Complete Guide to Online Privacy in 2025",
    slug: "complete-guide-online-privacy-2025",
    excerpt:
      "Learn everything you need to know about protecting your digital privacy in the modern age.",
    categoryId: 1,
    category: { name: "Privacy", slug: "privacy" },
    publishedAt: new Date("2025-01-15"),
    readingTime: 12,
    status: "published",
  },
  {
    id: 2,
    title: "How to Secure Your Crypto Wallet: A Step-by-Step Guide",
    slug: "secure-crypto-wallet-guide",
    excerpt:
      "Protect your cryptocurrency investments with these essential security practices.",
    categoryId: 3,
    category: { name: "Crypto", slug: "crypto" },
    publishedAt: new Date("2025-01-10"),
    readingTime: 8,
    status: "published",
  },
  {
    id: 3,
    title: "VPN vs Proxy: Which Should You Use?",
    slug: "vpn-vs-proxy-comparison",
    excerpt:
      "Understand the key differences between VPNs and proxies to make the right choice for your privacy needs.",
    categoryId: 4,
    category: { name: "Tools", slug: "tools" },
    publishedAt: new Date("2025-01-05"),
    readingTime: 6,
    status: "published",
  },
  {
    id: 4,
    title: "Password Security Best Practices",
    slug: "password-security-best-practices",
    excerpt:
      "Create and manage strong passwords to keep your accounts safe from hackers.",
    categoryId: 2,
    category: { name: "Security", slug: "security" },
    publishedAt: new Date("2025-01-01"),
    readingTime: 5,
    status: "published",
  },
];

export default async function BlogHomePage() {
  const latestArticles = mockArticles;
  const allCategories = mockCategories;
  const featuredArticle = latestArticles[0];

  return (
    <div className="min-h-screen bg-editorial-grid">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-emerald-200 rounded-full opacity-40" />
          <div className="absolute top-40 right-20 w-32 h-32 border border-amber-200 rounded-full opacity-30" />

          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 opacity-0 animate-fade-up">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700 tracking-wide">
                Privacy-First Knowledge
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-light text-[var(--color-charcoal)] mb-6 opacity-0 animate-fade-up animation-delay-100">
              The Privacy
              <span className="block font-medium italic text-emerald-600">Journal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Expert insights on digital privacy, security practices, and protecting your crypto assets in the modern age.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-10 opacity-0 animate-fade-up animation-delay-300">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-300" />
              <Lock className="w-5 h-5 text-emerald-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-y border-[var(--color-border)] bg-white/50 backdrop-blur-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <CategoryNav categories={allCategories} />
        </div>
      </section>

      {/* Featured Article - Editorial Split Layout */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-0 featured-gradient rounded-2xl overflow-hidden texture-noise">
            {/* Left - Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="category-pill category-pill-privacy">
                  {featuredArticle.category.name}
                </span>
                <span className="text-emerald-400/60 text-sm font-medium">
                  Featured
                </span>
              </div>

              <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
                {featuredArticle.title}
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href={`/${featuredArticle.category.slug}/${featuredArticle.slug}`}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-emerald"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-slate-400 text-sm">
                  {featuredArticle.readingTime} min read
                </span>
              </div>
            </div>

            {/* Right - Decorative */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/50" />
              <div className="relative">
                {/* Large decorative number */}
                <span className="font-editorial text-[12rem] font-light text-white/5 select-none">
                  01
                </span>
                {/* Floating elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-2 border-emerald-500/20 rounded-full animate-pulse" />
                  <div className="absolute inset-4 border border-emerald-500/30 rounded-full" />
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-400/60" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles - Magazine Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase mb-2 block">
              Latest Stories
            </span>
            <h2 className="font-editorial text-3xl md:text-4xl font-light text-[var(--color-charcoal)]">
              Fresh from the <span className="italic">press</span>
            </h2>
          </div>
          <Link
            href="/privacy"
            className="group hidden sm:flex items-center gap-2 text-[var(--color-charcoal)] hover:text-emerald-600 font-medium transition-colors"
          >
            View archive
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.slice(1).map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index + 2} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-emerald-600 font-medium"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter Section - Editorial Style */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 mb-16">
        <div className="newsletter-section rounded-2xl p-10 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Decorative */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-emerald-300" />
              <span className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
                Newsletter
              </span>
              <div className="h-px w-12 bg-emerald-300" />
            </div>

            <h2 className="font-editorial text-3xl md:text-4xl font-light text-[var(--color-charcoal)] mb-4">
              Stay <span className="italic">informed</span>, stay secure
            </h2>

            <p className="text-[var(--color-charcoal-light)] mb-8 max-w-md mx-auto">
              Weekly privacy insights, security alerts, and expert guides delivered thoughtfully to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-lg bg-white border border-[var(--color-border)] text-[var(--color-charcoal)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[var(--color-charcoal)] hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>

            <p className="text-slate-400 text-sm mt-6 flex items-center justify-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              No spam. Privacy respected. Unsubscribe anytime.
            </p>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-emerald-200/50" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-emerald-200/50" />
        </div>
      </section>
    </div>
  );
}
