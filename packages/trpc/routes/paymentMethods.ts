import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";
import { PaymentEnum } from "@repo/prisma/client";

export const paymentMethods = router({
  createPaymentMode: publicProcedure
    .input(
      z.array(
        z.object({
          mode: z.nativeEnum(PaymentEnum),
          amount: z.number(),
          ticketNumber: z.number(),
        }),
      ),
    )
    .mutation(async ({ input }) => {
      return await prisma.paymentMode.createMany({
        data: input,
      });
    }),
});
