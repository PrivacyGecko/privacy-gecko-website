export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Privacy Gecko",
    "url": "https://privacygecko.com",
    "logo": "https://privacygecko.com/images/logo.png",
    "description": "8 AI-enhanced privacy tools with local processing. Intelligent protection that adapts to new threats without compromising your data.",
    "foundingDate": "2025-01",
    "founder": {
      "@type": "Person",
      "name": "@0xAnonA",
    },
    "sameAs": [
      "https://twitter.com/PrivacyGecko",
      "https://t.me/pricko_official",
      "https://github.com/privacygecko",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@privacygecko.com",
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Tier",
        "price": "0",
        "priceCurrency": "USD",
      },
      {
        "@type": "Offer",
        "name": "Pro Tier",
        "description": "Advanced features with unlimited AI access",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
