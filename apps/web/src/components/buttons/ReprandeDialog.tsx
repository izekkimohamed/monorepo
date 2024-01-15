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
import { addProduct } from "@/store";
import { trpc } from "@repo/trpc/client";

import { useToast } from "@repo/ui/src/components/ui/use-toast";

function ReprandeDialog() {
  const { data: waittingTickets, refetch } = trpc.getWaittingTickets.useQuery();
  const { mutate: deleteProduct } = trpc.deleteData.useMutation();

  const { toast } = useToast();
  const data = [1];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"full"}
          variant="action"
          onClick={() => {
            refetch().then(({ data }) => data);
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
                className="flex justify-between items-center p-3 font-semibold rounded-md bg-indigo-300 hover:bg-indigo-400 cursor-pointer"
                onClick={() => {
                  ticket.products.map((product) => {
                    //@ts-expect-error
                    addProduct(product);
                    // deleteProduct(product.id);
                  });
                }}
              >
                <span className="text-gray-950">
                  {" "}
                  {ticket.products.length}
                  <span className="text-sm ml-2 font-normal">Product(s)</span>
                </span>
                <span className="text-gray-950">
                  {" "}
                  {ticket.total.toFixed(2)}€
                </span>
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
