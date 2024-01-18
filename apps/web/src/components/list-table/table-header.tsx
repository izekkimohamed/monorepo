import { format } from "date-fns";
import { serverClient as trpc } from "@repo/trpc/server";
import React from "react";

async function TableHeader() {
  const ticketNumber = await trpc.getTicket();
  return (
    <div className="flex justify-center gap-5 py-3 text-2xl font-semibold border-b-2 border-gray-900 bg-primary text-gray-50 ">
      <h2>Ticket N° {ticketNumber?.number}</h2>
      <p>{format(new Date(), "dd/MM/yyyy HH:mm")}</p>
    </div>
  );
}

export default TableHeader;
