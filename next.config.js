/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // cdn으로 svg 가져오는 경우 사용
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "bleportfolio.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
