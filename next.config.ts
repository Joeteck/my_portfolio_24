/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {}, // disable Turbopack's special handling
    },
  },
};

module.exports = nextConfig;