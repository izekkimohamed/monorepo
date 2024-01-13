import React from "react";
import ActionButtons from "./action-buttons";
import NamPad from "./namPad";
import SubmitButtons from "./submit-buttons";

function Buttons() {
  return (
    <div className="col-span-4 bg-gray-950 row-span-1 grid grid-cols-4 justify-between">
      <ActionButtons />
      <NamPad />
      <SubmitButtons />
    </div>
  );
}

export default Buttons;
