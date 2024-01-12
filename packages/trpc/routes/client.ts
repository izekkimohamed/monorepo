import { ZodTypeAny, z } from "zod";

import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";

export const clientsRouter = router({
  listClients: publicProcedure.query(async () => {
    return prisma.client.findMany({
      include: {
        tickets: {
          include: {
            products: true,
          },
        },
      },
    });
  }),
  addToClient: publicProcedure
    .input(
      z.object({
        clientId: z.number(),
        ticketNumber: z.number(),
        data: z.array(
          z.object({
            id: z.number().optional(),
            libelle: z.string(),
            code: z.string(),
            price: z.number(),
            pvht: z.number(),
            quantity: z.number(),
            total: z.number(),
            date: z.coerce.date(),
            tva_code: z.number(),
            ticketNumber: z.number(),
            waittingTicketsNumber: z.number().nullable().optional(),
            famille_code: z.number(),
          }),
        ),
      }),
    )
    .mutation(async ({ input }) => {
      const updateTicket = await prisma.ticket.update({
        where: { number: input.ticketNumber },
        data: {
          total: Number(
            input.data.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2),
          ),
          clientId: input.clientId,
        },
      });

      // create or update data depend on id
      const createProducts = await Promise.all(
        input.data.map(async (product) => {
          if (product.id) {
            const deleteWaittingList = await prisma.waittingTickets.delete({
              where: { number: product.waittingTicketsNumber! },
            });
            return await prisma.data.update({
              where: { id: product.id },
              data: {
                ...product,
                waittingTicketsNumber: null,
              },
            });
          } else {
            return await prisma.data.create({ data: product });
          }
        }),
      );

      return { updateTicket, createProducts };
    }),
});
