import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";

export const ticketsRouter = router({
  createTicket: publicProcedure.mutation(async () => {
    const ticket = await prisma.ticket.create({
      data: {
        date: new Date(),
        total: 0,
      },
    });
    return ticket;
  }),
  updateTicket: publicProcedure
    .input(
      z.object({
        number: z.number(),
        date: z.coerce.date(),
        total: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.ticket.update({
        where: {
          number: input.number,
        },
        data: {
          date: input.date!,
          total: input.total,
        },
      });
    }),
  getTicket: publicProcedure.query(async () => {
    return await prisma.ticket.findFirst({
      orderBy: {
        number: "desc",
      },
    });
  }),
  listTickets: publicProcedure.query(async () => {
    return await prisma.paymentMode.findMany({
      include: {
        Ticket: true,
      },
    });
  }),
});
