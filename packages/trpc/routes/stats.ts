import { prisma } from "@repo/prisma/src";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const statsRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        from: z.string().optional(),
        to: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const tickets = await prisma.ticket.findMany({
        where: {
          createdAt: {
            gte: new Date(input.from!),
            lte: new Date(input.to!),
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
