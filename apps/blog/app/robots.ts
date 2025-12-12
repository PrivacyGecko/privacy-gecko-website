import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Use main domain for SEO authority
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://privacygecko.com/blog/sitemap.xml',
  }
}
