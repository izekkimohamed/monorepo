import { prisma } from "@repo/prisma";
import { z } from "zod";
import { PaymentModeSchema } from "../schema";
import { publicProcedure, router } from "../trpc";

export const paymentMethods = router({
  create: publicProcedure
    .input(z.array(PaymentModeSchema))
    .mutation(async ({ input }) => {
      return await prisma.paymentMode.createMany({
        data: input,
      });
    }),
});
