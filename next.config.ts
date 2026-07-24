import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Retired client-only "live analysis" route — thin/non-crawlable
        // content for AdSense and search engines. Everything now serves
        // from the server-rendered /analisis/[ticker] page instead.
        source: "/analysis/:ticker",
        destination: "/analisis/:ticker",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
