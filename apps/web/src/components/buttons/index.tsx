import React from "react";
import ActionButtons from "./action-buttons";
import NamPad from "./namPad";
import SubmitButtons from "./submit-buttons";

function Buttons() {
  return (
    <div className="grid justify-between grid-cols-4 col-span-5  gap-1 p-1 pt-0 bg-gray-950 border-b-gray-950">
      <NamPad />
      <ActionButtons />
      <SubmitButtons />
      {/* <SubmitButtons /> */}
    </div>
  );
}

export default Buttons;
