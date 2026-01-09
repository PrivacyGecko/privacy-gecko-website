import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Gecko Development Roadmap | Product & AI Timeline',
  description: 'Transparent roadmap for Privacy Gecko\'s 8 privacy tools and AI development phases. See what\'s live, what\'s coming in 2026, and how we\'re building privacy-first AI.',
  keywords: [
    'privacy tools roadmap',
    'AI development timeline',
    'transparent development',
    'privacy software roadmap',
    'privacy-first AI',
    'federated learning',
    'zero-knowledge AI',
    'Privacy Gecko timeline',
  ],
  openGraph: {
    title: 'Privacy Gecko Development Roadmap | Product & AI Timeline',
    description: 'Transparent roadmap for 8 privacy tools and AI development. Building privacy-first AI the right way.',
    type: 'website',
    url: 'https://privacygecko.com/roadmap',
    images: [
      {
        url: 'https://privacygecko.com/og-roadmap.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Gecko Development Roadmap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Gecko Development Roadmap | Product & AI Timeline',
    description: 'Transparent roadmap for 8 privacy tools and AI development.',
    images: ['https://privacygecko.com/og-roadmap.png'],
  },
  alternates: {
    canonical: 'https://privacygecko.com/roadmap',
  },
}

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured data for roadmap events
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Privacy Gecko Development Roadmap",
    "description": "Transparent development timeline for Privacy Gecko's privacy tools and AI features",
    "itemListElement": [
      {
        "@type": "Event",
        "name": "AI Beta Testing",
        "startDate": "2026-01",
        "description": "AI features beta program with 1,000 users",
        "eventStatus": "https://schema.org/EventScheduled",
        "organizer": {
          "@type": "Organization",
          "name": "Privacy Gecko",
          "url": "https://privacygecko.com"
        }
      },
      {
        "@type": "Event",
        "name": "AI Public Launch",
        "startDate": "2026-03",
        "description": "Public launch of AI features across products",
        "eventStatus": "https://schema.org/EventScheduled",
        "organizer": {
          "@type": "Organization",
          "name": "Privacy Gecko",
          "url": "https://privacygecko.com"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
