const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

module.exports = {
  transpilePackages: [
    "@repo/libs",
    "@repo/prisma",
    "@repo/tailwind-config",
    "@repo/trpc",
    "@repo/ui",
  ],
};
