/** @type {import('next').NextConfig} */
const nextConfig = {
  // Asset prefix ensures JS/CSS load from blog subdomain when accessed via /blog rewrite
  // Only set in production (via ASSET_PREFIX env var)
  assetPrefix: process.env.ASSET_PREFIX || undefined,
  transpilePackages: ['@privacygecko/ui', '@privacygecko/database'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.privacygecko.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
  // Old URL format: /slug → New URL format: /category/slug
  async redirects() {
    return [
      // Product Updates category
      {
        source: '/geckocore-protocol-whitepaper-v1-launch',
        destination: '/product-updates/geckocore-protocol-whitepaper-v1-launch',
        permanent: true,
      },
      {
        source: '/introducing-geckocore-protocol',
        destination: '/product-updates/introducing-geckocore-protocol',
        permanent: true,
      },
      {
        source: '/introducing-privacy-gecko',
        destination: '/product-updates/introducing-privacy-gecko',
        permanent: true,
      },
      // Privacy Tips category
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
      // Tutorials category
      {
        source: '/getting-started-geckoadvisor',
        destination: '/tutorials/getting-started-geckoadvisor',
        permanent: true,
      },
      // Privacy Guide category
      {
        source: '/complete-guide-privacy-tools-2025',
        destination: '/privacy/complete-guide-privacy-tools-2025',
        permanent: true,
      },
      // Crypto Privacy category
      {
        source: '/crypto-trader-privacy-tools',
        destination: '/crypto-safety/crypto-trader-privacy-tools',
        permanent: true,
      },
      // Token & Community category
      {
        source: '/privacy-memecoins-explained',
        destination: '/crypto-safety/privacy-memecoins-explained',
        permanent: true,
      },
      // AI & Privacy category
      {
        source: '/local-ai-privacy-protection',
        destination: '/privacy/local-ai-privacy-protection',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
