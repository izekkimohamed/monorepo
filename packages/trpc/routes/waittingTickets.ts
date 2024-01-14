import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";

export const waittingTicketsRouter = router({
  createWaittingTickets: publicProcedure
    .input(
      z.object({
        total: z.number(),
        products: z.array(
          z.object({
            libelle: z.string(),
            code: z.string(),
            price: z.number(),
            pvht: z.number(),
            quantity: z.number(),
            total: z.number(),
            date: z.coerce.date(),
            tva_code: z.number().nullable(),
            famille_code: z.number().nullable(),
          }),
        ),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const ticket = await prisma.waittingTickets.create({
        data: {
          total: input.total,
          products: {
            createMany: {
              data: input.products,
            },
          },
        },
        include: {
          products: true,
        },
      });
      return ticket;
    }),
  getWaittingTickets: publicProcedure.query(async () => {
    return await prisma.waittingTickets.findMany({
      select: {
        products: true,
        total: true,
        number: true,
      },
    });
  }),
  updateWaittingTickets: publicProcedure
    .input(
      z.object({
        number: z.number(),
        total: z.number(),
        products: z.array(
          z.object({
            id: z.number(),
            libelle: z.string(),
            code: z.string(),
            price: z.number(),
            pvht: z.number(),
            quantity: z.number(),
            total: z.number(),
            date: z.coerce.date(),
            tva_code: z.number(),
            waittingTicketsNumber: z.number().optional(),
            famille_code: z.number(),
          }),
        ),
      }),
    )
    .mutation(async ({ input }) => {
      const newProducts = input.products.filter((product) => !product.id);
      return await prisma.waittingTickets.update({
        where: { number: input.number },
        data: {
          total: input.total,
          products: {
            createMany: {
              data: newProducts,
            },
            updateMany: input.products
              .filter((product) => {
                return product.id !== undefined;
              })
              .map((product) => {
                return {
                  where: {
                    id: product.id,
                  },
                  data: {
                    quantity: product.quantity,
                    total: product.total,
                  },
                };
              }),
            deleteMany: {
              NOT: {
                id: {
                  in: input.products
                    .map((product) => product.id)
                    .filter(Boolean), // Filter out undefined IDs
                },
              },
            },
          },
        },
      });
    }),
  deleteWaittingTickets: publicProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      return await prisma.waittingTickets.delete({
        where: {
          number: input,
        },
        include: {
          products: true,
        },
      });
    }),
});
