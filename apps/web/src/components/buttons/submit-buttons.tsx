"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import React, { useState } from "react";
import ClientsDialog from "../clients/ClientDialog";
import { useTicketSubmission } from "@/hooks/useTickitSubmission";
import { useTotal } from "@/hooks/useTotal";

import { useStore, resetList, setRemaining } from "@/store";
import { PaymentEnum } from "@repo/prisma/client";
import { trpc } from "@repo/trpc/client";
import usePaymentStore from "@/store/paymentsMethods";

const SubmitButtons = () => {
  const [isTotal, setIsTotal] = useState<boolean>(false);
  const { products } = useStore();
  const { data: ticketNumber } = trpc.getTicket.useQuery();
  const utils = trpc.useUtils();
  const { mutate: createTicket } = trpc.createTicket.useMutation({
    onSuccess: () => {
      utils.getTicket.invalidate();
    },
  });
  const handelTickitSubmission = useTicketSubmission();
  const handleTotal = useTotal();
  const { paymentMethods, setPaymentMethods } = usePaymentStore();
  const t = products.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);
  const r = paymentMethods.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const remaining = t - r;
  function submitTotal(mode: PaymentEnum) {
    handleTotal(remaining, setIsTotal, ticketNumber?.number!, mode);
  }

  const create = async () => {
    await createTicket();
    setPaymentMethods([]);
    resetList();
  };

  if (isTotal) {
    try {
      handelTickitSubmission(products, ticketNumber?.number!, paymentMethods);
    } catch (error) {
    } finally {
      create();
      setIsTotal(false);
    }
  }

  return (
    <div className="grid col-span-1 grid-rows-4 gap-y-1">
      <Button
        onClick={() => submitTotal("Cash")}
        variant={"action"}
        size={"full"}
      >
        Espece
      </Button>
      <Button
        onClick={() => submitTotal("Card")}
        variant={"action"}
        size={"full"}
      >
        Cart
      </Button>
      <Button
        onClick={() => submitTotal("Cheque")}
        variant={"action"}
        size={"full"}
      >
        Cheque
      </Button>
      <ClientsDialog />
    </div>
  );
};

export default SubmitButtons;
