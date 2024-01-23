/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/resource',
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },

  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'localhost',
          },
        ],
        destination: '/site/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<admin>.*)',
          },
        ],
        destination: '/admin/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
