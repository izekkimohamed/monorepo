import { appRouter } from "@repo/trpc";
import { createTrpcContext } from "@repo/trpc/context";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async ({ req, res }) => createTrpcContext({ req, res }),
});
