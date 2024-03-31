import { trpc } from "@repo/trpc/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";
import { useToast } from "@ui/components/ui/use-toast";
import { useState } from "react";
import { ComboboxDemo } from "./Comobox";

export default function ListClients() {
  const { data: clientList } = trpc.api.client.list.useQuery();
  const [clientId, setClientId] = useState<number | null>(null);
  const { toast } = useToast();

  const selectedClientTickets = clientList?.filter((client) => client.id === clientId);

  return (
    <div className="">
      {clientList && clientList?.length > 0 ? (
        <div className="">
          <div className="w-full mb-2">
            <Select onValueChange={(value) => setClientId(+value)}>
              <SelectTrigger className="w-1/2 font-bold h-14 bg-muted text-primary">
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  {clientList &&
                    clientList?.map((client) => (
                      <SelectItem
                        key={client.name}
                        value={client.id.toLocaleString()}
                        className="py-4 font-bold cursor-pointer text-primary"
                      >
                        {client.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {selectedClientTickets &&
            selectedClientTickets.map((client) => (
              <ComboboxDemo key={client.id} client={client} />
            ))}
        </div>
      ) : (
        <p className="text-3xl font-bold text-center text-gray-700">No Clients Yet</p>
      )}
    </div>
  );
}
