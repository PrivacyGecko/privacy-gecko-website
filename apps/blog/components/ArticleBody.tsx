"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface ArticleBodyProps {
  content: string;
}

// Check if content appears to be markdown (starts with # or contains markdown patterns)
function isMarkdown(content: string): boolean {
  const markdownPatterns = [
    /^#+ /m,           // Headings
    /^\* /m,           // Unordered lists
    /^- /m,            // Unordered lists
    /^\d+\. /m,        // Ordered lists
    /\[.+\]\(.+\)/,    // Links
    /\*\*.+\*\*/,      // Bold
    /__.+__/,          // Bold
    /\*.+\*/,          // Italic
    /_.+_/,            // Italic
    /^>/m,             // Blockquotes
    /```/,             // Code blocks
  ];

  return markdownPatterns.some(pattern => pattern.test(content));
}

export function ArticleBody({ content }: ArticleBodyProps) {
  // If content looks like markdown, render it with ReactMarkdown
  // Otherwise, render as HTML (for content created with Tiptap editor)
  if (isMarkdown(content)) {
    return (
      <div className="prose-editorial has-dropcap pl-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }

  // Render HTML content
  return (
    <div
      className="prose-editorial has-dropcap pl-6"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
