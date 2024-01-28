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
import { formatCurrency } from "@/utils/formatCurrency";

function TotalDiplay() {
  const { products, scannedCode, qty, inputRef } = useStore();
  const settingsActive = useSettingsStore((state) => state.active);
  const tva_2 = products
    .filter((item) => item.tva_code === 2)
    .map((item) => {
      return item.totalPvht * (20 / 100);
    })
    .reduce((acc, curr) => Number(acc + +curr), 0);
  const tva_1 = products
    .filter((item) => item.tva_code === 1)
    .map((item) => {
      return item.totalPvht * (5.5 / 100);
    })
    .reduce((acc, curr) => Number(acc + +curr), 0);

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
      <div className="flex flex-col items-center gap-y-2">
        <div className="flex items-center gap-3">
          <span className="text-lg text-right text-gray-400">Total :</span>
          <span className="text-3xl text-right">
            {products &&
              formatCurrency(
                products.reduce((acc, curr) => acc + +curr.total, 0),
              )}
          </span>
        </div>
      </div>
      <div className="flex items-end justify-around gap-3">
        <div className="flex justify-between ml-auto gap-x-4">
          {products.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">PVHT :</span>
              <span className="text-base font-semibold">
                {products &&
                  formatCurrency(
                    products.reduce((acc, curr) => acc + +curr.totalPvht, 0),
                  )}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            {tva_2 > 0 && (
              <>
                <span className="text-xs text-gray-400">TVA 20% :</span>
                <span className="text-base font-semibold">
                  {formatCurrency(tva_2)}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            {tva_1 > 0 && (
              <>
                <span className="text-xs text-gray-400">TVA 5.5% :</span>
                <span className="text-base font-semibold">
                  {formatCurrency(tva_1)}
                </span>
              </>
            )}
          </div>
        </div>
        <form className="ml-auto " onSubmit={(e) => handleSubmit(e)}>
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
            className="w-[80px] text-gray-950 opacity-0 font-bold text-lg"
            value={scannedCode}
            onChange={(e) => {
              setScannedCode(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default TotalDiplay;
