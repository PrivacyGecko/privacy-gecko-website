import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

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
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = article.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(article.publishedAt))
    : null;

  return (
    <article className="group bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Category Badge */}
      <div className="p-6 pb-0">
        <Link
          href={`/${article.category.slug}`}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200 transition-colors"
        >
          {article.category.name}
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/${article.category.slug}/${article.slug}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors font-display">
            {article.title}
          </h3>
        </Link>

        {article.excerpt && (
          <p className="text-slate-600 text-sm line-clamp-2 mb-4">
            {article.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-500">
          {formattedDate && (
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
          )}
          {article.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime} min read
            </span>
          )}
        </div>
      </div>

      {/* Read More Link */}
      <div className="px-6 pb-6">
        <Link
          href={`/${article.category.slug}/${article.slug}`}
          className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700"
        >
          Read more
          <svg
            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
    </article>
  );
}
