import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CategoryForm } from "@/components/categories";

export default function NewCategoryPage() {
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
          New Category
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          Create a new blog category
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <CategoryForm />
        </div>
      </div>
    </div>
  );
}
