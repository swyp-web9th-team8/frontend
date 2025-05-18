import type { NextConfig } from "next";
import type { Configuration } from "webpack";

// PWA 플러그인 초기화 시, 개발 환경에선 disable=true
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "placehold.co" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "k.kakaocdn.net" },
      { hostname: "example.com" },
      { hostname: "img1.kakaocdn.net" },
      { hostname: "localhost", port: "8080" },
      { hostname: "api.ploggo.co.kr" },
    ],
  },
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withPWA(nextConfig);
