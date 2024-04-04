import ActionButtons from "./action-buttons";
import NamPad from "./namPad";
import SubmitButtons from "./submit-buttons";

function Buttons() {
  return (
    <div className="flex col-span-6 gap-1 p-1 pt-0 bg-gray-950 border-b-gray-950">
      <div className="grid w-1/2 gap-1">
        <NamPad />
        <SubmitButtons />
      </div>
      <ActionButtons />
      {/* <SubmitButtons /> */}
    </div>
  );
}

export default Buttons;
