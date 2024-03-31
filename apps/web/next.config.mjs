// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   transpilePackages: ["@repo/ui"],
// };

import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

// IMPORTANT: Initialize it here before to avoid race condition!!!
const prismaPlugin = new PrismaPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  webpack: (config, { isServer }) => {
    if (isServer) config.plugins = [...config.plugins, prismaPlugin];
    return config;
  },
  // ...
};
