import { trpc } from "@repo/trpc/client";
import { Button } from "@ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@ui/components/ui/dialog";
import { ScrollArea } from "@ui/components/ui/scroll-area";
import { format } from "date-fns";

export default function TiketsList() {
  const { data } = trpc.listTickets.useQuery();
  console.log(data);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"action"} size={"full"}>
          Tickets List
        </Button>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>List of Tickets</DialogHeader>
        <ScrollArea className="h-[550px] p-2  pb-0 relative">
          {/* <div className="space-y-2">
            {data
              ?.filter((d) => d.clientId == null)
              .map((d) => (
                <div
                  key={d.number}
                  className="flex justify-between gap-2 px-4 py-2 rounded-lg cursor-pointer bg-violet-400"
                >
                  <p>{d.number}</p>
                  <p>{format(d.date, "dd/MMMM/yyyy/hh:mm")}</p>
                  <p>{d.total}</p>
                </div>
              ))}
          </div> */}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
