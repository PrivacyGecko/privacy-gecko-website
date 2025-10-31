interface BlogSchemaProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export function BlogSchema({
  title,
  author,
  date,
  excerpt
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://privacygecko.com/about",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Privacy Gecko",
      "url": "https://privacygecko.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://privacygecko.com/logo.png"
      }
    },
    "datePublished": new Date(date).toISOString(),
    "dateModified": new Date(date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://privacygecko.com/blog"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
