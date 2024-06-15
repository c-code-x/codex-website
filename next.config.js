/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'user-images.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'media.geeksforgeeks.org',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  