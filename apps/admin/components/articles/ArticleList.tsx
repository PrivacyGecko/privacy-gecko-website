"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import {
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Send,
  Archive,
  Loader2,
} from "lucide-react";
import type { Article, Category } from "@privacygecko/database";

interface ArticleListProps {
  articles: Article[];
  categories: Category[];
}

type ArticleStatus = "draft" | "queued" | "published" | "rejected";

export function ArticleList({ articles, categories }: ArticleListProps) {
  const router = useRouter();
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const categoryMap = new Map(categories.map((c) => [c.id, c]));

  async function handlePublish(id: number) {
    setActionLoading(id);
    try {
      await fetch(`/api/articles/${id}/publish`, { method: "POST" });
      router.refresh();
    } catch (error) {
      console.error("Failed to publish:", error);
    } finally {
      setActionLoading(null);
      setOpenMenu(null);
    }
  }

  async function handleUnpublish(id: number) {
    setActionLoading(id);
    try {
      await fetch(`/api/articles/${id}/unpublish`, { method: "POST" });
      router.refresh();
    } catch (error) {
      console.error("Failed to unpublish:", error);
    } finally {
      setActionLoading(null);
      setOpenMenu(null);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this article?")) return;

    setActionLoading(id);
    try {
      await fetch(`/api/articles/${id}`, { method: "DELETE" });
      router.refresh();
    } catch (error) {
      console.error("Failed to delete:", error);
    } finally {
      setActionLoading(null);
      setOpenMenu(null);
    }
  }

  function getStatusBadge(status: string) {
    const statusVariant = status as ArticleStatus;
    return (
      <Badge variant={statusVariant}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  }

  function getPreviewUrl(article: Article) {
    const category = categoryMap.get(article.categoryId);
    if (!category) return null;
    return `https://blog.privacygecko.com/${category.slug}/${article.slug}`;
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-text-secondary)] mb-4">
          No articles found
        </p>
        <Link href="/articles/new" className="btn btn-primary">
          Create your first article
        </Link>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <table className="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Published</th>
            <th>Updated</th>
            <th className="w-20">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            const category = categoryMap.get(article.categoryId);
            const previewUrl = getPreviewUrl(article);
            const isLoading = actionLoading === article.id;

            return (
              <tr key={article.id}>
                <td>
                  <Link
                    href={`/articles/${article.id}`}
                    className="font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {article.title}
                  </Link>
                </td>
                <td className="text-[var(--color-text-secondary)]">
                  {category?.name || "—"}
                </td>
                <td>{getStatusBadge(article.status)}</td>
                <td className="text-[var(--color-text-secondary)]">
                  {formatDate(article.publishedAt)}
                </td>
                <td className="text-[var(--color-text-secondary)]">
                  {formatDate(article.updatedAt)}
                </td>
                <td>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === article.id ? null : article.id)
                      }
                      className="btn btn-ghost btn-sm"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <MoreHorizontal className="w-4 h-4" />
                      )}
                    </button>

                    {openMenu === article.id && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setOpenMenu(null)}
                        />
                        <div className="absolute right-0 top-full mt-1 w-48 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg shadow-lg z-20 py-1">
                          <Link
                            href={`/articles/${article.id}`}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                            onClick={() => setOpenMenu(null)}
                          >
                            <Edit className="w-4 h-4" />
                            Edit
                          </Link>
                          {previewUrl && article.status === "published" && (
                            <a
                              href={previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                              onClick={() => setOpenMenu(null)}
                            >
                              <Eye className="w-4 h-4" />
                              View Live
                            </a>
                          )}
                          {article.status !== "published" ? (
                            <button
                              onClick={() => handlePublish(article.id)}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] w-full text-left"
                            >
                              <Send className="w-4 h-4" />
                              Publish
                            </button>
                          ) : (
                            <button
                              onClick={() => handleUnpublish(article.id)}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] w-full text-left"
                            >
                              <Archive className="w-4 h-4" />
                              Unpublish
                            </button>
                          )}
                          <hr className="my-1 border-[var(--color-border)]" />
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-error)] hover:bg-red-50 w-full text-left"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
