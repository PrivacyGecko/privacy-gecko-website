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

// Helper to fetch article from database with fallback
async function getArticle(slug: string) {
  try {
    if (process.env.DATABASE_URL) {
      const { getArticleWithCategory } = await import("@privacygecko/database");
      const article = await getArticleWithCategory(slug);
      if (article && article.status === "published") {
        return article;
      }
    }
  } catch (error) {
    console.error("Database error fetching article:", error);
  }
  return null;
}

async function getRelatedArticles(articleId: number, categoryId: number) {
  try {
    if (process.env.DATABASE_URL) {
      const { getRelatedArticles: getRelated, getAllCategories } = await import("@privacygecko/database");
      const articles = await getRelated(articleId, categoryId, 4);
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
    console.error("Database error fetching related articles:", error);
  }
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const description = article.metaDescription || article.excerpt || undefined;
  const canonicalUrl = `/${category}/${slug}`;

  return {
    title: article.metaTitle || article.title,
    description,
    keywords: article.keywords || undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description,
      type: "article",
      url: canonicalUrl,
      publishedTime: article.publishedAt?.toISOString(),
      modifiedTime: article.updatedAt?.toISOString(),
      authors: ["PrivacyGecko Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle || article.title,
      description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  // Verify category exists and matches
  if (!article.category || article.category.slug !== categorySlug) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.id, article.categoryId);

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
