import * as z from "zod";

import { publicProcedure, router } from "../trpc";
import { prisma } from "@repo/prisma/db";

export const rayonRouter = router({
  listRayons: publicProcedure.query(async () => {
    const rayons = await prisma.rayon.findMany();

    return rayons;
  }),
  createRayonTab: publicProcedure
    .input(
      z.object({
        libelle: z.string(),
        products: z.array(z.string()).optional(),
        code: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const rayon = await prisma.tabsRayon.create({
        data: input,
      });
      return rayon;
    }),
  updateRayonTab: publicProcedure
    .input(
      z.object({
        id: z.number(),
        products: z.array(z.string()),
      }),
    )
    .mutation(async ({ input }) => {
      const rayon = await prisma.tabsRayon.findUnique({
        where: {
          id: input.id,
        },
      });

      const filteredProducts = input.products.filter((product) => {
        return !rayon?.products.includes(product);
      });

      const temp = filteredProducts.concat(rayon?.products!);

      const updatedRayon = await prisma.tabsRayon.updateMany({
        where: {
          id: input.id,
        },
        data: {
          products: temp,
        },
      });

      return updatedRayon;
    }),
  listRayonTab: publicProcedure.query(async () => {
    const rayons = await prisma.tabsRayon.findMany();
    return rayons;
  }),
  getRayonProducts: publicProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      return await prisma.rayon.findUnique({
        where: {
          code: input,
        },
        select: {
          products: true,
        },
      });
    }),
});
