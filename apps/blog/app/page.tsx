import { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "PrivacyGecko Blog - Privacy, Security & Crypto Safety",
  description:
    "Expert guides on online privacy, cybersecurity, and crypto safety. Learn how to protect your digital life with our comprehensive articles.",
};

// Mock data - will be replaced with database queries
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
  // TODO: Replace with actual database queries when DATABASE_URL is available
  // const [latestArticles, allCategories] = await Promise.all([
  //   getLatestArticles(),
  //   getCategories()
  // ]);

  const latestArticles = mockArticles;
  const allCategories = mockCategories;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display">
          PrivacyGecko Blog
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Expert guides on privacy, security, and staying safe in crypto.
          Your trusted resource for digital protection.
        </p>
      </div>

      {/* Category Navigation */}
      <CategoryNav categories={allCategories} />

      {/* Featured Article */}
      {latestArticles.length > 0 && (
        <section className="mt-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-blue-lg">
            <div className="p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                {latestArticles[0].title}
              </h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                {latestArticles[0].excerpt}
              </p>
              <Link
                href={`/${latestArticles[0].category.slug}/${latestArticles[0].slug}`}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Read Article
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles Grid */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 font-display">
            Latest Articles
          </h2>
          <Link
            href="/privacy"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View all
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
          Stay Privacy-First
        </h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Get weekly privacy tips, security alerts, and crypto safety guides
          delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-slate-500 text-sm mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </section>
    </div>
  );
}
