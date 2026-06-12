import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // REQUIRED for static export
  },

  trailingSlash: true, // avoids 404 on refresh
};

export default nextConfig;
