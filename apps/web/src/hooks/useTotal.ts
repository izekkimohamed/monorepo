import { useStore, resetNamPad, setRemaining } from "@/store";

import { useToast } from "@repo/ui/src/components/ui/use-toast";
import { PaymentEnum } from "@repo/prisma/client";

import usePaymentStore from "@/store/paymentsMethods";

export const useTotal = () => {
  const products = useStore.getState().products;
  const namPad = useStore.getState().namPad;
  const { handlePaymentMethods } = usePaymentStore();

  const { toast } = useToast();

  return async (
    remaining: number,
    setIsTotal: (isTotal: boolean) => void,
    ticketNumber: number,
    mode: PaymentEnum,
  ) => {
    if (products.length < 1) {
      toast({
        title: "Error",
        description: "No data found",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }

    const total = products.reduce((acc, curr) => acc + +curr.total, 0);
    if (namPad === "0" || namPad === ".") {
      resetNamPad();
      return;
    }
    const amount = Number(namPad);

    if (amount === 0 && !remaining) {
      let t = products.reduce((acc, curr) => acc + +curr.total, 0);
      handlePaymentMethods(mode, t, ticketNumber);

      toast({
        title: "Change",
        description: `${total.toFixed(2)} $`,
        variant: "default",
        duration: 1000,
      });

      setIsTotal(true);
      resetNamPad();

      return;
    }
    if (remaining > 0) {
      if (remaining > amount && amount > 0) {
        handlePaymentMethods(mode, amount, ticketNumber);
        resetNamPad();
        return;
      } else {
        handlePaymentMethods(mode, Number(remaining.toFixed(2)), ticketNumber);
        resetNamPad();
        toast({
          title: "Change",
          description: `${(amount - remaining).toFixed(2)} $`,
          variant: "default",
          duration: 1000,
        });

        setIsTotal(true);
        return;
      }
    }

    if (amount < total) {
      handlePaymentMethods(mode, amount, ticketNumber);
      resetNamPad();
      return;
    }
    if (amount >= total) {
      toast({
        title: "Change",
        description: `${(amount - total).toFixed(2)} $`,
        variant: "default",
        duration: 1000,
      });
      resetNamPad();
      setIsTotal(true);
      return;
    }
  };
};
