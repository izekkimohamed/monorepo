import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";

export const dataRouter = router({
  createData: publicProcedure
    .input(
      z.array(
        z.object({
          libelle: z.string(),
          code: z.string(),
          price: z.number(),
          pvht: z.number(),
          quantity: z.number(),
          total: z.number(),
          date: z.coerce.date(),
          ticketNumber: z.number().optional(),
          waittingTicketsNumber: z.number().optional(),
          tva_code: z.number(),
          famille_code: z.number(),
        }),
      ),
    )
    .mutation(async ({ input }) => {
      return await prisma.data.createMany({
        data: input,
      });
    }),
  updateData: publicProcedure
    .input(
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
        ticketNumber: z.number().optional(),
        waittingTicketNumber: z.number().optional(),
        famille_code: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      if (input.id !== undefined) {
        // Update operation
        return await prisma.data.update({
          where: { id: input.id },
          data: {
            libelle: input.libelle,
            code: input.code,
            price: input.price,
            pvht: input.pvht,
            quantity: input.quantity,
            total: input.total,
            date: input.date,
            tva_code: input.tva_code,
            ticketNumber: input.ticketNumber,
            waittingTicketsNumber: input.waittingTicketNumber,
            famille_code: input.famille_code,
          },
        });
      } else {
        // Create operation
        return await prisma.data.create({
          data: {
            libelle: input.libelle,
            code: input.code,
            price: input.price,
            pvht: input.pvht,
            quantity: input.quantity,
            total: input.total,
            date: input.date,
            tva_code: input.tva_code,
            ticketNumber: input.ticketNumber,
            waittingTicketsNumber: input.waittingTicketNumber,
            famille_code: input.famille_code,
          },
        });
      }
    }),
  deleteData: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    return await prisma.data.delete({
      where: {
        id: input,
      },
    });
  }),
});
