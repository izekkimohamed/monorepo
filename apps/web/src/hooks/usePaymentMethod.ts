import { PaymentEnum } from "@repo/prisma/client";
import { trpc } from "@repo/trpc/client";
import { Dispatch, SetStateAction, useState } from "react";

export type TPayment = {
  mode: PaymentEnum;
  amount: number;
  ticketNumber: number;
};

export function usePaymentMethod(): [
  TPayment[],
  Dispatch<SetStateAction<TPayment[]>>,
  (mode: PaymentEnum, amount: number) => void,
] {
  const [paymentMethods, setPaymentMethods] = useState<TPayment[]>([]);
  const { data: ticketNumber } = trpc.getTicket.useQuery();

  const handlePaymentMethods = (mode: PaymentEnum, amount: number) => {
    const modeExist = paymentMethods.some((item) => item.mode === mode);

    if (modeExist) {
      setPaymentMethods(
        paymentMethods.map((item) => {
          if (item.mode === mode) {
            return {
              ...item,
              amount: Number((amount + item.amount!).toFixed(2)),
            };
          }
          return item;
        }),
      );
    } else {
      setPaymentMethods([
        ...paymentMethods,
        {
          mode: mode,
          amount: amount,
          ticketNumber: ticketNumber?.number!,
        },
      ]);
    }
  };

  return [paymentMethods, setPaymentMethods, handlePaymentMethods];
}
