import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  slug: string;
  categoryId: number | null;
}

interface RelatedPostsProps {
  articles: Article[];
  categorySlug?: string;
}

export function RelatedPosts({ articles, categorySlug = "privacy" }: RelatedPostsProps) {
  if (articles.length === 0) return null;

  return (
    <div className="bg-slate-50 rounded-2xl p-6">
      <h4 className="font-semibold text-slate-900 mb-4">Related Articles</h4>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              href={`/${categorySlug}/${article.slug}`}
              className="group flex items-start gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mt-0.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              <span className="line-clamp-2">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
