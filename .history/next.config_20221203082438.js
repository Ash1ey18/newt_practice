/** @type {import('next').NextConfig} */
// const nextConfig = {

// };

module.exports = {
  reaCVctStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/assets/**",
      },
    ],
  },
};
