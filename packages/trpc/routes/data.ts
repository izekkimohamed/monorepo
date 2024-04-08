import { z } from "zod";

import { prisma } from "@repo/prisma/src";
import { DataSchema } from "../schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const dataRouter = createTRPCRouter({
  create: publicProcedure.input(z.array(DataSchema)).mutation(async ({ input }) => {
    return await prisma.data.createMany({
      data: input,
    });
  }),
  update: publicProcedure.input(DataSchema).mutation(async ({ input }) => {
    if (input.id !== undefined) {
      return await prisma.data.update({
        where: { id: input.id },
        data: input,
      });
    } else {
      return await prisma.data.create({
        data: input,
      });
    }
  }),
  delete: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    return await prisma.data.delete({
      where: {
        id: input,
      },
    });
  }),
});
