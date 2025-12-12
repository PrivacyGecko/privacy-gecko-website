import Link from "next/link";
import { Plus } from "lucide-react";
import { CategoryList } from "@/components/categories";
import { getAllCategories } from "@privacygecko/database";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            Categories
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            {categories.length} categories total
          </p>
        </div>
        <Link href="/categories/new" className="btn btn-primary">
          <Plus className="w-4 h-4" />
          New Category
        </Link>
      </div>

      <CategoryList categories={categories} />
    </div>
  );
}
