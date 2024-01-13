import { Button } from "@repo/ui/src/components/ui/button";
import React from "react";
import Setting from "../settings/setting";
import ReprandeDialog from "../clients/ReprandeDialog";

function ActionButtons() {
  return (
    <div className="col-span-1  grid grid-rows-4 gap-y-1">
      <Setting />
      <Button
        variant={"action"}
        size={"full"}
        // onClick={() => handleWaittingTicket()}
      >
        Attent
      </Button>

      <ReprandeDialog />

      <Button
        // onClick={() => {
        //   if (data.length < 1) {
        //     toast({
        //       title: "Error",
        //       description: "No data found",
        //       variant: "destructive",
        //     });
        //     return;
        //   }
        //   data
        //     .filter((item) => item.id)
        //     .map((item) => {
        //       deleteTicket(item.waittingTicketsNumber!);
        //       deleteData(item.id!);

        //       return;
        //     });
        //   resetData();
        // }}
        variant={"action"}
        size={"full"}
      >
        Annul
      </Button>
    </div>
  );
}

export default ActionButtons;
