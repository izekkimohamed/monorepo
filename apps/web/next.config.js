/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/prisma"],
  // webpack: (config, { isServer }) => {
  //   if (isServer)
  //     config.plugins = [...config.plugins, new PrismaPlugin(process.env.DATABASE_URL)];
  //   return config;
  // },
};
