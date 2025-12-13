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
  Zap,
  PenTool,
  Target,
  BarChart3,
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
  const greetingEmoji = hour < 12 ? "☀️" : hour < 18 ? "🌤️" : "🌙";

  // Calculate productivity stats
  const publishRate = articleCounts.total > 0
    ? Math.round((articleCounts.published / articleCounts.total) * 100)
    : 0;

  return (
    <div className="dashboard-container">
      {/* Hero Header with Gradient */}
      <div className="hero-section">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span>Command Center</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-greeting">{greeting}</span>
            <span className="hero-emoji">{greetingEmoji}</span>
          </h1>
          <p className="hero-subtitle">
            Here&apos;s what&apos;s happening with your blog today
          </p>
        </div>
      </div>

      {/* Stats Grid - Enhanced */}
      <div className="stats-grid">
        <StatCard
          value={articleCounts.total}
          label="Total Articles"
          icon={<Layers className="w-6 h-6" />}
          color="#5B8DEF"
          delay={1}
        />
        <StatCard
          value={articleCounts.published}
          label="Published"
          icon={<Send className="w-6 h-6" />}
          color="#00D98A"
          accent
          delay={2}
        />
        <StatCard
          value={articleCounts.draft}
          label="Drafts"
          icon={<FileText className="w-6 h-6" />}
          color="#FFB800"
          delay={3}
        />
        <StatCard
          value={categories.length}
          label="Categories"
          icon={<FolderOpen className="w-6 h-6" />}
          color="#A855F7"
          delay={4}
        />
      </div>

      {/* Productivity Banner */}
      <div className="productivity-banner">
        <div className="productivity-left">
          <div className="productivity-icon">
            <Target className="w-5 h-5" />
          </div>
          <div className="productivity-info">
            <span className="productivity-label">Publish Rate</span>
            <div className="productivity-bar-container">
              <div className="productivity-bar">
                <div className="productivity-fill" style={{ width: `${publishRate}%` }} />
              </div>
              <span className="productivity-value">{publishRate}%</span>
            </div>
          </div>
        </div>
        <div className="productivity-right">
          <div className="productivity-stat">
            <BarChart3 className="w-4 h-4" />
            <span><strong>{articleCounts.published}</strong> live</span>
          </div>
          <div className="productivity-divider" />
          <div className="productivity-stat">
            <PenTool className="w-4 h-4" />
            <span><strong>{articleCounts.draft}</strong> drafts</span>
          </div>
        </div>
      </div>

      {/* Quick Actions - Enhanced */}
      <div className="section-block">
        <div className="section-header">
          <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          <h2>Quick Actions</h2>
        </div>
        <div className="actions-grid">
          <ActionCard
            href="/articles/new"
            icon={<Plus className="w-5 h-5" />}
            title="New Article"
            description="Create a new post"
            color="#00D98A"
            primary
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
      <div className="content-grid">
        {/* Recent Articles */}
        <div className="activity-card">
          <div className="activity-header">
            <div className="activity-header-left">
              <div className="activity-icon-wrapper">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h2>Recent Activity</h2>
                <p>Latest updates</p>
              </div>
            </div>
            <Link href="/articles" className="view-all-link">
              View all
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="activity-list">
            {recentArticles.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <FileText className="w-8 h-8" />
                </div>
                <p>No articles yet</p>
                <Link href="/articles/new" className="empty-link">
                  Create your first article
                </Link>
              </div>
            ) : (
              recentArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="activity-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="activity-dot" />
                  <div className="activity-content">
                    <span className="activity-title">{article.title}</span>
                    <span className="activity-meta">
                      <Clock className="w-3 h-3" />
                      {formatDate(article.updatedAt)}
                    </span>
                  </div>
                  <Badge
                    variant={article.status as "draft" | "published" | "queued" | "rejected"}
                  >
                    {article.status}
                  </Badge>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="status-card">
          <div className="status-header">
            <div className="status-icon-wrapper">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2>Content Status</h2>
              <p>Overview</p>
            </div>
          </div>
          <div className="status-list">
            <StatusBar
              label="Published"
              count={articleCounts.published}
              total={articleCounts.total}
              color="#00D98A"
              icon={<Send className="w-4 h-4" />}
            />
            <StatusBar
              label="Drafts"
              count={articleCounts.draft}
              total={articleCounts.total}
              color="#6B6B7A"
              icon={<FileText className="w-4 h-4" />}
            />
            <StatusBar
              label="Queued"
              count={articleCounts.queued}
              total={articleCounts.total}
              color="#FFB800"
              icon={<Clock className="w-4 h-4" />}
            />
            <StatusBar
              label="Rejected"
              count={articleCounts.rejected}
              total={articleCounts.total}
              color="#FF4757"
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
  color,
  accent = false,
  delay = 0,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <div
      className="stat-card-new"
      style={{ "--stat-color": color, animationDelay: `${delay * 0.1}s` } as React.CSSProperties}
    >
      <div className="stat-glow" />
      <div className="stat-icon" style={{ background: `${color}18`, color }}>
        {icon}
      </div>
      <div className={`stat-value ${accent ? "accent" : ""}`}>{value}</div>
      <div className="stat-label">{label}</div>
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
  primary = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  external?: boolean;
  primary?: boolean;
}) {
  const Component = external ? "a" : Link;
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      href={href}
      className={`action-card-new ${primary ? "primary" : ""}`}
      style={{ "--action-color": color } as React.CSSProperties}
      {...props}
    >
      {primary && <div className="action-shine" />}
      <div className="action-icon-new" style={{ background: `${color}18`, color }}>
        {icon}
      </div>
      <div className="action-text">
        <span className="action-title-new">
          {title}
          {external && <ArrowUpRight className="w-3.5 h-3.5" />}
        </span>
        <span className="action-desc-new">{description}</span>
      </div>
      {primary && <Zap className="action-zap" />}
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
    <div className="status-bar-new">
      <div className="status-bar-top">
        <div className="status-bar-left">
          <div className="status-bar-icon" style={{ background: `${color}18`, color }}>
            {icon}
          </div>
          <span>{label}</span>
        </div>
        <div className="status-bar-right">
          <span className="status-count">{count}</span>
          <span className="status-percent">({percentage.toFixed(0)}%)</span>
        </div>
      </div>
      <div className="status-track">
        <div
          className="status-fill"
          style={{
            width: `${percentage}%`,
            background: color,
            boxShadow: percentage > 0 ? `0 0 12px ${color}50` : "none",
          }}
        />
      </div>
    </div>
  );
}
