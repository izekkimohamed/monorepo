"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import React from "react";
import Setting from "../settings/setting";
import ReprandeDialog from "./ReprandeDialog";
import { resetList, updateProduct, useStore } from "@/store";
import { addToWaittingList } from "@/actions/addToWaittingList";
import { useToast } from "@repo/ui/src/components/ui/use-toast";
import { trpc } from "@repo/trpc/client";
import Link from "next/link";

function ActionButtons() {
  const { mutate: deleteTicket } = trpc.deleteWaittingTickets.useMutation();
  const { mutate: updateTicket } = trpc.updateWaittingTickets.useMutation();
  const { mutate: updateData } = trpc.updateData.useMutation();
  const { mutate: createData } = trpc.createData.useMutation();
  const products = useStore((state) => state.products);
  const total = products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2);
  const { toast } = useToast();
  const handleAttentButton = async () => {
    if (products.length < 1) {
      toast({
        title: "Error",
        description: "No data found",
        variant: "destructive",
      });

      return;
    } else {
      if (products.some((p) => p.waittingTicketsNumber)) {
        const number = products.find(
          (p) => p.waittingTicketsNumber,
        )?.waittingTicketsNumber;
        const total = Number(
          products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2),
        );
        const alredyExist = products
          .filter((p) => p.waittingTicketsNumber)
          .map((r) => {
            const temp = {
              id: r.id!,
              libelle: r.libelle!,
              code: r.code!,
              famille_code: r.famille_code!,
              tva_code: r.tva_code!,
              pvht: r.pvht!,
              price: r.price!,
              totalPvht: r.quantity * r.pvht!,
              total: r.quantity * r.price!,
              quantity: r.quantity,
              ticketNumber: undefined,
              date: new Date(),
              waittingTicketsNumber: number!,
            };
            updateData(temp);
          });
        const newProducts = products
          .filter((p) => p.id === undefined)
          .map((r) => ({
            libelle: r.libelle!,
            code: r.code!,
            famille_code: r.famille_code!,
            tva_code: r.tva_code!,
            pvht: r.pvht!,
            price: r.price!,
            totalPvht: r.pvht!,
            total: r.price!,
            quantity: r.quantity,
            ticketNumber: undefined,
            date: new Date(),
            waittingTicketsNumber: number!,
          }));
        createData(newProducts);
        number &&
          updateTicket({
            number,
            total,
          });
        resetList();
      } else {
        addToWaittingList(Number(total), products);
        resetList();
      }
    }
  };
  return (
    <div className="col-span-1  grid grid-rows-4 gap-y-1">
      <Setting />
      <Button variant={"action"} size={"full"} onClick={handleAttentButton}>
        Attent
      </Button>

      <ReprandeDialog />

      <Button
        onClick={() => {
          if (products.length < 1) {
            toast({
              title: "Error",
              description: "No data found",
              variant: "destructive",
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
        variant={"action"}
        size={"full"}
      >
        Annul
      </Button>
    </div>
  );
}

export default ActionButtons;
