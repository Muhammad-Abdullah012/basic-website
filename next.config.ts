import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.smallmatek.pt',
        port: '',
        pathname: '/**/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
