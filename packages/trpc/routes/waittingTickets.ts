import { z } from "zod";

import { prisma } from "@repo/prisma/src";
import { DataSchema } from "../schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const waittingTicketsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ products: z.array(DataSchema), total: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const ticket = await prisma.waittingTickets.create({
        data: {
          total: input.total,
          products: {
            createMany: {
              data: input.products.map((product) => ({
                ...product,
                ticketNumber: null,
                waittingTicketsNumber: undefined,
              })),
            },
          },
        },
      });
      return ticket;
    }),
  list: publicProcedure.query(async () => {
    return await prisma.waittingTickets.findMany({
      select: {
        products: true,
        total: true,
        number: true,
      },
    });
  }),
  update: publicProcedure
    .input(z.object({ products: z.array(DataSchema), total: z.number() }))
    .mutation(async ({ input }) => {
      const waittingTicketsNumber = input.products[0].waittingTicketsNumber!;

      const updatedProducts = input.products.filter((product) => product.id);
      const createdProducts = input.products.filter((product) => !product.id);

      await prisma.waittingTickets.update({
        where: { number: waittingTicketsNumber },
        data: {
          total: input.total,
          products: {
            updateMany: updatedProducts.map((product) => ({
              where: { id: product.id },
              data: {
                total: product.total,
                total_pvht: product.total_pvht,
                quantity: product.quantity,
              },
            })),
            createMany: {
              data: createdProducts.map((product) => ({
                ...product,
                ticketNumber: null,
                waittingTicketsNumber: undefined,
              })),
            },
          },
        },
      });
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    return await prisma.waittingTickets.delete({
      where: {
        number: input,
        products: {
          every: {
            waittingTicketsNumber: input,
          },
        },
      },
    });
  }),
});
