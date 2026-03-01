/** @type {import('next').NextConfig} */

// Determine asset prefix based on environment
// When accessed via /blog rewrite, assets must load from blog subdomain
function getAssetPrefix() {
  // Use explicit ASSET_PREFIX if set
  if (process.env.ASSET_PREFIX) {
    return process.env.ASSET_PREFIX;
  }

  // Auto-detect for Vercel deployments
  // Must include /blog to match basePath, so assets resolve to /blog/_next/static/...
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://blog.privacygecko.com/blog';
  }
  if (process.env.VERCEL_ENV === 'preview') {
    return 'https://blog.stage.privacygecko.com/blog';
  }

  // Local development - no prefix needed
  return undefined;
}

const nextConfig = {
  // basePath ensures all blog URLs are under /blog
  // This provides clean URL structure: /blog, /blog/privacy, /blog/browser-protection, etc.
  basePath: '/blog',
  // Asset prefix ensures JS/CSS load from blog subdomain when accessed via /blog rewrite
  assetPrefix: getAssetPrefix(),
  transpilePackages: ['@privacygecko/ui', '@privacygecko/database'],

  // Image optimization for Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.privacygecko.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-ee83597c43b94030b8793a2e4e9d013a.r2.dev',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Enable compression
  compress: true,

  // Optimize package imports for smaller bundles
  experimental: {
    optimizePackageImports: ['lucide-react', '@privacygecko/ui'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      // CORS headers for assets loaded cross-origin via /blog rewrite proxy
      // Note: basePath auto-prefixes, so /_next/:path* matches /blog/_next/:path*
      {
        source: '/_next/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET' },
        ],
      },
    ];
  },
  // 301 redirects for legacy blog posts (preserves SEO)
  // Note: With basePath: '/blog', these sources/destinations are relative to /blog
  // e.g., source: '/old-slug' actually matches /blog/old-slug
  async redirects() {
    return [
      // Legacy redirects — point old slugs to current category structure
      {
        source: '/why-privacy-tools-matter-2025',
        destination: '/privacy/why-privacy-tools-matter-2025',
        permanent: true,
      },
      {
        source: '/open-source-privacy-tools',
        destination: '/privacy/open-source-privacy-tools',
        permanent: true,
      },
      {
        source: '/getting-started-geckoadvisor',
        destination: '/privacy/getting-started-geckoadvisor',
        permanent: true,
      },
      {
        source: '/complete-guide-privacy-tools-2025',
        destination: '/privacy/complete-guide-privacy-tools-2025',
        permanent: true,
      },
      {
        source: '/local-ai-privacy-protection',
        destination: '/privacy/local-ai-privacy-protection',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
