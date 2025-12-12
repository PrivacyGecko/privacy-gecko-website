import Link from "next/link";
import { Plus } from "lucide-react";
import { ArticleList } from "@/components/articles";
import { getAllArticlesAdmin, getAllCategories } from "@privacygecko/database";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const [articles, categories] = await Promise.all([
    getAllArticlesAdmin(),
    getAllCategories(),
  ]);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            Articles
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            {articles.length} articles total
          </p>
        </div>
        <Link href="/articles/new" className="btn btn-primary">
          <Plus className="w-4 h-4" />
          New Article
        </Link>
      </div>

      <ArticleList articles={articles} categories={categories} />
    </div>
  );
}
