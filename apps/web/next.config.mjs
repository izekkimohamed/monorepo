const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/prisma", "@repo/trpc", "@repo/libs"],
  webpack: (config, { isServer }) => {
    if (isServer) config.plugins = [...config.plugins, new PrismaPlugin()];
    return config;
  },
};
