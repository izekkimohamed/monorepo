import { httpBatchLink } from "@trpc/client";
import { appRouter } from "../app";
import { getBaseUrl } from "@repo/libs/getBaseUrl";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl}/api/trpc`,
    }),
  ],
});
