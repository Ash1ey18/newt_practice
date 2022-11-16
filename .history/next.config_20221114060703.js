/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "microcms.assets.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
