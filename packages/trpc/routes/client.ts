import { prisma } from "@repo/prisma";
import { ClientSchema } from "../schema";
import { publicProcedure, router } from "../trpc";

export const clientsRouter = router({
  list: publicProcedure.query(async () => {
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
  // add: publicProcedure.input(ClientSchema).mutation(async ({ input }) => {
  //   return prisma.client.create({
  //     data: input,
  //   });
  // }),
  update: publicProcedure.input(ClientSchema).mutation(async ({ input }) => {
    const total = Number(
      input.ticket.products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2),
    );
    return prisma.client.update({
      where: {
        id: input.id,
      },
      data: {
        tickets: {
          create: {
            total,
            number: input.ticket.number,
            products: {
              createMany: {
                data: input.ticket.products.map((product) => ({
                  ...product,
                  id: undefined,
                  ticketNumber: undefined,
                  waittingTicketsNumber: undefined,
                })),
              },
            },
          },
        },
      },
    });
  }),
  delete: publicProcedure.input(ClientSchema).mutation(async ({ input }) => {
    return prisma.client.delete({
      where: {
        id: input.id,
      },
    });
  }),
});
