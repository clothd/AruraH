import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        hostname: "images.unsplash.com", 
        protocol: "https"
      },
      {
        hostname: "media.licdn.com",
        protocol: "https"
      },
      {
        hostname: "avatars.githubusercontent.com", 
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
