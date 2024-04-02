import { prisma } from "@repo/prisma";
import { z } from "zod";
import { PaymentModeSchema } from "../schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const paymentMethods = createTRPCRouter({
  create: publicProcedure
    .input(z.array(PaymentModeSchema))
    .mutation(async ({ input }) => {
      return await prisma.paymentMode.createMany({
        data: input,
      });
    }),
});
