"use client";

import { cn } from "@repo/libs/utils";
import { Button } from "@ui/components/ui/button";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
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
        tva_code: number | null;
        waittingTicketsNumber: number | null;
      }[];
      clientId: number | null;
    }[];
  };
};

export function ComboboxDemo({ client }: TClient) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="relative w-full h-full border rounded-md border-primary ">
      <div className="flex w-full p-2 text-lg font-semibold text-gray-500 bg-primary/20 gap-x-2 rounded-t-md">
        <div className="w-[100px] text-center">Invoice</div>
        <div className="flex-auto">Date</div>
        <div className="pr-2">Amount</div>
        <div className="w-10"></div>
      </div>

      <div className="h-[600px] overflow-y-auto">
        {client.tickets.map((ticket, i) => (
          <div
            key={ticket.number}
            onClick={() => {
              if (open === ticket.number) {
                setOpen(null);
              } else {
                setOpen(ticket.number);
              }
            }}
            className={cn(
              "pb-3 cursor-pointer hover:bg-primary/30 transition-colors",
              i % 2 === 0 ? "bg-muted" : "bg-white",
              open === ticket.number ? "bg-primary/30" : "",
            )}
          >
            <div className="relative flex items-center px-2 gap-x-2">
              <div className=" w-[100px] font-bold text-sm text-center">
                {ticket.number}
              </div>
              <div className="flex-auto font-semibold">
                {format(ticket.date, "EEEE, d MMMM yyyy", { locale: fr })}
              </div>
              <div className="pr-2 text-base font-bold">
                {ticket.total.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <Button
                onClick={() => {
                  if (open === ticket.number) {
                    setOpen(null);
                  } else {
                    setOpen(ticket.number);
                  }
                }}
                className="ml-2 text-sm font-semibold bg-transparent text-primary"
              >
                <ChevronDown
                  className={cn(
                    "transition-all",
                    open === ticket.number ? "-rotate-180" : "rotate-0",
                  )}
                />
              </Button>
            </div>
            <div
              className={cn(
                "transition-all mx-4 pb-1 rounded-md border border-primary ease-in-out delay-100 ",
                open === ticket.number ? "visible" : "hidden",
              )}
            >
              <div className="grid grid-cols-12 gap-2 px-4 py-2 font-bold place-items-end bg-primary/50">
                <div className="col-span-4 justify-self-center">Code</div>
                <div className="col-span-4 justify-self-start">Libelle</div>
                <div className="col-span-1 justify-self-center">Price</div>
                <div className="col-span-2 text-center justify-self-center">Quantity</div>
                <div className="col-span-1 justify-self-center">Total</div>
              </div>
              {ticket.products?.map((p, i) => (
                <div
                  key={p.id}
                  className={cn(
                    "grid grid-cols-12 place-items-end text-sm px-2 py-3 gap-x-2 ",
                    i % 2 === 0 ? "bg-white" : "bg-gray-200",
                  )}
                >
                  <div className="col-span-4 font-bold justify-self-center">{p.code}</div>
                  <div className="col-span-4 w-[90%] truncate justify-self-start">
                    {p.libelle}
                  </div>
                  <div className="col-span-1 justify-self-center">{p.price}</div>
                  <div className="col-span-1 justify-self-end">{p.quantity}</div>
                  <div className="col-span-2 pr-2 text-base font-bold">
                    {p.total.toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 flex p-3 border-gray-300 rounded-b-md bg-violet-300">
        <div className="sticky bottom-0 flex-auto text-xl font-semibold">Total</div>
        <div className="text-xl font-bold text-right">
          {client.tickets
            .reduce((acc, ticket) => acc + ticket.total, 0)
            .toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </div>
      </div>
    </div>
  );
}
