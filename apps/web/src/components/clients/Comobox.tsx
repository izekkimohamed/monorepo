"use client";

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/src/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
type TClient = {
  client: {
    id: number;
    name: string;
    tickets: {
      number: number;
      date: string;
      total: number;
      products?: {
        code: string;
        date: string;
        ticketNumber: number | null;
        total: number;
        id: number;
        libelle: string;
        price: number;
        pvht: number;
        quantity: number;
        tva_code: string | null;
        waittingTicketsNumber: number | null;
      }[];
      clientId: number | null;
    }[];
  };
};

export function ComboboxDemo({ client }: TClient) {
  return (
    <Tabs orientation="horizontal">
      <TabsList className="w-full bg-transparent gap-4">
        <TabsTrigger
          value={client.name}
          className="px-3 py-2 data-[state=active]:text-white border-black border text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md "
        >
          {client.name}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={client.name} className="w-full flex">
        <Table>
          <TableHeader className="">
            <TableRow className="">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Date</TableHead>

              <TableHead colSpan={2} className="text-right">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {client.tickets.map((ticket) => (
              <TableRow key={ticket.number}>
                <TableCell className="font-medium">{ticket.number}</TableCell>
                <TableCell>
                  {format(ticket.date, "EEEE, d MMMM yyyy", { locale: fr })}
                </TableCell>

                <TableCell colSpan={2} className="text-right font-bold">
                  {ticket.total.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="text-xl" colSpan={3}>
                Total
              </TableCell>
              <TableCell className="text-right font-bold text-xl">
                {client.tickets
                  .reduce((acc, ticket) => acc + ticket.total, 0)
                  .toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
