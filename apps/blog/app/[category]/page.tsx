import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryNav } from "@/components/CategoryNav";

export const revalidate = 3600; // Revalidate every hour

interface Props {
  params: Promise<{ category: string }>;
}

// Mock data - will be replaced with database queries
const mockCategories = [
  { id: 1, name: "Privacy", slug: "privacy", description: "Digital privacy guides and tutorials for protecting your online identity" },
  { id: 2, name: "Security", slug: "security", description: "Cybersecurity tips and best practices to keep you safe" },
  { id: 3, name: "Crypto", slug: "crypto", description: "Cryptocurrency safety and security guides" },
  { id: 4, name: "Tools", slug: "tools", description: "Privacy tool reviews and comparisons" },
];

const mockArticles = [
  {
    id: 1,
    title: "The Complete Guide to Online Privacy in 2025",
    slug: "complete-guide-online-privacy-2025",
    excerpt: "Learn everything you need to know about protecting your digital privacy in the modern age.",
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
    excerpt: "Configure your browser for maximum privacy with these essential settings.",
    categoryId: 1,
    category: { name: "Privacy", slug: "privacy" },
    publishedAt: new Date("2025-01-12"),
    readingTime: 7,
    status: "published",
  },
  {
    id: 2,
    title: "How to Secure Your Crypto Wallet: A Step-by-Step Guide",
    slug: "secure-crypto-wallet-guide",
    excerpt: "Protect your cryptocurrency investments with these essential security practices.",
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
    excerpt: "Understand the key differences between VPNs and proxies to make the right choice.",
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
    excerpt: "Create and manage strong passwords to keep your accounts safe from hackers.",
    categoryId: 2,
    category: { name: "Security", slug: "security" },
    publishedAt: new Date("2025-01-01"),
    readingTime: 5,
    status: "published",
  },
];

async function getCategory(slug: string) {
  // TODO: Replace with database query
  return mockCategories.find((c) => c.slug === slug) || null;
}

async function getCategoryArticles(categorySlug: string) {
  // TODO: Replace with database query
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/" },
          { label: category.name, href: `/${category.slug}` },
        ]}
      />

      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display">
          {category.name}
        </h1>
        {category.description && (
          <p className="text-xl text-slate-600 max-w-2xl">{category.description}</p>
        )}
      </div>

      {/* Category Navigation */}
      <CategoryNav categories={mockCategories} />

      {/* Articles Grid */}
      <section className="mt-12">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
