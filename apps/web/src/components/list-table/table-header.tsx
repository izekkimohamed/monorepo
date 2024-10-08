import { prisma } from "@repo/prisma/src";

async function TableHeader() {
  const ticketNumber = await prisma.ticket.findFirst({
    orderBy: {
      number: "desc",
    },
  });
  return (
    <div className="flex justify-center gap-5 py-3 text-2xl font-semibold border-b-2 border-gray-100 text-gray-50 ">
      <h2 className="flex items-center gap-2 ">
        <p className="text-lg text-gray-400">Ticket N°: </p>
        <span>{ticketNumber?.number! + 1}</span>
      </h2>
      <div className="w-1 bg-gray-500" />
      {/* <p>{format(new Date(), "dd/MM/yyyy")}</p> */}
    </div>
  );
}

export default TableHeader;
