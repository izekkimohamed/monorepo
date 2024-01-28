"use client";
import { addToWaittingList } from "@/actions/addToWaittingList";
import { resetList, useStore } from "@/store";
import { trpc } from "@repo/trpc/client";
import { Button } from "@repo/ui/src/components/ui/button";
import { useToast } from "@repo/ui/src/components/ui/use-toast";
import Setting from "../settings/setting";
import Stats from "../stats";
import ReprandeDialog from "./ReprandeDialog";
import TiketsList from "../tickets/tickets-list";

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
        duration: 1000,
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
    <div className="grid grid-cols-2 col-span-2 row-span-4 gap-1 ">
      <div className="grid col-span-1 grid-rows-4 gap-1">
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
          variant={"action"}
          size={"full"}
        >
          Annul
        </Button>
      </div>
      <div className="grid col-span-1 grid-rows-4 gap-1">
        <TiketsList />
        <Button variant={"action"} size={"full"}></Button>
        <Button variant={"action"} size={"full"}></Button>
        <Stats />
      </div>
    </div>
  );
}

export default ActionButtons;
