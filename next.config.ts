/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch potential issues
  swcMinify: true,       // Uses the faster SWC compiler for minification
  images: {
    domains: [
      "localhost", 
      "res.cloudinary.com", 
      "avatars.githubusercontent.com"
      // add any other domains you use for <Image src="" />
    ],
  },
};

module.exports = nextConfig;
