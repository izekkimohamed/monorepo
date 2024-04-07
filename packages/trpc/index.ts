import { clientsRouter } from "./routes/client";
import { dataRouter } from "./routes/data";
import { paymentMethods } from "./routes/paymentMethods";
import { productsRouter } from "./routes/products";
import { statsRouter } from "./routes/stats";
import { ticketsRouter } from "./routes/tickets";
import { waittingTicketsRouter } from "./routes/waittingTickets";
import { createTRPCRouter as router } from "./trpc";
export const appRouter = router({
  api: router({
    product: productsRouter,
    payment: paymentMethods,
    waitting: waittingTicketsRouter,
    data: dataRouter,
    ticket: ticketsRouter,
    client: clientsRouter,
    stats: statsRouter,
  }),
});

export type AppRouter = typeof appRouter;
