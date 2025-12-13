import Script from "next/script";

// Base URL for canonical links
const BASE_URL = "https://privacygecko.com/blog";
const SITE_URL = "https://privacygecko.com";

// Organization schema - reusable across pages
export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Privacy Gecko",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://twitter.com/PrivacyGecko",
    "https://github.com/privacygecko",
    "https://t.me/pricko_official",
  ],
};

// Website schema
export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "PrivacyGecko Blog",
  description: "Expert guides on online privacy, cybersecurity, and crypto safety.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Breadcrumb list schema
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${BASE_URL}${item.href}`,
    })),
  };
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  categorySlug: string;
  publishedAt: Date | null;
  updatedAt: Date | null;
  wordCount: number | null;
  imageUrl?: string;
  keywords?: string | null;
}

// Article schema
export function generateArticleSchema({
  title,
  description,
  slug,
  categorySlug,
  publishedAt,
  updatedAt,
  wordCount,
  imageUrl,
  keywords,
}: ArticleSchemaProps) {
  const articleUrl = `${BASE_URL}/${categorySlug}/${slug}`;
  const defaultImage = `${SITE_URL}/images/og-home.png`;

  return {
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    headline: title,
    description: description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl || defaultImage,
      width: 1200,
      height: 630,
    },
    datePublished: publishedAt?.toISOString() || new Date().toISOString(),
    dateModified: updatedAt?.toISOString() || publishedAt?.toISOString() || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Privacy Gecko Team",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    wordCount: wordCount || undefined,
    keywords: keywords || undefined,
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

// FAQ schema
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format, e.g., "PT30M" for 30 minutes
  steps: HowToStep[];
  imageUrl?: string;
}

// HowTo schema for tutorial articles
export function generateHowToSchema({
  name,
  description,
  totalTime,
  steps,
  imageUrl,
}: HowToSchemaProps) {
  return {
    "@type": "HowTo",
    name,
    description,
    totalTime,
    image: imageUrl,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

interface CategorySchemaProps {
  name: string;
  slug: string;
  description: string | null;
  articleCount: number;
}

// Collection page schema for category pages
export function generateCollectionSchema({
  name,
  slug,
  description,
  articleCount,
}: CategorySchemaProps) {
  return {
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/${slug}/#webpage`,
    url: `${BASE_URL}/${slug}`,
    name: `${name} - PrivacyGecko Blog`,
    description: description || `Browse ${articleCount} articles about ${name.toLowerCase()}.`,
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
    about: {
      "@type": "Thing",
      name: name,
    },
    numberOfItems: articleCount,
  };
}

interface JsonLdProps {
  schemas: Record<string, unknown>[];
}

// Main component to render JSON-LD
export function JsonLd({ schemas }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, ...schemas],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}

// Simplified component for single schema
export function SingleJsonLd({ schema }: { schema: Record<string, unknown> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    ...schema,
  };

  return (
    <Script
      id="json-ld-single"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}
