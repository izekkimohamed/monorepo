"use client";

import { Button } from "@repo/ui/src/components/ui/button";

import {
  deselectProduct,
  resetNamPad,
  setNamPad,
  setQty,
  updateProduct,
  useStore,
} from "@/store";

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
  const qty = useStore((state) => state.qty);
  const namPad = useStore((state) => state.namPad);
  const selectedProduct = useStore((state) => state.selectedProduct);

  return (
    <div className="col-span-2  grid gap-1 grid-cols-3 ">
      {NamPadButtons.map((button, index) => (
        <Button
          size="full"
          key={index}
          onClick={() => {
            if (button === "X") {
              if (namPad === "." || namPad === "0" || namPad === "") {
                return;
              }
              if (!selectedProduct) {
                setQty(parseFloat(namPad));

                resetNamPad();
                return;
              } else {
                updateProduct(selectedProduct.code, parseInt(namPad));
                //
                resetNamPad();
              }

              deselectProduct();
            } else {
              setNamPad(button);
            }
          }}
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
