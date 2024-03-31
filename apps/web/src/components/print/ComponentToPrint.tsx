import React from "react";

import PrintCurrent from "./PrintCurrent";
import PrintLast from "./PrintLast";

import { useSpecificTicket } from "@/store/specificTicket";
import { trpc } from "@repo/trpc/client";
import PrintSpecific from "./PrintSpecific";

interface ComponentToPrintProps {
  ticket: "current" | "last" | "specific" | null;
}

const ComponentToPrint = React.forwardRef<HTMLDivElement, ComponentToPrintProps>(
  (props, ref) => {
    const { ticket } = props;

    const { data: lastTicket } = trpc.api.ticket.getLastTicket.useQuery();
    const ticketData = useSpecificTicket();

    return (
      <div ref={ref} className="w-screen h-auto ">
        {ticket === "last" && lastTicket && <PrintLast data={lastTicket} />}
        {ticket === "specific" && ticketData.number !== null && (
          <PrintSpecific data={ticketData} />
        )}
        {ticket === "current" && <PrintCurrent />}
      </div>
    );
  },
);

export default ComponentToPrint;
