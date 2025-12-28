/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
        remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // The port your Strapi is running on
        pathname: '/uploads/**',
      },
            {
        protocol: 'http',
        hostname: '127.0.0.1', // <--- Add this
        port: '1337',
        pathname: '/uploads/**',
      },
      
      // 👇 ADD THIS FOR PRODUCTION (Cloudinary)
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // If you deploy to production later, add your domain here too:
      // {
      //   protocol: 'https',
      //   hostname: 'your-strapi-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
};

export default nextConfig;
