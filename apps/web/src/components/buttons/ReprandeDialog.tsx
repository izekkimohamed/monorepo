"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/src/components/ui/dialog";
import { addProduct, useStore } from "@/store";
import { trpc } from "@repo/trpc/client";

import { useToast } from "@repo/ui/src/components/ui/use-toast";

function ReprandeDialog() {
  const { data: waittingTickets, refetch } = trpc.getWaittingTickets.useQuery();
  const { products } = useStore();

  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger className="text-gray-300 rounded-md bg-emerald-700">
        <div
          className="flex items-center justify-center w-full h-full text-xl font-bold "
          // variant="action"
          onClick={(e) => {
            if (products.length > 0) {
              e.stopPropagation();
              toast({
                title: "Error",
                description: "Product Elready exist",
                variant: "destructive",
                duration: 1000,
              });
              return;
            } else {
              refetch().then(({ data }) => data);
            }
          }}
        >
          Reprande Ticket
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reprande Ticket</DialogTitle>
        </DialogHeader>
        {waittingTickets && waittingTickets.length > 0 ? (
          waittingTickets.map((ticket) => (
            <DialogClose asChild key={ticket.number}>
              <div
                className="flex items-center justify-between p-3 font-semibold text-gray-200 rounded-md cursor-pointer bg-primary hover:bg-primary/90"
                onClick={() => {
                  ticket.products.map((product) => {
                    //@ts-expect-error
                    addProduct(product);
                  });
                }}
              >
                <span className="">
                  {" "}
                  {ticket.products.length}
                  <span className="ml-2 text-sm font-normal">Product(s)</span>
                </span>
                <span className=""> {ticket.total.toFixed(2)}€</span>
              </div>
            </DialogClose>
          ))
        ) : (
          <DialogDescription>No ticket to reprande</DialogDescription>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ReprandeDialog;
