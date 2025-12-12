/** @type {import('next').NextConfig} */
const nextConfig = {
  // Asset prefix ensures JS/CSS load from blog subdomain when accessed via /blog rewrite
  assetPrefix: process.env.ASSET_PREFIX || 'https://blog.stage.privacygecko.com',
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
};

module.exports = nextConfig;
