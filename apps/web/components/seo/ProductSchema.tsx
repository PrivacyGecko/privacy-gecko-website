interface ProductSchemaProps {
  name: string;
  description: string;
  category: string;
  offers?: {
    freeTier: string;
    proTier?: string;
    price?: string;
  };
  status: 'live' | 'in-development' | 'planned';
  launchDate?: string;
}

export function ProductSchema({
  name,
  description,
  category,
  offers,
  status,
  launchDate
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": category,
    "operatingSystem": "Web, iOS, Android, Windows, macOS, Linux",
    "offers": offers ? [
      {
        "@type": "Offer",
        "name": "Free Tier",
        "price": "0",
        "priceCurrency": "USD",
        "description": offers.freeTier,
      },
      ...(offers.proTier ? [{
        "@type": "Offer",
        "name": "Pro Tier",
        "price": offers.price || "TBD",
        "priceCurrency": "USD",
        "description": offers.proTier,
      }] : []),
    ] : undefined,
    "author": {
      "@type": "Organization",
      "name": "Privacy Gecko",
      "url": "https://privacygecko.com",
    },
    "datePublished": status === 'live' ? "2025-01" : launchDate,
    "softwareVersion": status === 'live' ? "1.0" : "In Development",
    "releaseNotes": status !== 'live' ? `Scheduled for ${launchDate}` : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
