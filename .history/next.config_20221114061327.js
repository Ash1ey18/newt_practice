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
        hostname: "images.microcms-assets.io",
        port: "",
        pathname:
          "/assets/e0293713c85449168d964f445fb37489/1142e42a06a6460c973f22edc4618ee2//**",
      },
    ],
  },
};

module.exports = nextConfig;
