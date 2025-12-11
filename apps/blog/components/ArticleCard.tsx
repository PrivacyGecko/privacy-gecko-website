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

const categoryStyles: Record<string, string> = {
  privacy: "category-pill-privacy",
  security: "category-pill-security",
  crypto: "category-pill-crypto",
  tools: "category-pill-tools",
};

export function ArticleCard({ article, index = 1 }: ArticleCardProps) {
  const formattedDate = article.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(article.publishedAt))
    : null;

  const categoryStyle = categoryStyles[article.category.slug] || "category-pill-privacy";
  const paddedIndex = String(index).padStart(2, "0");

  return (
    <article className="group card-editorial rounded-xl p-6 relative">
      {/* Large Number Watermark */}
      <span className="article-number">{paddedIndex}</span>

      {/* Category & Date Row */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <Link
          href={`/${article.category.slug}`}
          className={`category-pill ${categoryStyle}`}
        >
          {article.category.name}
        </Link>
        {formattedDate && (
          <span className="text-xs text-slate-400 font-medium tracking-wide">
            {formattedDate}
          </span>
        )}
      </div>

      {/* Title */}
      <Link href={`/${article.category.slug}/${article.slug}`} className="block relative z-10">
        <h3 className="font-editorial text-xl font-medium text-[var(--color-charcoal)] mb-3 leading-snug group-hover:text-emerald-600 transition-colors duration-300">
          {article.title}
        </h3>
      </Link>

      {/* Excerpt */}
      {article.excerpt && (
        <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed mb-5 line-clamp-2 relative z-10">
          {article.excerpt}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 border-t border-[var(--color-border)] relative z-10">
        {article.readingTime && (
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime} min read
          </span>
        )}

        <Link
          href={`/${article.category.slug}/${article.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0"
        >
          Read
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
