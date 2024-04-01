import { appRouter } from "@repo/trpc/app";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
