const { PrismaPlugin } = require("experimental-prisma-webpack-plugin");

module.exports = {
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    serverActions: {
      bodySizeLimit: "50mb",
    },
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
