import { getBaseUrl } from "@repo/libs/getBaseUrl";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";
import { AppRouter } from "../index";

// export const serverClient = appRouter.createCaller({
//   links: [
//     httpBatchLink({
//       url: `${getBaseUrl}/api/trpc`,
//     }),
//   ],
// });
export const serverClient = createTRPCProxyClient<AppRouter>({
  transformer: SuperJSON,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
