import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleBody } from "@/components/ArticleBody";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ProductCTA } from "@/components/ProductCTA";
import { AuthorBio } from "@/components/AuthorBio";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ReadingProgress } from "@/components/ReadingProgress";

export const revalidate = false; // Only revalidate on-demand

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

// Mock data - will be replaced with database queries
const mockArticles = [
  {
    id: 1,
    title: "The Complete Guide to Online Privacy in 2025",
    slug: "complete-guide-online-privacy-2025",
    excerpt: "Learn everything you need to know about protecting your digital privacy in the modern age.",
    content: `
      <p class="lead">In an era where data is the new currency, protecting your online privacy has never been more important. This comprehensive guide will walk you through everything you need to know to stay safe online in 2025.</p>

      <h2 id="why-privacy-matters">Why Privacy Matters</h2>
      <p>Your digital footprint reveals more about you than you might think. Every search, every click, and every interaction is being tracked and analyzed. Understanding this is the first step to protecting yourself.</p>
      <p>Privacy is not about having something to hide—it's about maintaining control over your personal information and deciding who gets access to it.</p>

      <blockquote>
        Privacy is not about having something to hide. It's about maintaining control over your personal information.
      </blockquote>

      <h2 id="essential-privacy-tools">Essential Privacy Tools</h2>
      <p>Here are the must-have tools for anyone serious about online privacy:</p>
      <ul>
        <li><strong>VPN (Virtual Private Network)</strong> - Encrypts your internet connection and masks your IP address</li>
        <li><strong>Password Manager</strong> - Generates and stores strong, unique passwords for all your accounts</li>
        <li><strong>Encrypted Messaging</strong> - End-to-end encrypted communication apps</li>
        <li><strong>Privacy-focused Browser</strong> - Browsers that don't track your activity</li>
      </ul>

      <h2 id="browser-privacy-settings">Browser Privacy Settings</h2>
      <p>Your browser is your window to the internet, and it's also a major source of data leakage. Configure these settings for better privacy:</p>
      <ol>
        <li>Block third-party cookies</li>
        <li>Enable Do Not Track</li>
        <li>Use private/incognito mode for sensitive browsing</li>
        <li>Clear browsing data regularly</li>
      </ol>

      <h3 id="recommended-extensions">Recommended Browser Extensions</h3>
      <p>Enhance your browser's privacy with these extensions:</p>
      <ul>
        <li><strong>uBlock Origin</strong> - Ad and tracker blocker</li>
        <li><strong>Privacy Badger</strong> - Learns to block invisible trackers</li>
        <li><strong>HTTPS Everywhere</strong> - Forces secure connections</li>
      </ul>

      <h2 id="social-media-privacy">Social Media Privacy</h2>
      <p>Social media platforms are designed to collect as much data as possible. Here's how to limit what they know about you:</p>
      <ul>
        <li>Review and restrict privacy settings</li>
        <li>Limit what you share publicly</li>
        <li>Use separate email addresses for different platforms</li>
        <li>Consider using a pseudonym</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>Taking control of your online privacy doesn't have to be overwhelming. Start with the basics and gradually implement more advanced protections as you become comfortable. Remember, every step you take makes you safer online.</p>

      <p class="signature">Stay safe, stay private. 🦎</p>
    `,
    metaTitle: "Complete Guide to Online Privacy in 2025 | PrivacyGecko",
    metaDescription: "Learn essential privacy practices, tools, and strategies to protect your digital identity in 2025. Expert guide from PrivacyGecko.",
    keywords: ["online privacy", "digital privacy", "privacy guide", "internet privacy", "data protection"],
    categoryId: 1,
    category: { name: "Privacy", slug: "privacy" },
    targetProducts: ["geckoguard", "geckoadvisor"],
    publishedAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-01-15"),
    readingTime: 12,
    wordCount: 1500,
    status: "published",
  },
];

const mockRelatedArticles = [
  { id: 5, title: "Browser Privacy Settings You Should Change Today", slug: "browser-privacy-settings", categoryId: 1, readingTime: 7 },
  { id: 6, title: "How to Choose a VPN: Complete Guide", slug: "how-to-choose-vpn", categoryId: 1, readingTime: 10 },
  { id: 7, title: "Understanding Data Collection: What Companies Know", slug: "understanding-data-collection", categoryId: 1, readingTime: 8 },
];

async function getArticle(slug: string) {
  return mockArticles.find((a) => a.slug === slug) || null;
}

async function getRelatedArticles(categoryId: number, currentId: number) {
  return mockRelatedArticles.filter((a) => a.id !== currentId);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      type: "article",
      publishedTime: article.publishedAt?.toISOString(),
      modifiedTime: article.updatedAt?.toISOString(),
      authors: ["PrivacyGecko Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  // Verify category matches
  if (article.category.slug !== categorySlug) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.categoryId, article.id);

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      <article className="min-h-screen bg-[var(--color-cream)]">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/" },
              { label: article.category.name, href: `/${article.category.slug}` },
              { label: article.title, href: `/${article.category.slug}/${article.slug}` },
            ]}
          />
        </div>

        {/* Article Header - Full Width Hero */}
        <ArticleHeader
          title={article.title}
          excerpt={article.excerpt}
          publishedAt={article.publishedAt}
          updatedAt={article.updatedAt}
          readingTime={article.readingTime}
          wordCount={article.wordCount}
          category={article.category}
        />

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <ArticleBody content={article.content} />

              {/* Product CTA - After Article */}
              {article.targetProducts && article.targetProducts.length > 0 && (
                <ProductCTA products={article.targetProducts} />
              )}

              {/* Author Bio */}
              <AuthorBio />

              {/* Share Section - Mobile */}
              <div className="lg:hidden mt-12 pt-8 border-t border-[var(--color-border)]">
                <p className="text-sm font-medium text-[var(--color-charcoal)] mb-4">Share this article</p>
                <ShareButtons
                  title={article.title}
                  url={`/${article.category.slug}/${article.slug}`}
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Table of Contents */}
                <TableOfContents content={article.content} />

                {/* Share Buttons - Desktop */}
                <div className="hidden lg:block sidebar-card">
                  <p className="text-sm font-semibold text-[var(--color-charcoal)] mb-4">Share this article</p>
                  <ShareButtons
                    title={article.title}
                    url={`/${article.category.slug}/${article.slug}`}
                  />
                </div>

                {/* Related Posts */}
                <RelatedPosts articles={relatedArticles} categorySlug={article.category.slug} />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
