/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export', 
  basePath: '/marvin.ngalonde',
  assetPrefix: '/marvin.ngalonde/',  

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
