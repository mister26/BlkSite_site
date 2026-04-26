import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Powered-By",
            value: "caffeine and spite",
          },
          {
            key: "X-Operator",
            value: "present",
          },
          {
            key: "X-Honeypot",
            value: "not really",
          },
          {
            key: "X-Note",
            value: "nice headers btw",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
