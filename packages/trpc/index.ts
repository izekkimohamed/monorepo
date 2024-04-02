import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "./app";
import { appRouter } from "./app";
import { createCallerFactory, createTRPCContext } from "./trpc";

const createCaller = createCallerFactory(appRouter);

type RouterInputs = inferRouterInputs<AppRouter>;

type RouterOutputs = inferRouterOutputs<AppRouter>;

export { appRouter, createCaller, createTRPCContext };
export type { AppRouter, RouterInputs, RouterOutputs };
