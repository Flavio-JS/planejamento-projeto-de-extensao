import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/admin/config.yml",
        headers: [
          {
            key: "Content-Type",
            value: "text/yaml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/admin/",
        destination: "/admin/index.html",
      },
      {
        source: "/anamnese/:path*",
        destination: "https://162.241.203.142/anamnese/:path*",
      },
    ];
  },
};

export default nextConfig;
