import { mergeRouters } from "./trpc";
import { paymentMethods } from "./routes/paymentMethods";
import { waittingTicketsRouter } from "./routes/waittingTickets";
import { productsRouter } from "./routes/products";
import { dataRouter } from "./routes/data";
import { ticketsRouter } from "./routes/tickets";
import { clientsRouter } from "./routes/client";
import { rayonRouter } from "./routes/rayon";
export const appRouter = mergeRouters(
  paymentMethods,
  waittingTicketsRouter,
  productsRouter,
  dataRouter,
  ticketsRouter,
  clientsRouter,
  rayonRouter,
);

export type AppRouter = typeof appRouter;
