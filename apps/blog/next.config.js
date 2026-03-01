/** @type {import('next').NextConfig} */

const nextConfig = {
  // basePath ensures all blog URLs are under /blog
  // This provides clean URL structure: /blog, /blog/privacy, /blog/browser-protection, etc.
  basePath: '/blog',
  // No assetPrefix needed — the main site's rewrite rule (/blog/:path*) proxies
  // all requests including _next/static assets. This avoids CORS issues and
  // the basePath+assetPrefix double-prefix bug with client-side navigation.
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
