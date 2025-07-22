/** @type {import('next').NextConfig} */

const repo = 'marvin.ngalonde'; 

const nextConfig = {
  output: 'export', 

  basePath: `/${repo}`,         
  assetPrefix: `/${repo}/`,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
