"use client";
import { trpc } from "@repo/trpc/client";

import {
  Product,
  addProduct,
  useStore,
  resetQty,
  updateProduct,
} from "@/store";
import { Button } from "@repo/ui/src/components/ui/button";
import { Data, Products } from "@repo/prisma/client";
import { useEffect } from "react";
import { useTabsStore } from "@/store/tabs";

const ItemButton = ({ item }: { item: Products }) => {
  const { qty, products } = useStore();

  const handleSubmit = () => {
    if (item) {
      if (products.find((product) => product.code === item.code)) {
        updateProduct(item.code!);
      } else {
        const tempData: Product = {
          id: undefined,
          libelle: item.libelle!,
          code: item.code!,
          famille_code: item.famille_code!,
          tva_code: item.tva_code!,
          pvht: item.pvht!,
          price: item.pvttc!,
          totalPvht: qty * item.pvht!,
          total: qty * item.pvttc!,
          quantity: qty,
          ticketNumber: 2,
          date: new Date(),
          waittingTicketsNumber: null,
        };

        addProduct(tempData);
        resetQty();
      }
    }
  };

  return (
    item && (
      <Button
        variant={"secondary"}
        onClick={handleSubmit}
        className="text-balance rounded-md border-2 border-primary text-primary h-16 w-full font-bold "
      >
        <span>{item?.libelle}</span>
      </Button>
    )
  );
};

export default ItemButton;
