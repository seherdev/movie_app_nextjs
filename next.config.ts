// next.config.ts

const nextConfig = {
  env: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default nextConfig;

/* @type {import('next').NextConfig} */


module.exports = nextConfig
