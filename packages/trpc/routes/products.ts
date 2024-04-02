import { z } from "zod";

import { prisma } from "@repo/prisma";
import { ProductSchema } from "../schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const productsRouter = createTRPCRouter({
  list: publicProcedure.query(async () => {
    return await prisma.product.findMany();
  }),
  scan: publicProcedure
    .input(
      z.object({
        code: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.product.findFirst({
        where: {
          code: input.code,
        },
      });
    }),
  update: publicProcedure.input(ProductSchema).mutation(async ({ input }) => {
    return await prisma.product.update({
      where: {
        id: input.id,
      },
      data: {
        libelle: input.libelle!,
        price: input.price!,
        tva_code: input.tva_code!,
        rayon_code: input.rayon_code!,
        famille_code: input.famille_code!,
        pvht: input.pvht!,
      },
    });
  }),
  listAll: publicProcedure.query(async () => {
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
