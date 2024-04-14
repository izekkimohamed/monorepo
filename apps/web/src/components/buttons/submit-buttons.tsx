"use client";
import { useTotal } from "@/hooks/useTotal";
import { resetList, useStore } from "@/store";
import usePaymentStore from "@/store/paymentsMethods";
import { PaymentEnum } from "@repo/prisma/generated/prisma-client";

import { trpc } from "@repo/trpc/client";
import { Button } from "@repo/ui/src/components/ui/button";
import { useState } from "react";

const SubmitButtons = () => {
  const utils = trpc.useUtils();
  const { mutate: createTicket } = trpc.api.ticket.create.useMutation({
    onSuccess: () => {
      utils.api.ticket.list.invalidate();
      resetPaymentMethods();
      resetList();
    },
  });
  const { mutate: deleteWaittingTicket } = trpc.api.waitting.delete.useMutation();
  const paymentMethods = usePaymentStore((state) => state.paymentMethods);
  const resetPaymentMethods = usePaymentStore((state) => state.resetPaymentMethods);
  const products = useStore((state) => state.products);
  const handleTotal = useTotal();
  const [isTotal, setIsTotal] = useState<boolean>(false);

  function submitTotal(mode: PaymentEnum) {
    handleTotal(setIsTotal, mode);
  }

  if (isTotal) {
    const waitedTicket = products.some((product) => product.waittingTicketsNumber);
    try {
      if (waitedTicket) {
        deleteWaittingTicket(products[0].waittingTicketsNumber!);
      }
      createTicket({
        products: products.map((product) => ({
          ...product,
          waittingTicketsNumber: null,
          ticketNumber: null,
        })),
        paymentModes: paymentMethods,
      });
    } catch (error) {
    } finally {
      setIsTotal(false);
    }
  }

  return (
    <div className="grid grid-cols-3 col-span-2 gap-1">
      <Button onClick={() => submitTotal("Cash")} variant={"cash"} size={"full"}>
        Espece
      </Button>
      <Button onClick={() => submitTotal("Card")} variant={"card"} size={"full"}>
        Cart
      </Button>
      <Button onClick={() => submitTotal("Cheque")} variant={"cheque"} size={"full"}>
        Cheque
      </Button>
    </div>
  );
};

export default SubmitButtons;
