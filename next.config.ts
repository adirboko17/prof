import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "TDM-Reservation", value: "0" },
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby"; type="text/plain", </llms-full.txt>; rel="describedby"; type="text/plain"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
