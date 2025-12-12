import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

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

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = article.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(article.publishedAt))
    : null;

  const categoryBadgeClass = getCategoryBadgeClass(article.category.slug);

  return (
    <article className="article-card group p-6">
      {/* Category & Date Row */}
      <div className="flex items-center justify-between mb-4">
        <Link
          href={`/${article.category.slug}`}
          className={`category-badge ${categoryBadgeClass}`}
        >
          {article.category.name}
        </Link>
        {formattedDate && (
          <span className="text-xs text-[var(--color-text-tertiary)] font-medium">
            {formattedDate}
          </span>
        )}
      </div>

      {/* Title */}
      <Link href={`/${article.category.slug}/${article.slug}`} className="block">
        <h3 className="font-display text-lg text-[var(--color-text-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
          {article.title}
        </h3>
      </Link>

      {/* Excerpt */}
      {article.excerpt && (
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">
          {article.excerpt}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
        {article.readingTime && (
          <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-tertiary)]">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime} min
          </span>
        )}

        <Link
          href={`/${article.category.slug}/${article.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all translate-x-[-8px] group-hover:translate-x-0"
        >
          Read
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
