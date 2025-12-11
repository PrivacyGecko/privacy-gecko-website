import Link from "next/link";
import { Clock, Calendar, User } from "lucide-react";

interface Category {
  name: string;
  slug: string;
}

interface ArticleHeaderProps {
  title: string;
  excerpt: string | null;
  publishedAt: Date | null;
  readingTime: number | null;
  category: Category | null;
  author?: { name: string; slug: string } | null;
}

export function ArticleHeader({
  title,
  excerpt,
  publishedAt,
  readingTime,
  category,
  author,
}: ArticleHeaderProps) {
  const formattedDate = publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(publishedAt))
    : null;

  return (
    <header className="mb-8">
      {/* Category Badge */}
      {category && (
        <Link
          href={`/${category.slug}`}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200 transition-colors mb-4"
        >
          {category.name}
        </Link>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display leading-tight">
        {title}
      </h1>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-xl text-slate-600 mb-6 leading-relaxed">{excerpt}</p>
      )}

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-200">
        {author && (
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span className="font-medium text-slate-700">{author.name}</span>
          </span>
        )}
        {formattedDate && (
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
        )}
        {readingTime && (
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {readingTime} min read
          </span>
        )}
      </div>
    </header>
  );
}
