import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { Shield, Lock, Coins, Wrench, Clock, ArrowRight, Search, SlidersHorizontal } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

interface Props {
  params: Promise<{ category: string }>;
}

// Mock data - will be replaced with database queries
const mockCategories = [
  { id: 1, name: "Privacy", slug: "privacy", description: "Digital privacy guides and tutorials for protecting your online identity", articleCount: 12 },
  { id: 2, name: "Security", slug: "security", description: "Cybersecurity tips and best practices to keep you safe", articleCount: 8 },
  { id: 3, name: "Crypto", slug: "crypto", description: "Cryptocurrency safety and security guides", articleCount: 15 },
  { id: 4, name: "Tools", slug: "tools", description: "Privacy tool reviews and comparisons", articleCount: 6 },
];

const mockArticles = [
  {
    id: 1,
    title: "The Complete Guide to Online Privacy in 2025",
    slug: "complete-guide-online-privacy-2025",
    excerpt: "Learn everything you need to know about protecting your digital privacy in the modern age. From browser settings to encrypted communication, we cover it all.",
    categoryId: 1,
    category: { name: "Privacy", slug: "privacy" },
    publishedAt: new Date("2025-01-15"),
    readingTime: 12,
    status: "published",
  },
  {
    id: 5,
    title: "Browser Privacy Settings You Should Change Today",
    slug: "browser-privacy-settings",
    excerpt: "Configure your browser for maximum privacy with these essential settings. Stop trackers, block fingerprinting, and take control of your data.",
    categoryId: 1,
    category: { name: "Privacy", slug: "privacy" },
    publishedAt: new Date("2025-01-12"),
    readingTime: 7,
    status: "published",
  },
  {
    id: 8,
    title: "Understanding Data Collection: What Companies Know",
    slug: "understanding-data-collection",
    excerpt: "A deep dive into the data collection practices of major tech companies and what you can do to limit your exposure.",
    categoryId: 1,
    category: { name: "Privacy", slug: "privacy" },
    publishedAt: new Date("2025-01-08"),
    readingTime: 10,
    status: "published",
  },
  {
    id: 2,
    title: "How to Secure Your Crypto Wallet: A Step-by-Step Guide",
    slug: "secure-crypto-wallet-guide",
    excerpt: "Protect your cryptocurrency investments with these essential security practices and wallet management techniques.",
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
    excerpt: "Understand the key differences between VPNs and proxies to make the right choice for your privacy needs.",
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
    excerpt: "Create and manage strong passwords to keep your accounts safe from hackers and data breaches.",
    categoryId: 2,
    category: { name: "Security", slug: "security" },
    publishedAt: new Date("2025-01-01"),
    readingTime: 5,
    status: "published",
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  privacy: Shield,
  security: Lock,
  crypto: Coins,
  tools: Wrench,
};

const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
  privacy: { bg: "from-emerald-50 to-emerald-100/50", text: "text-emerald-700", accent: "bg-emerald-500" },
  security: { bg: "from-amber-50 to-amber-100/50", text: "text-amber-700", accent: "bg-amber-500" },
  crypto: { bg: "from-indigo-50 to-indigo-100/50", text: "text-indigo-700", accent: "bg-indigo-500" },
  tools: { bg: "from-rose-50 to-rose-100/50", text: "text-rose-700", accent: "bg-rose-500" },
};

async function getCategory(slug: string) {
  return mockCategories.find((c) => c.slug === slug) || null;
}

async function getCategoryArticles(categorySlug: string) {
  return mockArticles.filter((a) => a.category.slug === categorySlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = await getCategory(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Articles | PrivacyGecko Blog`,
    description: category.description || `Read our latest ${category.name.toLowerCase()} articles and guides.`,
    openGraph: {
      title: `${category.name} Articles | PrivacyGecko Blog`,
      description: category.description || `Read our latest ${category.name.toLowerCase()} articles and guides.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = await getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = await getCategoryArticles(categorySlug);
  const Icon = categoryIcons[category.slug] || Shield;
  const colors = categoryColors[category.slug] || categoryColors.privacy;

  return (
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
          <CategoryNav categories={mockCategories} />
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
            {mockCategories
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
                        {cat.articleCount} articles
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
  );
}
