/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"], // Update with your allowed image domains
  },
  experimental: {
    appDir: true, // Enable experimental features if needed
  },
};

export default nextConfig;
