"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";

import { Button } from "@repo/ui/src/components/ui/button";

// import { useGlobalStore, useNamPadStore } from "@/store";
// import { TData } from "@/types";

const NamPadButtons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "0",
  "X",
];
function NamPad() {
  //   const {
  //     inputRef,
  //     updateData,
  //     setQty,
  //     selectedItem,
  //     setSelectedItem,
  //     clearSelectItem,
  //   } = useGlobalStore();
  //   const { tempNamPad, setTempNamPad, clearNamPad } = useNamPadStore();

  //   useEffect(() => {
  //     const handleFocus = () => {
  //       inputRef.current?.focus();
  //     };

  //     window.addEventListener("focus", handleFocus);

  //     inputRef.current?.focus();

  //     return () => {
  //       window.removeEventListener("focus", handleFocus);
  //     };
  //   }, [inputRef]);
  return (
    <div className="col-span-2  grid gap-1 grid-cols-3 ">
      {NamPadButtons.map((button, index) => (
        <Button
          size="full"
          key={index}
          //   clickHandler={() => {
          //     if (button === "X") {
          //       if (
          //         tempNamPad === "." ||
          //         tempNamPad === "0" ||
          //         tempNamPad === ""
          //       ) {
          //         return;
          //       }
          //       if (!selectedItem) {
          //         setQty(parseFloat(tempNamPad));
          //         inputRef.current?.focus();
          //         // clearNamPad();
          //         return;
          //       } else {
          //         // updateData(selectedItem.code, parseFloat(tempNamPad));

          //         // inputRef.current?.focus();
          //         // clearNamPad();
          //       }

          //     //   inputRef.current?.focus();
          //     //   clearSelectItem();
          //     } else {
          //     //   setTempNamPad(button);
          //     }
          //   }}
          className={` text-gray-50 font-semibold rounded-md
            ${button === "X" ? "bg-red-400 " : "bg-primary "}`}
        >
          {button}
        </Button>
      ))}
    </div>
  );
}

export default NamPad;
