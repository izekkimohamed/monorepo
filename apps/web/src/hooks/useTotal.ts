import { PaymentEnum } from "@repo/prisma/generated/prisma-client";
import { useToast } from "@repo/ui/src/components/ui/use-toast";

import { resetNamPad, totalProducts, useStore } from "@/store";
import usePaymentStore from "@/store/paymentsMethods";

export const useTotal = () => {
  const products = useStore.getState().products;
  const { namPad } = useStore((state) => state);
  const { handlePaymentMethods, totalPayments } = usePaymentStore();
  const { toast } = useToast();

  return async (setIsTotal: (isTotal: boolean) => void, mode: PaymentEnum) => {
    if (products.length < 1) {
      toast({
        title: "Error",
        description: "No data found",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }

    const total = totalProducts();
    const amount = Number(namPad);
    const remaining = Number((totalProducts() - totalPayments()).toFixed(2));

    if (!amount && !remaining) {
      handlePaymentMethods(mode, total);
      toast({
        title: "Change",
        description: `amount === 0 && !remaining`,
        variant: "default",
        duration: 1000,
      });
      setIsTotal(true);
      resetNamPad();
      return;
    }
    if (amount >= total) {
      handlePaymentMethods(mode, total);
      setIsTotal(true);
      resetNamPad();
      toast({
        title: "Change",
        description: `${(amount - total).toFixed(2)}€`,
        variant: "default",
        duration: 1000,
      });
      return;
    }

    if (remaining > 0) {
      if (remaining > amount && amount > 0) {
        handlePaymentMethods(mode, amount);
        resetNamPad();
        return;
      } else {
        handlePaymentMethods(mode, remaining);
        resetNamPad();
        toast({
          title: "Total",
          description: `Transaction Completed`,
          variant: "default",
          duration: 1000,
        });
        setIsTotal(true);
        return;
      }
    }
  };
};
