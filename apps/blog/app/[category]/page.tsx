import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Shield, Lock, Coins, Wrench, Clock, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import {
  JsonLd,
  generateCollectionSchema,
  generateBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const revalidate = 3600; // Revalidate every hour

interface Props {
  params: Promise<{ category: string }>;
}

// Approved categories (per SEO guide - Security merged into Privacy)
const APPROVED_CATEGORY_SLUGS = [
  "privacy",
  "crypto-safety",
  "browser-protection",
  "file-security",
  "passwords-identity",
];

// Mock data - fallback until database is connected (5 core categories only)
const mockCategories = [
  { id: 1, name: "Privacy", slug: "privacy", description: "Data protection, tracking prevention, and digital privacy guides", createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "Crypto Safety", slug: "crypto-safety", description: "Privacy-focused cryptocurrency and wallet security", createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: "Browser Protection", slug: "browser-protection", description: "Browser fingerprinting, extensions, and tracker blocking", createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: "File Security", slug: "file-security", description: "Secure file sharing, encryption, and metadata protection", createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: "Passwords & Identity", slug: "passwords-identity", description: "Password security, identity protection, and authentication", createdAt: new Date(), updatedAt: new Date() },
];

const mockArticlesByCategory: Record<string, Array<{
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  categoryId: number;
  pillarId: number | null;
  metaTitle: string | null;
  metaDescription: string | null;
  keywords: string[] | null;
  targetProducts: string[] | null;
  searchIntent: string | null;
  depthScore: number | null;
  originalityScore: number | null;
  usefulnessScore: number | null;
  spamScore: number | null;
  overallScore: number | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  wordCount: number | null;
  readingTime: number | null;
  category: { name: string; slug: string };
}>> = {
  privacy: [
    {
      id: 1,
      title: "The Complete Guide to Online Privacy in 2025",
      slug: "complete-guide-online-privacy-2025",
      excerpt: "Learn everything you need to know about protecting your digital privacy in the modern age. From browser settings to encrypted communication, we cover it all.",
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
  ],
  "passwords-identity": [
    {
      id: 4,
      title: "Password Security Best Practices for 2025",
      slug: "password-security-best-practices",
      excerpt: "Create and manage strong passwords to keep your accounts safe from hackers. Learn about password managers, 2FA, and passkeys.",
      content: "",
      categoryId: 5,
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
  ],
  "crypto-safety": [
    {
      id: 2,
      title: "How to Secure Your Crypto Wallet: A Step-by-Step Guide",
      slug: "secure-crypto-wallet-guide",
      excerpt: "Protect your cryptocurrency investments with these essential security practices and wallet management techniques.",
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
  ],
  "browser-protection": [
    {
      id: 3,
      title: "VPN vs Proxy: Which Should You Use?",
      slug: "vpn-vs-proxy-comparison",
      excerpt: "Understand the key differences between VPNs and proxies to make the right choice for your privacy needs.",
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
  ],
};

// Category icons (5 core categories only)
const categoryIcons: Record<string, React.ElementType> = {
  "privacy": Shield,
  "crypto-safety": Coins,
  "browser-protection": Wrench,
  "file-security": Shield,
  "passwords-identity": Lock,
};

// Category colors (5 core categories only)
const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
  "privacy": { bg: "from-emerald-50 to-emerald-100/50", text: "text-emerald-700", accent: "bg-emerald-500" },
  "crypto-safety": { bg: "from-indigo-50 to-indigo-100/50", text: "text-indigo-700", accent: "bg-indigo-500" },
  "browser-protection": { bg: "from-rose-50 to-rose-100/50", text: "text-rose-700", accent: "bg-rose-500" },
  "file-security": { bg: "from-cyan-50 to-cyan-100/50", text: "text-cyan-700", accent: "bg-cyan-500" },
  "passwords-identity": { bg: "from-purple-50 to-purple-100/50", text: "text-purple-700", accent: "bg-purple-500" },
};

async function getCategory(slug: string) {
  try {
    if (process.env.DATABASE_URL) {
      const { getCategoryBySlug } = await import("@privacygecko/database");
      const category = await getCategoryBySlug(slug);
      if (category) return category;
    }
  } catch (error) {
    console.error("Database error, using mock category:", error);
  }
  return mockCategories.find((c) => c.slug === slug) || null;
}

async function getCategoryArticles(categorySlug: string) {
  try {
    if (process.env.DATABASE_URL) {
      const { getCategoryBySlug, getArticlesByCategory, getAllCategories } = await import("@privacygecko/database");
      const category = await getCategoryBySlug(categorySlug);
      if (category) {
        const articles = await getArticlesByCategory(category.id);
        if (articles.length > 0) {
          const categories = await getAllCategories();
          const categoryMap = new Map(categories.map(c => [c.id, { name: c.name, slug: c.slug }]));
          return articles.map(a => ({
            ...a,
            category: categoryMap.get(a.categoryId) || { name: "Uncategorized", slug: "uncategorized" }
          }));
        }
      }
    }
  } catch (error) {
    console.error("Database error, using mock articles:", error);
  }
  return mockArticlesByCategory[categorySlug] || [];
}

async function getAllCategoriesForNav() {
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = await getCategory(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const description = category.description || `Read our latest ${category.name.toLowerCase()} articles and guides. Expert tips on ${category.name.toLowerCase()} from Privacy Gecko.`;
  const canonicalUrl = `/${categorySlug}`;

  return {
    title: `${category.name} Articles & Guides`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.name} Articles & Guides | PrivacyGecko Blog`,
      description,
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Articles & Guides`,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const [category, articles, allCategories] = await Promise.all([
    getCategory(categorySlug),
    getCategoryArticles(categorySlug),
    getAllCategoriesForNav(),
  ]);

  if (!category) {
    notFound();
  }

  const Icon = categoryIcons[category.slug] || Shield;
  const colors = categoryColors[category.slug] || categoryColors.privacy;

  // Generate structured data for SEO
  const breadcrumbItems = [
    { label: "Blog", href: "/" },
    { label: category.name, href: `/${category.slug}` },
  ];

  const collectionSchema = generateCollectionSchema({
    name: category.name,
    slug: category.slug,
    description: category.description,
    articleCount: articles.length,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd schemas={[collectionSchema, breadcrumbSchema]} />

      <div className="min-h-screen bg-[var(--color-cream)]">
        {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors.bg}`}>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 border border-current rounded-full opacity-10" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-current rounded-full opacity-10" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-current rounded-full opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="max-w-3xl">
            {/* Category Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm ${colors.text} mb-6`}>
              <Icon className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                {category.name}
              </span>
              <span className="text-xs opacity-60">
                {articles.length} articles
              </span>
            </div>

            {/* Title */}
            <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-charcoal)] mb-6 leading-tight">
              {category.name}
              <span className="block font-medium italic text-[var(--color-charcoal-light)]">
                Guides & Insights
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Large Decorative Number */}
          <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block">
            <span className="font-editorial text-[16rem] font-light text-black/[0.03] select-none leading-none">
              {String(category.id).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
      </section>

      {/* Category Navigation */}
      <section className="border-b border-[var(--color-border)] bg-white/50 backdrop-blur-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <CategoryNav categories={allCategories} />
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase mb-2 block">
              All Articles
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl font-light text-[var(--color-charcoal)]">
              Explore our <span className="italic">{category.name.toLowerCase()}</span> collection
            </h2>
          </div>

          {/* Sort/Filter (visual only for now) */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-charcoal-light)] hover:text-emerald-600 transition-colors">
              <Clock className="w-4 h-4" />
              Latest
            </button>
            <div className="h-4 w-px bg-[var(--color-border)]" />
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-charcoal-light)] hover:text-emerald-600 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index + 1} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-[var(--color-border)]">
            <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-[var(--color-slate)]" />
            </div>
            <h3 className="font-editorial text-2xl text-[var(--color-charcoal)] mb-2">
              No articles yet
            </h3>
            <p className="text-[var(--color-charcoal-light)] mb-6">
              We&apos;re working on content for this category.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              Browse all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Load More (visual only) */}
        {articles.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-[var(--color-slate)]">
              <div className="h-px w-12 bg-[var(--color-border)]" />
              <span className="text-sm font-medium">
                Showing {articles.length} of {articles.length} articles
              </span>
              <div className="h-px w-12 bg-[var(--color-border)]" />
            </div>
          </div>
        )}
      </section>

      {/* Related Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 lg:p-12">
          <h3 className="font-editorial text-2xl font-light text-[var(--color-charcoal)] mb-8 text-center">
            Explore more <span className="italic">topics</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCategories
              .filter((c) => c.slug !== category.slug)
              .map((cat) => {
                const CatIcon = categoryIcons[cat.slug] || Shield;
                const catColors = categoryColors[cat.slug] || categoryColors.privacy;

                return (
                  <Link
                    key={cat.id}
                    href={`/${cat.slug}`}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-emerald-200 hover:bg-[var(--color-cream)] transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${catColors.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <CatIcon className={`w-5 h-5 ${catColors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[var(--color-charcoal)] group-hover:text-emerald-600 transition-colors">
                        {cat.name}
                      </h4>
                      <p className="text-sm text-[var(--color-slate)]">
                        {cat.description ? cat.description.slice(0, 50) + "..." : "Browse articles"}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--color-slate)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
