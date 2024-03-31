import { clientsRouter } from "./routes/client";
import { dataRouter } from "./routes/data";
import { paymentMethods } from "./routes/paymentMethods";
import { productsRouter } from "./routes/products";
import { ticketsRouter } from "./routes/tickets";
import { waittingTicketsRouter } from "./routes/waittingTickets";
import { router } from "./trpc";
export const appRouter = router({
  api: router({
    product: productsRouter,
    payment: paymentMethods,
    waitting: waittingTicketsRouter,
    data: dataRouter,
    ticket: ticketsRouter,
    client: clientsRouter,
  }),
});

export type AppRouter = typeof appRouter;
