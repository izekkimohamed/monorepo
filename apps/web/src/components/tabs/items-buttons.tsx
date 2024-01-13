"use client";
import { trpc } from "@repo/trpc/client";

// import { useGlobalStore } from "@/store";
// import { getProduct } from "@/lib/handleTotal";
import { Button } from "@repo/ui/src/components/ui/button";

function ItemButton({ code }: { code: string }) {
  // const { setData, qty } = useGlobalStore();
  const { data } = trpc.scannedProduct.useQuery({ code });
  return (
    data && (
      <Button
        variant={"secondary"}
        onClick={async () => {
          // getProduct(code, data!, qty);
        }}
        className="text-balance rounded-md border-2 border-primary text-primary h-16 w-full font-bold "
      >
        <span>{data?.libelle}</span>
      </Button>
    )
  );
}

export default ItemButton;
