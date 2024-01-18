"use client";

import {
  Product,
  addProduct,
  resetQty,
  updateProduct,
  useStore,
} from "@/store";
import { Products } from "@repo/prisma/client";
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
        className="w-full h-20 px-1 text-xs font-bold text-center truncate whitespace-pre-wrap border-2 rounded-md border-primary text-primary "
      >
        {item?.libelle}
      </Button>
    )
  );
};

export default ItemButton;
