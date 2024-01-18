import React from "react";
import ActionButtons from "./action-buttons";
import NamPad from "./namPad";
import SubmitButtons from "./submit-buttons";

function Buttons() {
  return (
    <div className="grid justify-between grid-cols-4 col-span-4 row-span-1 border-2 bg-gray-950 border-b-gray-950">
      <ActionButtons />
      <NamPad />
      <SubmitButtons />
    </div>
  );
}

export default Buttons;
