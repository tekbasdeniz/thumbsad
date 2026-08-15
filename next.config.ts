import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/news',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/news/:slug*',
        destination: '/insights/:slug*',
        permanent: true,
      },
      {
        source: '/en/news',
        destination: '/en/insights',
        permanent: true,
      },
      {
        source: '/en/news/:slug*',
        destination: '/en/insights/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// Cache temizligi sonrasi tetikleme
