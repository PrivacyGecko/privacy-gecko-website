import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleForm } from "@/components/articles";
import { getAllCategories } from "@privacygecko/database";

export default async function NewArticlePage() {
  const categories = await getAllCategories();

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
          New Article
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          Create a new blog post
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <ArticleForm categories={categories} />
        </div>
      </div>
    </div>
  );
}
