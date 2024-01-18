import { format } from "date-fns";
import { serverClient as trpc } from "@repo/trpc/server";
import React from "react";

async function TableHeader() {
  const ticketNumber = await trpc.getTicket();
  return (
    <div className="flex justify-center gap-5 py-3 text-2xl font-semibold border-b-2 border-gray-900 text-gray-50 bg-primary ">
      <h2 className="flex gap-2 ">
        <p className="text-gray-400">Ticket N° : </p>
        <span>{ticketNumber?.number}</span>
      </h2>
      <div className="w-1 bg-gray-500" />
      <p className="text-gray-200">{format(new Date(), "dd/MM/yyyy HH:mm")}</p>
    </div>
  );
}

export default TableHeader;
