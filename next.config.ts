import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.smallmatek.pt',
      },
    ],
  }
};

export default nextConfig;
