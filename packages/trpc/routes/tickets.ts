import { z } from "zod";

import { prisma } from "@repo/prisma/db";
import { publicProcedure, router } from "../trpc";

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
    return await prisma.ticket.findMany({
      where: {
        clientId: null,
      },
      orderBy: {
        number: "desc",
      },
      skip: 1,
    });
  }),
  getLastTicket: publicProcedure.query(async () => {
    return await prisma.ticket.findFirst({
      orderBy: {
        number: "desc",
      },
      where: {
        clientId: null,
      },
      take: 1,
      skip: 1,
      include: {
        products: true,
        paymentModes: true,
      },
    });
  }),
  getTicketById: publicProcedure.input(z.number()).query(async ({ input }) => {
    if (input === undefined) return;
    return await prisma.ticket.findFirst({
      where: {
        number: input,
      },
      include: {
        products: true,
        paymentModes: true,
      },
    });
  }),
});
