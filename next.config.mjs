/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
     SERVER: process.env.SERVER,
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'admin.cleanroomac.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all external URLs
      },
    ],
  },
};

export default nextConfig;


