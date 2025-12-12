import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleForm } from "@/components/articles";
import { getArticleById, getAllCategories } from "@privacygecko/database";

export const dynamic = "force-dynamic";

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function EditArticlePage({ params }: PageParams) {
  const { id } = await params;
  const articleId = parseInt(id, 10);

  if (isNaN(articleId)) {
    notFound();
  }

  const [article, categories] = await Promise.all([
    getArticleById(articleId),
    getAllCategories(),
  ]);

  if (!article) {
    notFound();
  }

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
          Edit Article
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          {article.title}
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <ArticleForm article={article} categories={categories} />
        </div>
      </div>
    </div>
  );
}
