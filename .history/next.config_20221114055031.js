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
        hostname: "microcms.io",
        port: "",
        pathname: "/newt-blog-demo",
      },
    ],
  },
};

module.exports = nextConfig;
