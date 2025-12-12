"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Function to create slug from text
    const slugify = (text: string) =>
      text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();

    // Check if content is markdown
    const isMarkdown = /^#+ /m.test(content);

    let items: TocItem[] = [];

    if (isMarkdown) {
      // Parse markdown headings (## and ###)
      const headingRegex = /^(#{2,3})\s+(.+)$/gm;
      let match;
      let index = 0;

      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugify(text) || `heading-${index}`;
        items.push({ id, text, level });
        index++;
      }
    } else {
      // Parse HTML headings
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const headingElements = doc.querySelectorAll("h2, h3");

      items = Array.from(headingElements).map((heading, index) => {
        const id = heading.id || slugify(heading.textContent || "") || `heading-${index}`;
        return {
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        };
      });
    }

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sidebar-card">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--color-border)]">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
          <List className="w-4 h-4 text-emerald-600" />
        </div>
        <h4 className="font-semibold text-[var(--color-charcoal)]">
          In this article
        </h4>
      </div>

      {/* TOC Links */}
      <nav className="toc-editorial">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`toc-link w-full text-left ${
              activeId === heading.id ? "active" : ""
            } ${heading.level === 3 ? "level-3" : ""}`}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  );
}
