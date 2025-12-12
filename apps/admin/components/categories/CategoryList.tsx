"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { Edit, Trash2, Loader2 } from "lucide-react";
import type { Category } from "@privacygecko/database";

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this category?")) return;

    setDeletingId(id);
    try {
      const response = await fetch(`/api/categories/${id}`, { method: "DELETE" });
      if (response.ok) {
        router.refresh();
      } else {
        const data = await response.json();
        alert(data.error || "Failed to delete category");
      }
    } catch (error) {
      console.error("Failed to delete:", error);
      alert("Failed to delete category");
    } finally {
      setDeletingId(null);
    }
  }

  if (categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-text-secondary)] mb-4">
          No categories found
        </p>
        <Link href="/categories/new" className="btn btn-primary">
          Create your first category
        </Link>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th>Description</th>
            <th>Created</th>
            <th className="w-24">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <span className="font-medium text-[var(--color-text-primary)]">
                  {category.name}
                </span>
              </td>
              <td className="text-[var(--color-text-secondary)] font-mono text-sm">
                {category.slug}
              </td>
              <td className="text-[var(--color-text-secondary)] max-w-xs truncate">
                {category.description || "—"}
              </td>
              <td className="text-[var(--color-text-secondary)]">
                {formatDate(category.createdAt)}
              </td>
              <td>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/categories/${category.id}`}
                    className="btn btn-ghost btn-sm"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(category.id)}
                    disabled={deletingId === category.id}
                    className="btn btn-ghost btn-sm text-[var(--color-error)] hover:bg-red-50"
                    title="Delete"
                  >
                    {deletingId === category.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
