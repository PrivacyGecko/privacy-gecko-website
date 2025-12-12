import Link from "next/link";
import { ArrowRight, Clock, Bookmark } from "lucide-react";

interface Article {
  id: number;
  title: string;
  slug: string;
  categoryId: number | null;
  readingTime?: number | null;
  category?: { name: string; slug: string };
}

interface RelatedPostsProps {
  articles: Article[];
  categorySlug?: string;
}

export function RelatedPosts({ articles, categorySlug = "privacy" }: RelatedPostsProps) {
  if (articles.length === 0) return null;

  return (
    <div className="sidebar-card">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--color-border)]">
        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
          <Bookmark className="w-4 h-4 text-amber-600" />
        </div>
        <h4 className="font-semibold text-[var(--color-charcoal)]">
          Related Articles
        </h4>
      </div>

      {/* Articles List */}
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={article.id}>
            <Link
              href={`/${categorySlug}/${article.slug}`}
              className="group block"
            >
              <div className="flex items-start gap-3">
                {/* Number */}
                <span className="font-editorial text-lg font-light text-[var(--color-border)] group-hover:text-emerald-400 transition-colors min-w-[1.5rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-[var(--color-charcoal)] group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h5>
                  {article.readingTime && (
                    <span className="flex items-center gap-1 mt-1.5 text-xs text-[var(--color-slate)]">
                      <Clock className="w-3 h-3" />
                      {article.readingTime} min
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-[var(--color-slate)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* View All Link */}
      <Link
        href={`/${categorySlug}`}
        className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-[var(--color-border)] text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
      >
        View all articles
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
