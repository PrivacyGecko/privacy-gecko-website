"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";
import { TiptapEditor } from "@/components/editor";
import { Input, Textarea, Select } from "@/components/ui";
import { slugify, calculateReadingTime } from "@/lib/utils";
import {
  Loader2,
  Save,
  Send,
  Eye,
  ChevronDown,
  ChevronUp,
  FileText,
  Settings,
  Calendar,
  Search,
  Type,
  Hash,
  FolderOpen,
  AlignLeft,
  BookOpen,
  Clock,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import type { Article, Category } from "@privacygecko/database";

// Check if content appears to be markdown (not HTML)
function isMarkdown(content: string): boolean {
  if (!content) return false;
  const trimmed = content.trim();
  if (trimmed.startsWith("<")) return false;
  const markdownPatterns = [
    /^#+ /m,
    /^\* /m,
    /^- /m,
    /^\d+\. /m,
    /\[.+\]\(.+\)/,
    /\*\*.+\*\*/,
    /^>/m,
    /```/,
  ];
  return markdownPatterns.some((pattern) => pattern.test(content));
}

// Convert markdown to HTML
function markdownToHtml(content: string): string {
  if (!content) return "";
  if (!isMarkdown(content)) return content;
  marked.setOptions({ gfm: true, breaks: true });
  return marked.parse(content) as string;
}

interface ArticleFormProps {
  article?: Article | null;
  categories: Category[];
}

export function ArticleForm({ article, categories }: ArticleFormProps) {
  const router = useRouter();
  const isEditing = !!article;

  const initialContent = useMemo(() => {
    return markdownToHtml(article?.content || "");
  }, [article?.content]);

  // Form state
  const [title, setTitle] = useState(article?.title || "");
  const [slug, setSlug] = useState(article?.slug || "");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(initialContent);
  const [categoryId, setCategoryId] = useState(
    article?.categoryId?.toString() || ""
  );

  // SEO fields
  const [showSeoFields, setShowSeoFields] = useState(false);
  const [metaTitle, setMetaTitle] = useState(article?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    article?.metaDescription || ""
  );
  const [keywords, setKeywords] = useState(
    article?.keywords?.join(", ") || ""
  );

  // Featured image
  const [featuredImage, setFeaturedImage] = useState(
    article?.featuredImage || ""
  );

  // Publish date
  const [publishedAt, setPublishedAt] = useState(
    article?.publishedAt
      ? new Date(article.publishedAt).toISOString().slice(0, 16)
      : ""
  );

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(slugify(title));
    }
  }, [title, slugManuallyEdited]);

  // Calculate stats
  const wordCount = content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  const readingTime = calculateReadingTime(content.replace(/<[^>]*>/g, ""));

  async function handleSubmit(publishNow: boolean = false) {
    if (!title || !slug || !content || !categoryId) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const effectivePublishedAt = publishNow
        ? publishedAt
          ? new Date(publishedAt).toISOString()
          : new Date().toISOString()
        : publishedAt
          ? new Date(publishedAt).toISOString()
          : null;

      const payload = {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        categoryId: parseInt(categoryId, 10),
        featuredImage: featuredImage || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        keywords: keywords
          ? keywords
              .split(",")
              .map((k) => k.trim())
              .filter(Boolean)
          : null,
        status: publishNow ? "published" : "draft",
        publishedAt: effectivePublishedAt,
      };

      const url = isEditing ? `/api/articles/${article.id}` : "/api/articles";
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save article");
      }

      router.push("/articles");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsSubmitting(false);
    }
  }

  function handlePreview() {
    if (article?.slug) {
      const category = categories.find((c) => c.id === article.categoryId);
      if (category) {
        window.open(
          `https://blog.privacygecko.com/${category.slug}/${article.slug}`,
          "_blank"
        );
      }
    }
  }

  const categoryOptions = categories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  return (
    <div className="article-form-container">
      {/* Main Content Area */}
      <div className="article-main">
        {error && (
          <div className="form-error-banner">
            <span>{error}</span>
          </div>
        )}

        {/* Title Card */}
        <div className="form-card">
          <div className="form-card-header">
            <div className="form-card-icon">
              <Type className="w-4 h-4" />
            </div>
            <span className="form-card-title">Article Details</span>
          </div>
          <div className="form-card-body">
            <div className="form-fields-grid">
              <div className="form-field">
                <Input
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter an engaging title..."
                />
              </div>
              <div className="form-field-row">
                <div className="form-field flex-1">
                  <Input
                    label="URL Slug"
                    value={slug}
                    onChange={(e) => {
                      setSlug(e.target.value);
                      setSlugManuallyEdited(true);
                    }}
                    placeholder="article-url-slug"
                  />
                </div>
                <div className="form-field" style={{ width: "200px" }}>
                  <Select
                    label="Category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    options={categoryOptions}
                    placeholder="Select..."
                  />
                </div>
              </div>
              <div className="form-field">
                <Textarea
                  label="Excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Write a brief summary that appears in previews..."
                  rows={2}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Editor Card */}
        <div className="form-card editor-card">
          <div className="form-card-header">
            <div className="form-card-icon">
              <FileText className="w-4 h-4" />
            </div>
            <span className="form-card-title">Content</span>
            <div className="editor-header-stats">
              <span className="editor-stat-pill">
                <BookOpen className="w-3 h-3" />
                {wordCount} words
              </span>
              <span className="editor-stat-pill">
                <Clock className="w-3 h-3" />
                {readingTime} min read
              </span>
            </div>
          </div>
          <div className="editor-wrapper">
            <TiptapEditor
              content={content}
              onChange={setContent}
              placeholder="Start writing your article..."
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="article-sidebar">
        {/* Publish Actions */}
        <div className="form-card publish-card">
          <div className="form-card-header">
            <div className="form-card-icon publish-icon">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="form-card-title">Publish</span>
          </div>
          <div className="form-card-body">
            <div className="publish-actions">
              <button
                type="button"
                onClick={() => handleSubmit(true)}
                disabled={isSubmitting}
                className="publish-btn-primary"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isEditing ? "Update & Publish" : "Publish Now"}
              </button>
              <button
                type="button"
                onClick={() => handleSubmit(false)}
                disabled={isSubmitting}
                className="publish-btn-secondary"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Save as Draft
              </button>
              {isEditing && article?.status === "published" && (
                <button
                  type="button"
                  onClick={handlePreview}
                  className="publish-btn-secondary"
                >
                  <Eye className="w-4 h-4" />
                  Preview Live
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Schedule Card */}
        <div className="form-card">
          <div className="form-card-header">
            <div className="form-card-icon">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="form-card-title">Schedule</span>
          </div>
          <div className="form-card-body">
            <input
              type="datetime-local"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className="input"
            />
            <p className="form-hint">
              Set a date to backdate or schedule. Leave empty for current time.
            </p>
          </div>
        </div>

        {/* Featured Image Card */}
        <div className="form-card">
          <div className="form-card-header">
            <div className="form-card-icon">
              <ImageIcon className="w-4 h-4" />
            </div>
            <span className="form-card-title">Featured Image</span>
          </div>
          <div className="form-card-body">
            <Input
              label=""
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            {featuredImage && (
              <div className="featured-image-preview">
                <img
                  src={featuredImage}
                  alt="Featured preview"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            )}
            <p className="form-hint">
              Enter image URL. Each article should have a unique image.
            </p>
          </div>
        </div>

        {/* SEO Settings Card */}
        <div className="form-card collapsible-card">
          <button
            type="button"
            onClick={() => setShowSeoFields(!showSeoFields)}
            className="collapsible-header"
          >
            <div className="collapsible-header-left">
              <div className="form-card-icon">
                <Search className="w-4 h-4" />
              </div>
              <span>SEO Settings</span>
            </div>
            {showSeoFields ? (
              <ChevronUp className="w-4 h-4 text-[var(--color-text-tertiary)]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[var(--color-text-tertiary)]" />
            )}
          </button>
          {showSeoFields && (
            <div className="collapsible-content">
              <Input
                label="Meta Title"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="SEO title"
              />
              <div className="char-count">{metaTitle.length}/60</div>
              <Textarea
                label="Meta Description"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Description for search results"
                rows={2}
              />
              <div className="char-count">{metaDescription.length}/160</div>
              <Input
                label="Keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          )}
        </div>

        {/* Status Indicator */}
        {isEditing && (
          <div className="status-indicator-card">
            <div className="status-indicator-dot" data-status={article.status} />
            <span className="status-indicator-text">
              Status: <strong>{article.status}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
