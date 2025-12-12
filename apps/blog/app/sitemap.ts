import { MetadataRoute } from 'next'

// Get base URL for sitemap
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.privacygecko.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  // Fetch articles and categories from database
  let articleUrls: MetadataRoute.Sitemap = []
  let categoryUrls: MetadataRoute.Sitemap = []

  try {
    if (process.env.DATABASE_URL) {
      const { getLatestArticles, getAllCategories } = await import('@privacygecko/database')

      // Get all published articles
      const articles = await getLatestArticles(1000) // Get up to 1000 articles
      const categories = await getAllCategories()

      // Create category map for article URLs
      const categoryMap = new Map(categories.map(c => [c.id, c.slug]))

      // Generate article URLs
      articleUrls = articles.map(article => ({
        url: `${baseUrl}/${categoryMap.get(article.categoryId) || 'uncategorized'}/${article.slug}`,
        lastModified: article.updatedAt || article.publishedAt || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))

      // Generate category URLs
      categoryUrls = categories.map(category => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))
    }
  } catch (error) {
    console.error('Error generating sitemap from database:', error)
  }

  return [...staticPages, ...categoryUrls, ...articleUrls]
}
