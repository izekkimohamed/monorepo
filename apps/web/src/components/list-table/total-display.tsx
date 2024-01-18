"use client";
import React, { useEffect } from "react";

import { getProduct } from "@/actions/getProduct";
import {
  Product,
  addProduct,
  resetQty,
  setScannedCode,
  updateProduct,
  useStore,
} from "@/store";
import { useSettingsStore } from "@/store/settings";
import { Input } from "@ui/components/ui/input";

function TotalDiplay() {
  const { products, scannedCode, qty, inputRef } = useStore();
  const settingsActive = useSettingsStore((state) => state.active);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (scannedCode === "") return;
    const data = await getProduct(scannedCode);
    if (data.success) {
      const { product } = data;
      if (products.find((p) => p.code === product.code)) {
        updateProduct(product.code!);
      } else {
        const tempData: Product = {
          id: undefined,
          libelle: product.libelle!,
          code: product.code!,
          famille_code: product.famille_code!,
          tva_code: product.tva_code!,
          pvht: product.pvht!,
          price: product.pvttc!,
          totalPvht: qty * product.pvht!,
          total: qty * product.pvttc!,
          quantity: qty,
          ticketNumber: null,
          date: new Date(),
          waittingTicketsNumber: null,
        };

        addProduct(tempData);
        resetQty();
      }
    } else {
      alert("Product not found");
    }

    setScannedCode("");
  };
  useEffect(() => {
    if (!settingsActive) {
      inputRef.current?.focus();
    }
  }, [settingsActive]);

  return (
    <div
      className="px-4 py-3 text-lg font-semibold bg-primary text-gray-50"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-around gap-10">
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-3">
            <span className="text-right">Total:</span>
            <span className="text-right">
              {products &&
                products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2)}
            </span>
          </div>
          <div className="flex gap-3">
            <span>PVHT:</span>
            <span>
              {products &&
                products
                  .reduce((acc, curr) => acc + +curr.totalPvht, 0)
                  .toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-2">
            <span>TVA 20%:</span>
            <span>
              {products
                .filter((item) => item.tva_code === 2)
                .map((item) => {
                  return item.total * (20 / 100);
                })
                .reduce((acc, curr) => Number((acc + +curr).toFixed(2)), 0)}
            </span>
          </div>
          <div className="flex gap-2">
            <span>TVA 5.5%:</span>
            <span>
              {products
                .filter((item) => item.tva_code === 1)
                .map((item) => {
                  return item.total * (5.5 / 100);
                })
                .reduce((acc, curr) => Number((acc + +curr).toFixed(2)), 0)}
            </span>
          </div>
        </div>
        <form className="flex gap-1 " onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            ref={inputRef}
            onBlur={(e) => {
              if (settingsActive) {
                inputRef.current?.blur();
              } else {
                inputRef.current?.focus();
              }
            }}
            autoFocus
            disabled={settingsActive}
            className="w-[100px] text-gray-950 font-bold text-lg"
            value={scannedCode}
            onChange={(e) => {
              setScannedCode(e.target.value);
            }}
          />
        </form>
        {/* <Input
          type="text"
          disabled
          className="w-[50px] text-gray-950 opacity-0 font-bold text-lg"
          value={scannedCode}
        /> */}
      </div>
    </div>
  );
}

export default TotalDiplay;
