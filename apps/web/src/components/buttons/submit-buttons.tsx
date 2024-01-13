import { Button } from "@repo/ui/src/components/ui/button";
import React from "react";
import ClientsDialog from "../clients/ClientDialog";

function SubmitButtons() {
  return (
    <div className="col-span-1  grid grid-rows-4 gap-y-1">
      <Button
        // clickHandler={() => submitTotal("Cash")}
        variant={"action"}
        size={"full"}
      >
        Espece
      </Button>
      <Button
        // clickHandler={() => submitTotal("Card")}
        variant={"action"}
        size={"full"}
      >
        Cart
      </Button>
      <Button
        // clickHandler={() => submitTotal("Cheque")}
        variant={"action"}
        size={"full"}
      >
        Cheque
      </Button>
      <ClientsDialog />
    </div>
  );
}

export default SubmitButtons;
