import type { NextConfig } from "next";
import type { Configuration } from "webpack";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
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
