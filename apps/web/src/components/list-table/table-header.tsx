import { format } from "date-fns";
import { serverClient as trpc } from "@repo/trpc/server";
import React from "react";

async function TableHeader() {
  const ticketNumber = await trpc.getTicket();
  return (
    <div className="bg-primary py-2 font-semibold mt-auto gap-5 flex justify-center text-2xl text-gray-50 ">
      <h2>Ticket N° {ticketNumber?.number}</h2>
      <p>{format(new Date(), "dd/MM/yyyy HH:mm")}</p>
    </div>
  );
}

export default TableHeader;
