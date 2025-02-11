import type { NextConfig } from 'next';

const assetPrefix = process.env.assetPrefix ? process.env.AssetPrefix : '';
const basePath = process.env.basePath ? process.env.BasePath : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;