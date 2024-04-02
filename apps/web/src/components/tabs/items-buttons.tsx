"use client";

import { Product, addProduct, resetQty, updateProduct, useStore } from "@/store";
import { Product as Products } from "@repo/prisma/generated/prisma-client";
import { Button } from "@repo/ui/src/components/ui/button";

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
          code_interne: item.code_interne!,
          famille_code: item.famille_code!,
          tva_code: item.tva_code!,
          pvht: item.pvht!,
          price: item.price!,
          total_pvht: qty * item.pvht!,
          total: qty * item.price!,
          quantity: qty,
          ticketNumber: null,
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
        variant={"tabs"}
        onClick={handleSubmit}
        className="w-full h-20 px-1 text-center truncate whitespace-pre-wrap rounded-lg shadow-md "
      >
        {item?.libelle}
      </Button>
    )
  );
};

export default ItemButton;
