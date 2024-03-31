"use client";
import { addProduct, useStore } from "@/store";
import { trpc } from "@repo/trpc/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/src/components/ui/dialog";

import { useToast } from "@repo/ui/src/components/ui/use-toast";
import { Button } from "@ui/components/ui/button";

function ReprandeDialog() {
  const { data: waittingTickets, refetch } = trpc.api.waitting.list.useQuery();
  const { products } = useStore();

  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ticket"
          size="full"
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
        </Button>
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
