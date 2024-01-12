import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../app";

export const trpc = createTRPCReact<AppRouter>({});
