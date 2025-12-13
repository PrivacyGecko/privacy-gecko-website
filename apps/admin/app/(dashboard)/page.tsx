import Link from "next/link";
import {
  FileText,
  FolderOpen,
  Plus,
  Eye,
  Clock,
  Send,
  Archive,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
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

  // Get current hour for greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow" />
          <span className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">
            Command Center
          </span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          {greeting}
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Here&apos;s what&apos;s happening with your blog today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          value={articleCounts.total}
          label="Total Articles"
          icon={<Layers className="w-6 h-6" />}
          delay={1}
        />
        <StatCard
          value={articleCounts.published}
          label="Published"
          icon={<Send className="w-6 h-6" />}
          accent
          delay={2}
        />
        <StatCard
          value={articleCounts.draft}
          label="Drafts"
          icon={<FileText className="w-6 h-6" />}
          delay={3}
        />
        <StatCard
          value={categories.length}
          label="Categories"
          icon={<FolderOpen className="w-6 h-6" />}
          delay={4}
        />
      </div>

      {/* Quick Actions */}
      <div className="animate-slide-up stagger-2">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          <h2 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
            Quick Actions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ActionCard
            href="/articles/new"
            icon={<Plus className="w-5 h-5" />}
            title="New Article"
            description="Create a new post"
            color="#00D98A"
          />
          <ActionCard
            href="/articles"
            icon={<FileText className="w-5 h-5" />}
            title="All Articles"
            description="Manage your posts"
            color="#5B8DEF"
          />
          <ActionCard
            href="/categories"
            icon={<FolderOpen className="w-5 h-5" />}
            title="Categories"
            description="Organize content"
            color="#A855F7"
          />
          <ActionCard
            href="https://blog.privacygecko.com"
            icon={<Eye className="w-5 h-5" />}
            title="View Blog"
            description="See live site"
            color="#FFB800"
            external
          />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 animate-slide-up stagger-3">
        {/* Recent Articles - Takes 3 columns */}
        <div className="lg:col-span-3 card card-glow">
          <div className="card-header flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
              </div>
              <h2 className="font-semibold text-[var(--color-text-primary)]">
                Recent Activity
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors flex items-center gap-1 group"
            >
              View all
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div>
            {recentArticles.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-subtle)] flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-[var(--color-text-tertiary)]" />
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  No articles yet
                </p>
                <Link
                  href="/articles/new"
                  className="text-[var(--color-accent)] text-sm mt-2 inline-block hover:underline"
                >
                  Create your first article
                </Link>
              </div>
            ) : (
              recentArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="activity-item group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[var(--color-text-primary)] truncate group-hover:text-[var(--color-accent)] transition-colors">
                      {article.title}
                    </div>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {formatDate(article.updatedAt)}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      article.status as
                        | "draft"
                        | "published"
                        | "queued"
                        | "rejected"
                    }
                  >
                    {article.status}
                  </Badge>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Status Breakdown - Takes 2 columns */}
        <div className="lg:col-span-2 card card-glow">
          <div className="card-header">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[var(--color-accent)]" />
              </div>
              <h2 className="font-semibold text-[var(--color-text-primary)]">
                Content Status
              </h2>
            </div>
          </div>
          <div className="p-5 space-y-5">
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

function StatCard({
  value,
  label,
  icon,
  accent = false,
  delay = 0,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <div
      className={`stat-card animate-slide-up stagger-${delay}`}
      style={{ animationFillMode: "backwards" }}
    >
      <div className="stat-card-icon">{icon}</div>
      <div className={`stat-card-value ${accent ? "" : "plain"}`}>{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}

function ActionCard({
  href,
  icon,
  title,
  description,
  color,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  external?: boolean;
}) {
  const Component = external ? "a" : Link;
  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Component
      href={href}
      className="action-card group"
      style={{ "--action-color": color } as React.CSSProperties}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div
          className="action-icon group-hover:scale-110"
          style={{ background: `${color}15`, color }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
            {title}
            {external && (
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          <div className="text-sm text-[var(--color-text-tertiary)]">
            {description}
          </div>
        </div>
      </div>
    </Component>
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
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: `${color}15`, color }}
          >
            {icon}
          </div>
          <span className="text-sm font-medium text-[var(--color-text-primary)]">
            {label}
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            {count}
          </span>
          <span className="text-xs text-[var(--color-text-tertiary)] ml-1">
            ({percentage.toFixed(0)}%)
          </span>
        </div>
      </div>
      <div className="h-1.5 bg-[var(--color-bg-subtle)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            boxShadow: percentage > 0 ? `0 0 8px ${color}40` : "none",
          }}
        />
      </div>
    </div>
  );
}
