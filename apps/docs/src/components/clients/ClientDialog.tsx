import { resetList, useStore } from "@/store";
import { trpc } from "@repo/trpc/client";
import { Button } from "@repo/ui/src//components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/src//components/ui/dialog";
import { useToast } from "@repo/ui/src/components/ui/use-toast";

export default function ClientsDialog() {
  const { data: clients } = trpc.api.client.list.useQuery();

  const { mutate: addToClient } = trpc.api.client.update.useMutation();
  const { mutate: deleteWaittingTicket } = trpc.api.waitting.delete.useMutation();

  const { products } = useStore();
  const { toast } = useToast();

  const waitedTicket = products.some((product) => product.waittingTicketsNumber);

  return (
    <Dialog>
      {products.length ? (
        <DialogTrigger asChild>
          <Button variant="custome" size={"full"}>
            Client
          </Button>
        </DialogTrigger>
      ) : (
        <Button
          variant="custome"
          size={"full"}
          onClick={() => {
            toast({
              title: "Ticket reprande",
              description: "List is not Empty",
              variant: "destructive",
              duration: 1000,
            });
          }}
        >
          Client
        </Button>
      )}
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="py-3 text-center">Clients List</DialogTitle>
        </DialogHeader>

        <div className="grid gap-2 ">
          {clients &&
            clients.map((client) => (
              <DialogClose key={client.id} asChild>
                <Button
                  className="h-16 p-2 rounded-md cursor-pointer text-gray-50 "
                  onClick={() => {
                    if (waitedTicket) {
                      deleteWaittingTicket(products[0].waittingTicketsNumber!);
                    }
                    addToClient({
                      id: client.id,
                      name: client.name,
                      phone_number: client.phone_number,
                      ticket: {
                        clientId: undefined,
                        number: undefined,
                        products,
                      },
                    });
                    resetList();
                  }}
                >
                  <p className="w-full text-center">{client.name}</p>
                </Button>
              </DialogClose>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
