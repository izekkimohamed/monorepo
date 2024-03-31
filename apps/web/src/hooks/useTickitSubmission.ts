import { Product } from "@/store";
import { PaymentEnum } from "@repo/prisma/client";
import { trpc } from "@repo/trpc/client";

export type TPayment = {
  mode: PaymentEnum;
  amount: number;
  ticketNumber: number;
};

export const useTicketSubmission = () => {
  return async (data: Product[], ticketMethods: TPayment[]) => {
    const { mutate: createTicket } = trpc.api.ticket.create.useMutation();
    const waitedTicket = data.some((product) => product.waittingTicketsNumber);

    createTicket({
      products: data,
      paymentModes: ticketMethods,
    });
  };
};
