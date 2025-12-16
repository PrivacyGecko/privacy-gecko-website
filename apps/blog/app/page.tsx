import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PrivacyGecko Blog - Privacy, Security & Crypto Safety",
  description:
    "Expert guides on online privacy, cybersecurity, and crypto safety. Learn how to protect your digital life with our comprehensive articles.",
};

// Approved categories (per SEO guide - Security merged into Privacy)
const APPROVED_CATEGORY_SLUGS = [
  "privacy",
  "crypto-safety",
  "browser-protection",
  "file-security",
  "passwords-identity",
];

// Mock data as fallback until database is connected
const mockCategories = [
  { id: 1, name: "Privacy", slug: "privacy", description: "Data protection, tracking prevention, and digital privacy guides", createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "Crypto Safety", slug: "crypto-safety", description: "Privacy-focused cryptocurrency and wallet security", createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: "Browser Protection", slug: "browser-protection", description: "Browser fingerprinting, extensions, and tracker blocking", createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: "File Security", slug: "file-security", description: "Secure file sharing, encryption, and metadata protection", createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: "Passwords & Identity", slug: "passwords-identity", description: "Password security, identity protection, and authentication", createdAt: new Date(), updatedAt: new Date() },
];

const mockArticles = [
  {
    id: 1,
    title: "The Complete Guide to Online Privacy in 2025",
    slug: "complete-guide-online-privacy-2025",
    excerpt:
      "Learn everything you need to know about protecting your digital privacy in the modern age. We cover VPNs, secure browsers, encrypted messaging, and more.",
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
      "Protect your cryptocurrency investments with these essential security practices. Learn about hardware wallets, seed phrases, and common attack vectors.",
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
      "Understand the key differences between VPNs and proxies to make the right choice for your privacy needs. We break down speed, security, and use cases.",
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
    title: "Password Security Best Practices for 2025",
    slug: "password-security-best-practices",
    excerpt:
      "Create and manage strong passwords to keep your accounts safe from hackers. Learn about password managers, 2FA, and passkeys.",
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
    category: { name: "Passwords & Identity", slug: "passwords-identity" },
  },
];

// Helper to fetch data from database with fallback to mock data
async function getLatestArticlesWithFallback() {
  try {
    if (process.env.DATABASE_URL) {
      const { getLatestArticles, getAllCategories } = await import("@privacygecko/database");
      const articles = await getLatestArticles(20);
      if (articles.length > 0) {
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
        // Filter to only approved categories (per SEO guide)
        return categories.filter(c => APPROVED_CATEGORY_SLUGS.includes(c.slug));
      }
    }
  } catch (error) {
    console.error("Database error, using mock categories:", error);
  }
  return mockCategories;
}

// Get category color (5 core categories only)
function getCategoryColor(slug: string): string {
  const colors: Record<string, string> = {
    "privacy": "#635BFF",
    "crypto-safety": "#00B4D8",
    "browser-protection": "#E83E8C",
    "file-security": "#00D98A",
    "passwords-identity": "#6366F1",
  };
  return colors[slug] || "#635BFF";
}

// R2 CDN base URL
const R2_CDN_URL = "https://pub-ee83597c43b94030b8793a2e4e9d013a.r2.dev";

// Get category image based on slug (5 core categories only)
function getCategoryImage(slug: string): string {
  const images: Record<string, string> = {
    "privacy": `${R2_CDN_URL}/images/categories/privacy.jpg`,
    "crypto-safety": `${R2_CDN_URL}/images/categories/crypto-safety.jpg`,
    "browser-protection": `${R2_CDN_URL}/images/categories/browser-protection.jpg`,
    "file-security": `${R2_CDN_URL}/images/categories/file-security.jpg`,
    "passwords-identity": `${R2_CDN_URL}/images/categories/passwords-identity.jpg`,
  };
  return images[slug] || `${R2_CDN_URL}/images/categories/privacy.jpg`;
}

export default async function BlogHomePage() {
  const [latestArticles, allCategories] = await Promise.all([
    getLatestArticlesWithFallback(),
    getAllCategoriesWithFallback(),
  ]);
  const featuredArticle = latestArticles[0];

  const formatDate = (date: Date | null) => {
    if (!date) return null;
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <>
      {/* JSON-LD Structured Data - Organization & Website schemas */}
      <JsonLd schemas={[]} />

      <div className="min-h-screen bg-white">
        {/* Decorative gradient blob - Stripe style */}
        <div className="gradient-decoration" />

      {/* Breadcrumb & Social */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold text-[var(--color-accent)]">Blog</span>
          <Link
            href="https://twitter.com/PrivacyGecko"
            className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
          >
            PrivacyGecko on X
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Featured Article - Two Column Editorial Layout */}
      {featuredArticle && (
        <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
          <article className="featured-article">
            {/* Left Column - Content */}
            <div className="animate-fade-up">
              {/* Category Pill */}
              <Link
                href={`/${featuredArticle.category.slug}`}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-wide text-white mb-6 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: getCategoryColor(featuredArticle.category.slug) }}
              >
                {featuredArticle.category.name}
              </Link>

              {/* Title */}
              <Link href={`/${featuredArticle.category.slug}/${featuredArticle.slug}`}>
                <h1 className="font-display text-[2.75rem] lg:text-[3.25rem] leading-[1.1] text-[var(--color-text-primary)] mb-6 hover:text-[var(--color-accent)] transition-colors">
                  {featuredArticle.title}
                </h1>
              </Link>

              {/* Author */}
              <div className="author-block mb-8">
                <div className="author-avatar">PG</div>
                <div className="author-info">
                  <span className="author-name">Privacy Gecko Team</span>
                  <span className="author-role">Security Researchers</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-[17px] leading-relaxed text-[var(--color-text-secondary)] mb-8 max-w-lg">
                {featuredArticle.excerpt}
              </p>

              {/* Read More */}
              <Link
                href={`/${featuredArticle.category.slug}/${featuredArticle.slug}`}
                className="read-more"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Metadata & Image Placeholder */}
            <div className="animate-fade-up delay-200">
              {/* Date */}
              <div className="mb-6">
                <span className="text-[14px] text-[var(--color-text-tertiary)] font-medium">
                  {formatDate(featuredArticle.publishedAt)}
                </span>
              </div>

              {/* Featured Image (use article-specific image if available, otherwise category fallback) */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={(featuredArticle as any).featuredImage || getCategoryImage(featuredArticle.category.slug)}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Category Navigation */}
      <section className="bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <CategoryNav categories={allCategories} />
        </div>
      </section>

      {/* Articles List - Editorial Style */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="stagger-children">
          {latestArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <Link
            href="/privacy"
            className="read-more"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Newsletter */}
          <div className="newsletter-section p-8">
            <h2 className="font-display text-xl text-[var(--color-text-primary)] mb-3">
              Subscribe to the Privacy Gecko Blog
            </h2>
            <p className="text-[var(--color-text-secondary)] text-[15px] mb-6">
              Stay connected and receive new blog posts in your inbox.
            </p>
            <NewsletterForm />
          </div>

          {/* Join Team Card */}
          <div className="newsletter-section p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🦎</span>
              <h2 className="font-display text-xl text-[var(--color-text-primary)]">
                Like this blog? Join our community.
              </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] text-[15px] mb-6 flex-grow">
              Privacy Gecko builds tools that protect your digital life.
            </p>
            <Link href="/about" className="read-more">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Card */}
          <div className="newsletter-section p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💬</span>
              <h2 className="font-display text-xl text-[var(--color-text-primary)]">
                Have any feedback or questions?
              </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] text-[15px] mb-6 flex-grow">
              We&apos;d love to hear from you.
            </p>
            <Link href="/contact" className="read-more">
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
