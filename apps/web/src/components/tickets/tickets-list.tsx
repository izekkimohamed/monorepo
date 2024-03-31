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

type PrintTicket = (
  ticketType: "current" | "last" | "specific" | null,
) => UseReactToPrintHookReturn;

type ButtonTicketProps = {
  ticket: {
    number: number;
    total: number;
  };
  prinTicket: PrintTicket;
};

export default function TiketsList({ printTicket }: { printTicket: PrintTicket }) {
  const { data: tickets } = trpc.api.ticket.list.useQuery();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"print"} size={"full"}>
          Tickets List
        </Button>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>List of Tickets</DialogHeader>
        <ScrollArea className="h-[550px] relative">
          <div className="px-8 space-y-2">
            {tickets &&
              tickets.map((ticket) => (
                <div
                  key={ticket.number}
                  className="flex items-center justify-between px-3 rounded-lg bg-primary text-gray-50"
                >
                  <div className="flex gap-3">
                    <span className="">{ticket.number}</span>
                    <span className="">{ticket.total}</span>
                  </div>
                  <ButtonTicket ticket={ticket} prinTicket={printTicket} />
                </div>
              ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function ButtonTicket({ ticket, prinTicket }: ButtonTicketProps) {
  const utils = trpc.useUtils();

  const printSpecific = prinTicket("specific");
  return (
    <Button
      size={"icon"}
      onClick={async () => {
        const t = await utils.api.ticket.getTicketById.fetch(ticket.number);
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
