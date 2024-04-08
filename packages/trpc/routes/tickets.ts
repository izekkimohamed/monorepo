import { z } from "zod";

import { prisma } from "@repo/prisma/src";
import { DataSchema, PaymentModeSchema } from "../schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const ticketsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        clientId: z.number().optional(),
        products: z.array(DataSchema),
        paymentModes: z.array(PaymentModeSchema).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const total = Number(
        input.products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2),
      );
      return await prisma.ticket.create({
        data: {
          total,
          clientId: input.clientId,
          products: {
            createMany: {
              data: input.products.map((product) => ({
                ...product,
                id: undefined,
                ticketNumber: product.ticketNumber || undefined,
                waittingTicketsNumber: product.waittingTicketsNumber || undefined,
              })),
            },
          },
          paymentModes: {
            createMany: {
              data: input.paymentModes!.map((product) => ({
                ...product,
                ticketNumber: undefined,
              })),
            },
          },
        },
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        ticketNumber: z.number(),
        clientId: z.number().optional(),

        products: z.array(DataSchema),
        paymentModes: z.array(PaymentModeSchema),
      }),
    )
    .mutation(async ({ input }) => {
      const total = Number(
        input.products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2),
      );
      const waitedProducts = input.products.filter(
        (product) => product.waittingTicketsNumber,
      );
      const newProducts = input.products.filter(
        (product) => !product.waittingTicketsNumber,
      );

      return await prisma.ticket.update({
        where: {
          number: input.ticketNumber,
        },
        data: {
          total,
          clientId: input.clientId,
          products: {
            updateMany: waitedProducts.map((product) => ({
              where: { id: product.id },
              data: {
                total: product.total,
                total_pvht: product.total_pvht,
                quantity: product.quantity,
              },
            })),
            createMany: {
              data: newProducts.map((product) => ({
                ...product,
                ticketNumber: null,
                waittingTicketsNumber: undefined,
              })),
            },
          },
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
  list: publicProcedure.query(async () => {
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
