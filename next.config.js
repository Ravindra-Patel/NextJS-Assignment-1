/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.gamespot.com",
      "images.indianexpress.com",
      "i.guim.co.uk",
      "i.kinja-img.com",
    ],
  },
};

module.exports = nextConfig;
