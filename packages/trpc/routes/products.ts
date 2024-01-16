import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";

export const productsRouter = router({
  listProducts: publicProcedure.query(async () => {
    return await prisma.products.findMany();
  }),
  scannedProduct: publicProcedure
    .input(
      z.object({
        code: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.products.findFirst({
        where: {
          code: input.code,
        },
      });
    }),
  updateProduct: publicProcedure
    .input(
      z.object({
        id: z.number(),
        libelle: z.string(),
        pvttc: z.number(),
        pvht: z.number(),
        tva_code: z.number(),
        famille_code: z.number(),
        rayon_code: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.products.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),
  listProductsSettings: publicProcedure.query(async () => {
    const rayons = await prisma.rayon.findMany();
    const familles = await prisma.famille.findMany();
    const tva = await prisma.tva.findMany();

    return {
      rayons,
      familles,
      tva,
    };
  }),
});
