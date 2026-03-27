import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // removes next js button
  devIndicators: false,
  images: {
    domains: ["lh3.googleusercontent.com", "mn-la.com", "cdn.shopify.com"],
  },

  /* config options here */
};

export default nextConfig;
