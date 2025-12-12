import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CategoryForm } from "@/components/categories";
import { getCategoryById } from "@privacygecko/database";

export const dynamic = "force-dynamic";

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function EditCategoryPage({ params }: PageParams) {
  const { id } = await params;
  const categoryId = parseInt(id, 10);

  if (isNaN(categoryId)) {
    notFound();
  }

  const category = await getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Link>
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
          Edit Category
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          {category.name}
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <CategoryForm category={category} />
        </div>
      </div>
    </div>
  );
}
