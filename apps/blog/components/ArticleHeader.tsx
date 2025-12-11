import Link from "next/link";
import { Clock, Calendar, FileText, RefreshCw } from "lucide-react";

interface Category {
  name: string;
  slug: string;
}

interface ArticleHeaderProps {
  title: string;
  excerpt: string | null;
  publishedAt: Date | null;
  updatedAt?: Date | null;
  readingTime: number | null;
  wordCount?: number | null;
  category: Category | null;
}

const categoryStyles: Record<string, string> = {
  privacy: "bg-emerald-50 text-emerald-700 border-emerald-200",
  security: "bg-amber-50 text-amber-700 border-amber-200",
  crypto: "bg-indigo-50 text-indigo-700 border-indigo-200",
  tools: "bg-rose-50 text-rose-700 border-rose-200",
};

export function ArticleHeader({
  title,
  excerpt,
  publishedAt,
  updatedAt,
  readingTime,
  wordCount,
  category,
}: ArticleHeaderProps) {
  const formattedDate = publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(publishedAt))
    : null;

  const formattedUpdateDate = updatedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(updatedAt))
    : null;

  const categoryStyle = category ? categoryStyles[category.slug] || categoryStyles.privacy : categoryStyles.privacy;

  return (
    <header className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)] via-white to-[var(--color-cream)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-1/4 w-96 h-96 border border-emerald-200 rounded-full opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-emerald-200 rounded-full opacity-10" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
        {/* Category Badge */}
        {category && (
          <Link
            href={`/${category.slug}`}
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border ${categoryStyle} hover:opacity-80 transition-opacity mb-6`}
          >
            {category.name}
          </Link>
        )}

        {/* Title */}
        <h1 className="font-editorial text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[var(--color-charcoal)] mb-6 leading-tight">
          {title}
        </h1>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-xl md:text-2xl text-[var(--color-charcoal-light)] mb-8 leading-relaxed max-w-3xl">
            {excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-slate)]">
          {formattedDate && (
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </span>
          )}

          {readingTime && (
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </span>
          )}

          {wordCount && (
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{wordCount.toLocaleString()} words</span>
            </span>
          )}

          {formattedUpdateDate && formattedUpdateDate !== formattedDate && (
            <span className="flex items-center gap-2 text-emerald-600">
              <RefreshCw className="w-4 h-4" />
              <span>Updated {formattedUpdateDate}</span>
            </span>
          )}
        </div>

        {/* Decorative Line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-1 w-16 bg-emerald-500 rounded" />
          <div className="h-1 w-8 bg-emerald-300 rounded" />
          <div className="h-1 w-4 bg-emerald-200 rounded" />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
    </header>
  );
}
