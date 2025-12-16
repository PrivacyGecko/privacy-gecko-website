import {
  getAllPublishedArticles,
  getOrphanArticles,
  getUnderlinkedArticles,
  getAllPillars,
  getAllCategories,
} from '@privacygecko/database'
import {
  validateApiKey,
  unauthorizedResponse,
  successResponse,
  errorResponse,
} from '../middleware'

/**
 * GET /api/admin/seo-audit
 * Returns comprehensive SEO health check data
 */
export async function GET(request: Request) {
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  try {
    const [articles, orphans, underlinked, pillars, categories] =
      await Promise.all([
        getAllPublishedArticles(),
        getOrphanArticles(),
        getUnderlinkedArticles(3),
        getAllPillars(),
        getAllCategories(),
      ])

    // Check for missing meta
    const missingMeta = articles.filter(
      (a) =>
        !a.metaTitle ||
        !a.metaDescription ||
        (a.metaTitle && a.metaTitle.length > 60) ||
        (a.metaDescription && a.metaDescription.length > 160)
    )

    // Check for thin content (less than 1200 words)
    const thinContent = articles.filter((a) => !a.wordCount || a.wordCount < 1200)

    // Check for low quality scores
    const lowQuality = articles.filter(
      (a) => !a.overallScore || a.overallScore < 7
    )

    // Check for high spam scores
    const highSpam = articles.filter((a) => a.spamScore && a.spamScore > 3)

    // Check for low originality
    const lowOriginality = articles.filter(
      (a) => !a.originalityScore || a.originalityScore < 6
    )

    // Pillar coverage analysis
    const pillarCoverage = pillars.map((pillar) => {
      const pillarArticles = articles.filter((a) => a.pillarId === pillar.id)
      return {
        pillar: pillar.title,
        slug: pillar.slug,
        articleCount: pillarArticles.length,
        hasContent: pillar.content ? pillar.content.length > 2000 : false,
        status: pillar.status,
      }
    })

    // Category distribution
    const categoryDistribution = categories.map((category) => {
      const categoryArticles = articles.filter(
        (a) => a.categoryId === category.id
      )
      return {
        name: category.name,
        slug: category.slug,
        articleCount: categoryArticles.length,
      }
    })

    // Calculate overall health score (0-100)
    const totalIssues =
      orphans.length +
      underlinked.length +
      missingMeta.length +
      thinContent.length +
      lowQuality.length +
      highSpam.length +
      lowOriginality.length

    const maxPossibleIssues = articles.length * 7 // 7 checks per article
    const healthScore =
      maxPossibleIssues > 0
        ? Math.round(((maxPossibleIssues - totalIssues) / maxPossibleIssues) * 100)
        : 100

    return successResponse({
      summary: {
        totalArticles: articles.length,
        totalPillars: pillars.length,
        totalCategories: categories.length,
        healthScore,
        issues: {
          orphanArticles: orphans.length,
          underlinkedArticles: underlinked.length,
          missingMeta: missingMeta.length,
          thinContent: thinContent.length,
          lowQuality: lowQuality.length,
          highSpam: highSpam.length,
          lowOriginality: lowOriginality.length,
        },
      },
      details: {
        orphans: orphans.map((a) => ({
          id: a.id,
          title: a.title,
          slug: a.slug,
        })),
        underlinked: underlinked.map((a) => ({
          id: a.id,
          title: a.title,
          linkCount: a.linkCount,
        })),
        missingMeta: missingMeta.map((a) => ({
          id: a.id,
          title: a.title,
          metaTitleLength: a.metaTitle?.length || 0,
          metaDescriptionLength: a.metaDescription?.length || 0,
        })),
        thinContent: thinContent.map((a) => ({
          id: a.id,
          title: a.title,
          wordCount: a.wordCount || 0,
        })),
        lowQuality: lowQuality.map((a) => ({
          id: a.id,
          title: a.title,
          overallScore: a.overallScore || 0,
        })),
        highSpam: highSpam.map((a) => ({
          id: a.id,
          title: a.title,
          spamScore: a.spamScore || 0,
        })),
        lowOriginality: lowOriginality.map((a) => ({
          id: a.id,
          title: a.title,
          originalityScore: a.originalityScore || 0,
        })),
      },
      pillarCoverage,
      categoryDistribution,
    })
  } catch (error) {
    console.error('Error running SEO audit:', error)
    return errorResponse('Failed to run SEO audit', 500)
  }
}
