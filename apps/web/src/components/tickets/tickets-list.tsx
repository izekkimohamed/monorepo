import { createSpecificTicket } from "@/store/specificTicket";
import { trpc } from "@repo/trpc/client";
import { Button } from "@ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@ui/components/ui/dialog";
import { ScrollArea } from "@ui/components/ui/scroll-area";
import { PrinterIcon } from "lucide-react";

type UseReactToPrintHookReturn = () => void;

export default function TiketsList({
  printTicket,
}: {
  printTicket: (
    ticketType: "current" | "last" | "specific" | null,
  ) => UseReactToPrintHookReturn;
}) {
  const { data } = trpc.listTickets.useQuery();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"action"} size={"full"}>
          Tickets List
        </Button>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>List of Tickets</DialogHeader>
        <ScrollArea className="h-[550px] relative">
          <div className="px-8 space-y-2">
            {data &&
              data.map((p) => (
                <div
                  key={p.number}
                  className="flex items-center justify-between px-3 rounded-lg bg-primary text-gray-50"
                >
                  <div className="flex gap-3">
                    <span className="">{p.number}</span>
                    <span className="">{p.total}</span>
                  </div>
                  <ButtonTicket p={p} prinTicket={printTicket} />
                </div>
              ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function ButtonTicket({
  p,
  prinTicket,
}: {
  p: { number: number; total: number };

  prinTicket: (
    ticketType: "current" | "last" | "specific" | null,
  ) => UseReactToPrintHookReturn;
}) {
  const utils = trpc.useUtils();

  const printSpecific = prinTicket("specific");
  return (
    <Button
      size={"icon"}
      onClick={async () => {
        const t = await utils.getTicketById.fetch(p.number);
        if (t) {
          createSpecificTicket(t);
          printSpecific();
        }
      }}
    >
      <PrinterIcon className="w-5 h-5 " />
    </Button>
  );
}
