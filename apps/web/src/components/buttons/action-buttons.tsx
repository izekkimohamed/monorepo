"use client";
import { addToWaittingList } from "@/actions/addToWaittingList";
import { resetList, useStore } from "@/store";
import { trpc } from "@repo/trpc/client";
import { Button } from "@repo/ui/src/components/ui/button";
import { useToast } from "@repo/ui/src/components/ui/use-toast";

import { useRef, useState } from "react";

import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "../print/ComponentToPrint";
import Setting from "../settings/setting";
import Stats from "../stats";

import { deleteSpecificTicket } from "@/store/specificTicket";
import ClientsDialog from "../clients/ClientDialog";
import TiketsList from "../tickets/tickets-list";
import ReprandeDialog from "./ReprandeDialog";

function ActionButtons() {
  const { mutate: deleteTicket } = trpc.api.waitting.delete.useMutation();
  const products = useStore((state) => state.products);

  const total = products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2);
  const { toast } = useToast();

  const componentRef = useRef<HTMLDivElement | null>(null);
  const [ticket, setTicket] = useState<"current" | "last" | "specific" | null>(null);

  const printTicket = (ticketType: "current" | "last" | "specific" | null) => {
    return useReactToPrint({
      content: () => componentRef.current,
      pageStyle() {
        return `@page { size: 160mm 248mm; margin: 1; }`;
      },
      documentTitle: `${ticketType === "current" ? "Current" : "Last"} Ticket`,
      removeAfterPrint: true,

      onBeforeGetContent: async () => {
        setTicket(ticketType);
      },
      onAfterPrint: () => {
        setTicket(null);

        deleteSpecificTicket();
      },
    });
  };

  const printCurrent = printTicket("current");
  const printLast = printTicket("last");

  const handleAttentButton = async () => {
    if (products.length < 1) {
      toast({
        title: "Error",
        description: "No data found",
        variant: "destructive",
        duration: 1000,
      });

      return;
    } else {
      addToWaittingList(Number(total), products);
      resetList();
    }
  };
  return (
    <div className="grid grid-cols-2 col-span-2 row-span-5 gap-1 ">
      <div
        style={{
          display: "none",
          fontSize: "1rem",
        }}
      >
        <ComponentToPrint ref={componentRef} ticket={ticket} />
      </div>
      <div className="grid col-span-1 grid-rows-5 gap-1">
        <Button variant={"ticket"} size={"full"} onClick={handleAttentButton}>
          Wait
        </Button>
        <ReprandeDialog />
        <Button
          onClick={() => {
            if (products.length < 1) {
              toast({
                title: "Error",
                description: "No data found",
                variant: "destructive",
                duration: 1000,
              });
              return;
            }
            products
              .filter((item) => item.waittingTicketsNumber)
              .map((item) => {
                deleteTicket(item.waittingTicketsNumber!);
                return;
              });
            resetList();
          }}
          variant={"ticket"}
          size={"full"}
        >
          Annul
        </Button>
        <Setting />

        <Button disabled size={"full"}></Button>
      </div>
      <div className="grid col-span-1 grid-rows-5 gap-1">
        <TiketsList printTicket={printTicket} />

        <Button
          variant={"print"}
          size={"full"}
          onClick={() => {
            if (products.length < 1) {
              toast({
                title: "Error",
                description: "No product Yet",
                duration: 1000,
                variant: "destructive",
              });
              return;
            }
            printCurrent();
          }}
        >
          Print Current
        </Button>
        <Button variant={"print"} size={"full"} onClick={() => printLast()}>
          Print Last
        </Button>
        <Stats />
        <ClientsDialog />
      </div>
    </div>
  );
}

export default ActionButtons;
