/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        // /**는 utfs.io에서 제공하는 모든 이미지 경로를 허용함
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
