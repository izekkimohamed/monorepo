import { appRouter } from "@repo/trpc/app";
import { createTrpcContext } from "@repo/trpc/context";
import * as trpcNext from "@trpc/server/adapters/next";

export const config = {
  maxDuration: 10,
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async ({ req, res }) => createTrpcContext({ req, res }),
});
