import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Use main domain for SEO authority
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/blog/api/',
        ],
      },
    ],
    sitemap: 'https://privacygecko.com/sitemap.xml',
  }
}
