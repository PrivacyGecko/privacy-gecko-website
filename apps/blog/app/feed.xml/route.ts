/**
 * RSS Feed Generator
 * Generates an RSS 2.0 feed of published articles
 */

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const baseUrl = 'https://privacygecko.com'
  let articles: Array<{
    title: string
    slug: string
    excerpt: string | null
    publishedAt: Date | null
    updatedAt: Date
    category: { name: string; slug: string } | null
  }> = []

  // Fetch articles from database
  try {
    if (process.env.DATABASE_URL) {
      const { getLatestArticles, getAllCategories } = await import(
        '@privacygecko/database'
      )

      const rawArticles = await getLatestArticles(50) // Latest 50 articles
      const categories = await getAllCategories()
      const categoryMap = new Map(
        categories.map((c) => [c.id, { name: c.name, slug: c.slug }])
      )

      articles = rawArticles.map((article) => ({
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        publishedAt: article.publishedAt,
        updatedAt: article.updatedAt,
        category: categoryMap.get(article.categoryId) || null,
      }))
    }
  } catch (error) {
    console.error('Error generating RSS feed:', error)
  }

  // Generate RSS XML
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Privacy Gecko Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Independent privacy research and education. Learn how websites track you, how data brokers operate, and how to protect your digital privacy.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/logo.png</url>
      <title>Privacy Gecko</title>
      <link>${baseUrl}/blog</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} Privacy Gecko</copyright>
    <managingEditor>hello@privacygecko.com (Privacy Gecko Team)</managingEditor>
    <webMaster>hello@privacygecko.com (Privacy Gecko Team)</webMaster>
    <ttl>60</ttl>
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${escapeXml(article.title)}]]></title>
      <link>${baseUrl}/blog/${article.category?.slug || 'uncategorized'}/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.category?.slug || 'uncategorized'}/${article.slug}</guid>
      <description><![CDATA[${escapeXml(article.excerpt || '')}]]></description>
      <pubDate>${article.publishedAt?.toUTCString() || new Date().toUTCString()}</pubDate>
      ${article.category ? `<category>${escapeXml(article.category.name)}</category>` : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

/**
 * Escape special XML characters
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
