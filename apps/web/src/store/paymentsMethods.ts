import { PaymentEnum } from "@repo/prisma/generated/prisma-client";
import { create } from "zustand";

export type TPayment = {
  mode: PaymentEnum;
  amount: number;
};

interface PaymentStore {
  paymentMethods: TPayment[];
  setPaymentMethods: (paymentMethods: TPayment[]) => void;
  resetPaymentMethods: () => void;
  handlePaymentMethods: (mode: PaymentEnum, amount: number) => void;
  totalPayments: () => number;
}

const usePaymentStore = create<PaymentStore>((set, get) => ({
  paymentMethods: [],
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  resetPaymentMethods: () => set({ paymentMethods: [] }),
  handlePaymentMethods: (mode, amount) => {
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
        };

        return { paymentMethods: [...state.paymentMethods, newPaymentMethod] };
      }
    });
  },
  totalPayments: () => get().paymentMethods.reduce((acc, curr) => acc + curr.amount, 0),
}));

export default usePaymentStore;
