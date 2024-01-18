import { Button } from "@repo/ui/src//components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/src//components/ui/dialog";
import { useStore, resetList } from "@/store";
import { trpc } from "@repo/trpc/client";
import { useToast } from "@repo/ui/src/components/ui/use-toast";

export default function ClientsDialog() {
  const { data: clients } = trpc.listClients.useQuery();

  const { mutate: addToClient } = trpc.addToClient.useMutation();
  const { mutate: createTicket } = trpc.createTicket.useMutation();
  const { data: ticketNumber } = trpc.getTicket.useQuery();
  const { products } = useStore();
  const { toast } = useToast();

  return (
    <Dialog>
      {products.length ? (
        <DialogTrigger asChild>
          <Button
            className="h-full  text-gray-50 bg-[#009f55] rounded font-semibold text-2xl w-full border-0 hover:bg-[#009f55] hover:text-gray-50"
            variant="outline"
          >
            Client
          </Button>
        </DialogTrigger>
      ) : (
        <Button
          className="h-full  text-gray-50 bg-[#009f55] rounded font-semibold text-2xl w-full border-0 hover:bg-[#009f55] hover:text-gray-50"
          variant="outline"
          onClick={() => {
            toast({
              title: "Ticket reprande",
              description: "List is not Empty",
              variant: "destructive",
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

        <div className="grid gap-2">
          {clients &&
            clients.map((client) => (
              <DialogClose key={client.id} asChild>
                <Button
                  className="w-full h-full p-3 text-xl font-bold rounded-md cursor-pointer text-gray-950 text-start bg-violet-300 hover:bg-violet-400 "
                  onClick={() => {
                    addToClient({
                      clientId: client.id,
                      ticketNumber: ticketNumber?.number!,
                      data: products.map((d) => {
                        return {
                          ...d,
                          ticketNumber: ticketNumber?.number!,
                        };
                      }),
                    });
                    createTicket();
                    resetList();
                  }}
                >
                  <p className="w-full text-start">{client.name}</p>
                </Button>
              </DialogClose>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
