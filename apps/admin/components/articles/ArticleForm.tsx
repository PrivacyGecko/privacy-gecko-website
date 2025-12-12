"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TiptapEditor } from "@/components/editor";
import { Input, Textarea, Select } from "@/components/ui";
import { slugify, calculateReadingTime } from "@/lib/utils";
import { Loader2, Save, Send, Eye, ChevronDown, ChevronUp } from "lucide-react";
import type { Article, Category } from "@privacygecko/database";

interface ArticleFormProps {
  article?: Article | null;
  categories: Category[];
}

export function ArticleForm({ article, categories }: ArticleFormProps) {
  const router = useRouter();
  const isEditing = !!article;

  // Form state
  const [title, setTitle] = useState(article?.title || "");
  const [slug, setSlug] = useState(article?.slug || "");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(article?.content || "");
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
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const readingTime = calculateReadingTime(content.replace(/<[^>]*>/g, ""));

  async function handleSubmit(publishNow: boolean = false) {
    if (!title || !slug || !content || !categoryId) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        categoryId: parseInt(categoryId, 10),
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        keywords: keywords
          ? keywords.split(",").map((k) => k.trim()).filter(Boolean)
          : null,
        status: publishNow ? "published" : "draft",
        publishedAt: publishNow ? new Date().toISOString() : null,
      };

      const url = isEditing
        ? `/api/articles/${article.id}`
        : "/api/articles";
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
    // Open preview in new tab (blog URL)
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
    <div className="max-w-4xl">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Title */}
        <Input
          label="Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter article title"
        />

        {/* Slug */}
        <Input
          label="Slug *"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setSlugManuallyEdited(true);
          }}
          placeholder="article-url-slug"
          helperText="URL-friendly identifier (auto-generated from title)"
        />

        {/* Category */}
        <Select
          label="Category *"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          options={categoryOptions}
          placeholder="Select a category"
        />

        {/* Excerpt */}
        <Textarea
          label="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Brief summary of the article (optional)"
          rows={3}
        />

        {/* Content Editor */}
        <div>
          <label className="label">Content *</label>
          <TiptapEditor
            content={content}
            onChange={setContent}
            placeholder="Start writing your article..."
          />
          <div className="flex justify-between mt-2 text-xs text-[var(--color-text-tertiary)]">
            <span>{wordCount} words</span>
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* SEO Fields (Collapsible) */}
        <div className="border border-[var(--color-border)] rounded-lg">
          <button
            type="button"
            onClick={() => setShowSeoFields(!showSeoFields)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--color-bg-subtle)] transition-colors"
          >
            <span className="font-medium text-[var(--color-text-primary)]">
              SEO Settings
            </span>
            {showSeoFields ? (
              <ChevronUp className="w-5 h-5 text-[var(--color-text-tertiary)]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[var(--color-text-tertiary)]" />
            )}
          </button>
          {showSeoFields && (
            <div className="p-4 pt-0 space-y-4 border-t border-[var(--color-border)]">
              <Input
                label="Meta Title"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="SEO title (defaults to article title)"
                helperText={`${metaTitle.length}/60 characters`}
              />
              <Textarea
                label="Meta Description"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="SEO description for search results"
                rows={2}
                helperText={`${metaDescription.length}/160 characters`}
              />
              <Input
                label="Keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="privacy, security, crypto (comma-separated)"
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            disabled={isSubmitting}
            className="btn btn-secondary"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {isEditing ? "Update & Publish" : "Save & Publish"}
          </button>
          {isEditing && article?.status === "published" && (
            <button
              type="button"
              onClick={handlePreview}
              className="btn btn-ghost ml-auto"
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
