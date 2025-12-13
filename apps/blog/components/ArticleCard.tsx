import Link from "next/link";
import Image from "next/image";
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

// Get category image based on slug
function getCategoryImage(slug: string): string {
  const images: Record<string, string> = {
    "privacy": "/images/categories/privacy.jpg",
    "security": "/images/categories/security.jpg",
    "crypto-safety": "/images/categories/crypto-safety.jpg",
    "browser-protection": "/images/categories/browser-protection.jpg",
    "file-security": "/images/categories/file-security.jpg",
    "passwords-identity": "/images/categories/passwords-identity.jpg",
    "product-updates": "/images/categories/security.jpg",
    "tutorials": "/images/categories/privacy.jpg",
  };
  return images[slug] || "/images/categories/privacy.jpg";
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

        {/* Category Image */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden hidden lg:block">
          <Image
            src={getCategoryImage(article.category.slug)}
            alt={article.category.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 300px"
          />
          {/* Subtle overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </article>
  );
}
