/** @type {import('next').NextConfig} */
import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // 当环境为ANALYZE为true是开启
});

const nextConfig = {
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.test.com',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
