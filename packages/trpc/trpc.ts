import { initTRPC } from "@trpc/server";
import { TrpcContext } from "./context";

const t = initTRPC.context<TrpcContext>().create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
