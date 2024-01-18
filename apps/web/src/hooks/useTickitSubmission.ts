import { trpc } from "@repo/trpc/client";
import { TPayment } from "./usePaymentMethod";
import { Product } from "@/store";

export const useTicketSubmission = () => {
  const { mutate: createData } = trpc.createData.useMutation();
  const { mutate: updateData } = trpc.updateData.useMutation();
  const { mutate: deleteWaittingTickets } =
    trpc.deleteWaittingTickets.useMutation();
  const { mutate: updateTicket } = trpc.updateTicket.useMutation();
  const { mutate: createPaymentMode } = trpc.createPaymentMode.useMutation();

  return async (
    data: Product[],
    ticketNumber: number,
    ticketMethods: TPayment[],
  ) => {
    const t = data.filter((item) => item.waittingTicketsNumber);
    const waittingTicketsNumber = t.length > 0 && t[0].waittingTicketsNumber;

    const items = data.map(async (item) => {
      const temp = {
        ...item,
        tva_code: item.tva_code!,
        famille_code: item.famille_code!,
        ticketNumber,
        waittingTicketsNumber: undefined,
      };
      await updateData(temp);
    });

    waittingTicketsNumber && deleteWaittingTickets(waittingTicketsNumber);

    await updateTicket({
      number: ticketNumber,
      total: Number(
        data.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2),
      ),
      date: new Date(),
    });
    await createPaymentMode(ticketMethods);
  };
};
