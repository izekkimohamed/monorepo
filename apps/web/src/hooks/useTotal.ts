import { useStore, resetNamPad } from "@/store";

import { useToast } from "@repo/ui/src/components/ui/use-toast";
import { PaymentEnum } from "@repo/prisma/client";

export const useTotal = () => {
  const products = useStore.getState().products;
  const namPad = useStore.getState().namPad;

  const { toast } = useToast();

  return async (
    remaining: number,
    setIsTotal: (isTotal: boolean) => void,

    mode: PaymentEnum,
    handlePaymentMethods: (mode: PaymentEnum, amount: number) => void,
  ) => {
    if (products.length < 1) {
      toast({
        title: "Error",
        description: "No data found",
        variant: "destructive",
      });
      return;
    }

    const total = products.reduce((acc, curr) => acc + +curr.total, 0);
    if (namPad === "0" || namPad === ".") {
      resetNamPad();
      return;
    }
    const amount = namPad !== "" ? Number(namPad) : 0;
    if (amount === 0 && !remaining) {
      let t = products.reduce((acc, curr) => acc + +curr.total, 0);
      handlePaymentMethods(mode, t);

      toast({
        title: "Change",
        description: `${total.toFixed(2)} $`,
        variant: "default",
      });

      setIsTotal(true);
      resetNamPad();

      return;
    }
    if (remaining > 0) {
      if (remaining > amount && amount > 0) {
        handlePaymentMethods(mode, amount);
        resetNamPad();
        return;
      } else {
        handlePaymentMethods(mode, Number(remaining.toFixed(2)));
        resetNamPad();
        toast({
          title: "Change",
          description: `${(amount - remaining).toFixed(2)} $`,
          variant: "default",
        });

        setIsTotal(true);
        return;
      }
    }

    if (amount < total) {
      handlePaymentMethods(mode, amount);
      resetNamPad();
      return;
    }
    if (amount >= total) {
      toast({
        title: "Change",
        description: `${(amount - total).toFixed(2)} $`,
        variant: "default",
      });
      resetNamPad();
      setIsTotal(true);
      return;
    }
  };
};
