import { prisma } from "@repo/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const statsRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        from: z.date().optional(),
        to: z.date().optional(),
      }),
    )
    .query(async ({ input }) => {
      const tickets = await prisma.ticket.findMany({
        where: {
          createdAt: {
            gte: input.from!,
            lte: input.to!,
          },
          clientId: null,
          total: {
            gt: 0,
          },
        },
        select: {
          total: true,
          paymentModes: true,
        },
      });
      return tickets;
    }),
});
