import { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Shield, ArrowRight } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PrivacyGecko Blog - Privacy, Security & Crypto Safety",
  description:
    "Expert guides on online privacy, cybersecurity, and crypto safety. Learn how to protect your digital life with our comprehensive articles.",
};

// Mock data as fallback until database is connected
const mockCategories = [
  { id: 1, name: "Privacy", slug: "privacy", description: "Digital privacy guides", createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "Security", slug: "security", description: "Cybersecurity tips", createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: "Crypto Safety", slug: "crypto-safety", description: "Crypto safety guides", createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: "Browser Protection", slug: "browser-protection", description: "Browser security tips", createdAt: new Date(), updatedAt: new Date() },
];

const mockArticles = [
  {
    id: 1,
    title: "The Complete Guide to Online Privacy in 2025",
    slug: "complete-guide-online-privacy-2025",
    excerpt:
      "Learn everything you need to know about protecting your digital privacy in the modern age.",
    content: "",
    categoryId: 1,
    pillarId: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    targetProducts: null,
    searchIntent: null,
    depthScore: null,
    originalityScore: null,
    usefulnessScore: null,
    spamScore: null,
    overallScore: null,
    status: "published",
    createdAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-01-15"),
    publishedAt: new Date("2025-01-15"),
    wordCount: null,
    readingTime: 12,
    category: { name: "Privacy", slug: "privacy" },
  },
  {
    id: 2,
    title: "How to Secure Your Crypto Wallet: A Step-by-Step Guide",
    slug: "secure-crypto-wallet-guide",
    excerpt:
      "Protect your cryptocurrency investments with these essential security practices.",
    content: "",
    categoryId: 3,
    pillarId: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    targetProducts: null,
    searchIntent: null,
    depthScore: null,
    originalityScore: null,
    usefulnessScore: null,
    spamScore: null,
    overallScore: null,
    status: "published",
    createdAt: new Date("2025-01-10"),
    updatedAt: new Date("2025-01-10"),
    publishedAt: new Date("2025-01-10"),
    wordCount: null,
    readingTime: 8,
    category: { name: "Crypto Safety", slug: "crypto-safety" },
  },
  {
    id: 3,
    title: "VPN vs Proxy: Which Should You Use?",
    slug: "vpn-vs-proxy-comparison",
    excerpt:
      "Understand the key differences between VPNs and proxies to make the right choice for your privacy needs.",
    content: "",
    categoryId: 4,
    pillarId: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    targetProducts: null,
    searchIntent: null,
    depthScore: null,
    originalityScore: null,
    usefulnessScore: null,
    spamScore: null,
    overallScore: null,
    status: "published",
    createdAt: new Date("2025-01-05"),
    updatedAt: new Date("2025-01-05"),
    publishedAt: new Date("2025-01-05"),
    wordCount: null,
    readingTime: 6,
    category: { name: "Browser Protection", slug: "browser-protection" },
  },
  {
    id: 4,
    title: "Password Security Best Practices",
    slug: "password-security-best-practices",
    excerpt:
      "Create and manage strong passwords to keep your accounts safe from hackers.",
    content: "",
    categoryId: 2,
    pillarId: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    targetProducts: null,
    searchIntent: null,
    depthScore: null,
    originalityScore: null,
    usefulnessScore: null,
    spamScore: null,
    overallScore: null,
    status: "published",
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-01"),
    publishedAt: new Date("2025-01-01"),
    wordCount: null,
    readingTime: 5,
    category: { name: "Security", slug: "security" },
  },
];

// Helper to fetch data from database with fallback to mock data
async function getLatestArticlesWithFallback() {
  try {
    // Only import database if DATABASE_URL is set
    if (process.env.DATABASE_URL) {
      const { getLatestArticles, getAllCategories } = await import("@privacygecko/database");
      const articles = await getLatestArticles(20);
      if (articles.length > 0) {
        // Fetch categories to map article categoryId to category
        const categories = await getAllCategories();
        const categoryMap = new Map(categories.map(c => [c.id, { name: c.name, slug: c.slug }]));
        return articles.map(a => ({
          ...a,
          category: categoryMap.get(a.categoryId) || { name: "Uncategorized", slug: "uncategorized" }
        }));
      }
    }
  } catch (error) {
    console.error("Database error, using mock data:", error);
  }
  return mockArticles;
}

async function getAllCategoriesWithFallback() {
  try {
    if (process.env.DATABASE_URL) {
      const { getAllCategories } = await import("@privacygecko/database");
      const categories = await getAllCategories();
      if (categories.length > 0) {
        return categories;
      }
    }
  } catch (error) {
    console.error("Database error, using mock categories:", error);
  }
  return mockCategories;
}

// Get category badge class based on slug
function getCategoryBadgeClass(slug: string): string {
  const categoryMap: Record<string, string> = {
    "privacy": "category-badge-privacy",
    "security": "category-badge-security",
    "crypto-safety": "category-badge-crypto-safety",
    "browser-protection": "category-badge-browser-protection",
    "file-security": "category-badge-file-security",
    "passwords-identity": "category-badge-passwords-identity",
    "product-updates": "category-badge-product-updates",
    "tutorials": "category-badge-tutorials",
  };
  return categoryMap[slug] || "category-badge-privacy";
}

export default async function BlogHomePage() {
  const [latestArticles, allCategories] = await Promise.all([
    getLatestArticlesWithFallback(),
    getAllCategoriesWithFallback(),
  ]);
  const featuredArticle = latestArticles[0];

  return (
    <div className="min-h-screen hero-gradient pattern-grid">
      {/* Hero Section - Clean & Editorial */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-muted)] mb-8 animate-fade-up">
              <Shield className="w-4 h-4 text-[var(--color-accent)]" />
              <span className="text-sm font-medium text-[var(--color-accent-hover)] tracking-wide">
                Privacy-First Knowledge
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 animate-fade-up delay-100">
              The Privacy
              <span className="block font-normal italic text-[var(--color-accent)]">Journal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
              Expert insights on digital privacy, security practices, and protecting your crypto assets in the modern age.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]/80 backdrop-blur-sm sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-4">
          <CategoryNav categories={allCategories} />
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <Link
            href={`/${featuredArticle.category.slug}/${featuredArticle.slug}`}
            className="featured-card block group"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Content */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`category-badge ${getCategoryBadgeClass(featuredArticle.category.slug)}`}>
                    {featuredArticle.category.name}
                  </span>
                  <span className="text-[var(--color-accent)]/60 text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-[var(--color-text-inverse)] leading-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-neutral-400 text-base leading-relaxed mb-6 max-w-lg line-clamp-2">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-neutral-500 text-sm">
                    {featuredArticle.readingTime} min read
                  </span>
                </div>
              </div>

              {/* Decorative Right Section */}
              <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-bg-dark)]/50" />
                <span className="font-display text-[10rem] font-normal text-white/[0.03] select-none">
                  01
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Latest Articles Grid */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold text-[var(--color-accent)] tracking-widest uppercase mb-2 block">
              Latest Stories
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)]">
              Fresh from the <span className="italic">press</span>
            </h2>
          </div>
          <Link
            href="/privacy"
            className="hidden sm:flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-sm font-medium transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {latestArticles.slice(1).map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index + 2} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-12 mb-16">
        <div className="newsletter-section p-8 lg:p-12 text-center">
          <div className="relative z-10 max-w-lg mx-auto">
            {/* Decorative Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[var(--color-accent-muted)]" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[var(--color-accent)] uppercase">
                Newsletter
              </span>
              <div className="h-px w-10 bg-[var(--color-accent-muted)]" />
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)] mb-3">
              Stay <span className="italic">informed</span>
            </h2>

            <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-sm mx-auto">
              Weekly privacy insights and security guides delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[var(--color-text-tertiary)] text-xs mt-4">
              No spam. Privacy respected. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
