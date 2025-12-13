import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  category: { name: string; slug: string };
  publishedAt: Date | null;
  readingTime: number | null;
}

interface ArticleCardProps {
  article: Article;
  index?: number;
}

// Get category color based on slug
function getCategoryColor(slug: string): string {
  const colors: Record<string, string> = {
    "privacy": "#635BFF",
    "security": "#FF6B35",
    "crypto-safety": "#00B4D8",
    "browser-protection": "#E83E8C",
    "file-security": "#00D98A",
    "passwords-identity": "#6366F1",
    "product-updates": "#00B876",
    "tutorials": "#FF6B35",
  };
  return colors[slug] || "#635BFF";
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = article.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(article.publishedAt))
    : null;

  const categoryColor = getCategoryColor(article.category.slug);

  return (
    <article className="article-card group">
      {/* Left Column - Content */}
      <div>
        {/* Category Pill */}
        <Link
          href={`/${article.category.slug}`}
          className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wide text-white mb-4 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: categoryColor }}
        >
          {article.category.name}
        </Link>

        {/* Title */}
        <Link href={`/${article.category.slug}/${article.slug}`}>
          <h3 className="font-display text-[1.625rem] lg:text-[1.875rem] leading-[1.15] text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-200">
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed mb-6 max-w-md">
            {article.excerpt}
          </p>
        )}

        {/* Read More */}
        <Link
          href={`/${article.category.slug}/${article.slug}`}
          className="read-more"
        >
          Read more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Right Column - Meta */}
      <div className="flex flex-col">
        {/* Date */}
        {formattedDate && (
          <div className="mb-5">
            <span className="text-[13px] text-[var(--color-text-tertiary)] font-medium">
              {formattedDate}
            </span>
          </div>
        )}

        {/* Author Block */}
        <div className="author-block mb-6">
          <div className="author-avatar">PG</div>
          <div className="author-info">
            <span className="author-name">Privacy Gecko Team</span>
            <span className="author-role">
              {article.readingTime ? `${article.readingTime} min read` : "Security Researchers"}
            </span>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-bg-subtle)] to-[var(--color-bg-muted)] hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{ background: `${categoryColor}15` }}
            >
              <span className="text-2xl">🦎</span>
            </div>
          </div>
          {/* Decorative elements */}
          <div
            className="absolute top-3 right-3 w-12 h-12 rounded-full opacity-20"
            style={{ background: categoryColor }}
          />
          <div
            className="absolute bottom-4 left-4 w-8 h-8 rounded-lg opacity-15"
            style={{ background: categoryColor }}
          />
        </div>
      </div>
    </article>
  );
}
