import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/portfolio-ui",
  assetPrefix: "/portfolio-ui",
  images: {
    unoptimized: true,
    // domains: ['github.com'],
  },
};

export default nextConfig;
