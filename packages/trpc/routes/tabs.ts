import { z } from "zod";
import { ProductSchema, TabsSchema } from "../schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const tabsRoutes = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.tabs.findMany({
      include: {
        products: true,
      },
    });
  }),
  create: publicProcedure.input(TabsSchema).mutation(async ({ ctx, input }) => {
    return ctx.prisma.tabs.create({
      data: {
        name: input.name,
      },
    });
  }),
  addToTab: publicProcedure
    .input(
      z.object({
        id: z.number(),
        products: z.array(ProductSchema),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.tabs.update({
        where: {
          id: input.id,
        },
        data: {
          products: {
            connect: input.products.map((product) => ({
              id: product.id,
            })),
          },
        },
      });
    }),
  removeFromTab: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: {
          tabsId: null,
        },
      });
    }),
});
