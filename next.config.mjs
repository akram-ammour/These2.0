// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.post.rvohealth.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "answers.childrenshospital.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
    ],
  },
  // experimental: {
  //   serverComponentsExternalPackages: ["puppeteer-core"],
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
