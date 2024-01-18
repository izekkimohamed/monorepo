import { PaymentEnum } from "@repo/prisma/client";
import { create } from "zustand";

export type TPayment = {
  mode: PaymentEnum;
  amount: number;
  ticketNumber: number;
};

interface PaymentStore {
  paymentMethods: TPayment[];
  setPaymentMethods: (paymentMethods: TPayment[]) => void;
  handlePaymentMethods: (
    mode: PaymentEnum,
    amount: number,
    ticketNumber: number,
  ) => void;
}

const usePaymentStore = create<PaymentStore>((set) => ({
  paymentMethods: [],
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  handlePaymentMethods: (mode, amount, ticketNumber) => {
    set((state) => {
      const modeExist = state.paymentMethods.some((item) => item.mode === mode);

      if (modeExist) {
        const updatedPaymentMethods = state.paymentMethods.map((item) => {
          if (item.mode === mode) {
            return {
              ...item,
              amount: Number((amount + item.amount!).toFixed(2)),
            };
          }
          return item;
        });

        return { paymentMethods: updatedPaymentMethods };
      } else {
        const newPaymentMethod = {
          mode: mode,
          amount: amount,
          ticketNumber,
        };

        return { paymentMethods: [...state.paymentMethods, newPaymentMethod] };
      }
    });
  },
}));

export default usePaymentStore;
