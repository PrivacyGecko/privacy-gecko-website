import Link from "next/link";
import { FileText, FolderOpen, Plus, Eye, Clock, Send, Archive } from "lucide-react";
import { Badge } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import {
  getArticleCountByStatus,
  getRecentlyUpdatedArticles,
  getAllCategories,
} from "@privacygecko/database";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [articleCounts, recentArticles, categories] = await Promise.all([
    getArticleCountByStatus(),
    getRecentlyUpdatedArticles(5),
    getAllCategories(),
  ]);

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
          Dashboard
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          Welcome to the Privacy Gecko blog admin
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <div className="stat-card-value">{articleCounts.total}</div>
          <div className="stat-card-label">Total Articles</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value text-[var(--color-published)]">
            {articleCounts.published}
          </div>
          <div className="stat-card-label">Published</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value text-[var(--color-draft)]">
            {articleCounts.draft}
          </div>
          <div className="stat-card-label">Drafts</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{categories.length}</div>
          <div className="stat-card-label">Categories</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link
          href="/articles/new"
          className="card p-5 hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
              <Plus className="w-5 h-5 text-[var(--color-accent)] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-[var(--color-text-primary)]">
                New Article
              </div>
              <div className="text-sm text-[var(--color-text-tertiary)]">
                Create a new post
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/articles"
          className="card p-5 hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <FileText className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-[var(--color-text-primary)]">
                All Articles
              </div>
              <div className="text-sm text-[var(--color-text-tertiary)]">
                Manage your posts
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/categories"
          className="card p-5 hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
              <FolderOpen className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-[var(--color-text-primary)]">
                Categories
              </div>
              <div className="text-sm text-[var(--color-text-tertiary)]">
                Organize content
              </div>
            </div>
          </div>
        </Link>

        <a
          href="https://blog.privacygecko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <Eye className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-[var(--color-text-primary)]">
                View Blog
              </div>
              <div className="text-sm text-[var(--color-text-tertiary)]">
                See live site
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Articles */}
        <div className="card">
          <div className="card-header flex items-center justify-between">
            <h2 className="font-semibold text-[var(--color-text-primary)]">
              Recent Articles
            </h2>
            <Link
              href="/articles"
              className="text-sm text-[var(--color-accent)] hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="divide-y divide-[var(--color-border)]">
            {recentArticles.length === 0 ? (
              <div className="p-6 text-center text-[var(--color-text-secondary)]">
                No articles yet
              </div>
            ) : (
              recentArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="flex items-center justify-between p-4 hover:bg-[var(--color-bg-subtle)] transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[var(--color-text-primary)] truncate">
                      {article.title}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-[var(--color-text-tertiary)]">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(article.updatedAt)}</span>
                    </div>
                  </div>
                  <Badge variant={article.status as "draft" | "published" | "queued" | "rejected"}>
                    {article.status}
                  </Badge>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="card">
          <div className="card-header">
            <h2 className="font-semibold text-[var(--color-text-primary)]">
              Article Status
            </h2>
          </div>
          <div className="p-4 space-y-4">
            <StatusBar
              label="Published"
              count={articleCounts.published}
              total={articleCounts.total}
              color="var(--color-published)"
              icon={<Send className="w-4 h-4" />}
            />
            <StatusBar
              label="Drafts"
              count={articleCounts.draft}
              total={articleCounts.total}
              color="var(--color-draft)"
              icon={<FileText className="w-4 h-4" />}
            />
            <StatusBar
              label="Queued"
              count={articleCounts.queued}
              total={articleCounts.total}
              color="var(--color-queued)"
              icon={<Clock className="w-4 h-4" />}
            />
            <StatusBar
              label="Rejected"
              count={articleCounts.rejected}
              total={articleCounts.total}
              color="var(--color-rejected)"
              icon={<Archive className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar({
  label,
  count,
  total,
  color,
  icon,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
  icon: React.ReactNode;
}) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)]">
          <span style={{ color }}>{icon}</span>
          <span>{label}</span>
        </div>
        <span className="text-sm text-[var(--color-text-secondary)]">
          {count} ({percentage.toFixed(0)}%)
        </span>
      </div>
      <div className="h-2 bg-[var(--color-bg-subtle)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
