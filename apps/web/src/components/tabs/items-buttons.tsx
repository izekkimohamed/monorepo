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

function ItemButton({ code }: { code: string }) {
  const { qty, products } = useStore();
  const { data } = trpc.scannedProduct.useQuery({ code });
  const handleSubmit = () => {
    if (data) {
      if (products.find((product) => product.code === data.code)) {
        updateProduct(data.code!);
      } else {
        const tempData: Product = {
          libelle: data.libelle!,
          code: data.code!,
          famille_code: data.famille_code!,
          tva_code: data.tva_code!,
          pvht: data.pvht!,
          price: data.pvttc!,
          totalPvht: qty * data.pvht!,
          total: qty * data.pvttc!,
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
    data && (
      <Button
        variant={"secondary"}
        onClick={handleSubmit}
        className="text-balance rounded-md border-2 border-primary text-primary h-16 w-full font-bold "
      >
        <span>{data?.libelle}</span>
      </Button>
    )
  );
}

export default ItemButton;
