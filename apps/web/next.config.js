const { PrismaPlugin } = require("experimental-prisma-webpack-plugin");

module.exports = {
  experimental: {
    serverActions: true,
  },
  transpilePackages: [
    "@repo/libs",
    "@repo/prisma",
    "@repo/tailwind-config",
    "@repo/trpc",
    "@repo/ui",
  ],

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};
