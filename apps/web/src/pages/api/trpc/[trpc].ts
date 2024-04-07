import { appRouter } from "@repo/trpc";
import { createTrpcContext } from "@repo/trpc/context";
import * as trpcNext from "@trpc/server/adapters/next";

// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// const handler = (req: Request) =>
//   // trpcNext.createNextApiHandler({
//   //   router: appRouter,
//   //   createContext: async ({ req, res }) => createTrpcContext({ req, res }),
//   // });
//   fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     router: appRouter,
//     createContext: ({ req, res, prisma }) => ({ req, res, prisma }),
//     // createContext: async ({ req, res }) => createTrpcContext({ req, res }),
//   });

// export { handler as GET, handler as POST };

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async ({ req, res }) => createTrpcContext({ req, res }),
});
