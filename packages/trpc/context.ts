import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createTrpcContext = async ({ req, res }: CreateNextContextOptions) => {
  return {
    req,
  };
};

export type TrpcContext = Awaited<ReturnType<typeof createTrpcContext>>;
