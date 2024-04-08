import { getBaseUrl } from "@repo/libs/getBaseUrl";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../index";

export const serverClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
