import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { TrpcContext } from "./context";

// const t = initTRPC.create();
const t = initTRPC.context<TrpcContext>().create({
  transformer: SuperJSON,
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
