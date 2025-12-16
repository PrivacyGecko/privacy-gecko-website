import { MetadataRoute } from 'next'

// Use main domain for SEO authority (subdirectory > subdomain)
// Even though app is hosted on subdomain, we want Google to index privacygecko.com/blog/*
const baseUrl = 'https://privacygecko.com/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]

  // Fetch articles, categories, and pillars from database
  let articleUrls: MetadataRoute.Sitemap = []
  let categoryUrls: MetadataRoute.Sitemap = []
  let pillarUrls: MetadataRoute.Sitemap = []

  try {
    if (process.env.DATABASE_URL) {
      const { getLatestArticles, getAllCategories, getAllPillars } = await import(
        '@privacygecko/database'
      )

      // Get all data
      const [articles, categories, pillars] = await Promise.all([
        getLatestArticles(1000), // Get up to 1000 articles
        getAllCategories(),
        getAllPillars(),
      ])

      // Create category map for article URLs
      const categoryMap = new Map(categories.map((c) => [c.id, c.slug]))

      // Generate category URLs (high priority - hub pages)
      categoryUrls = categories.map((category) => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))

      // Generate pillar URLs (highest priority after home - cornerstone content)
      pillarUrls = pillars.map((pillar) => ({
        url: `${baseUrl}/pillar/${pillar.slug}`,
        lastModified: pillar.updatedAt || new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.95,
      }))

      // Generate article URLs
      articleUrls = articles.map((article) => ({
        url: `${baseUrl}/${categoryMap.get(article.categoryId) || 'uncategorized'}/${article.slug}`,
        lastModified: article.updatedAt || article.publishedAt || new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error generating sitemap from database:', error)
  }

  return [...staticPages, ...pillarUrls, ...categoryUrls, ...articleUrls]
}
