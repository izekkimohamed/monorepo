"use client";

import * as React from "react";

import { Loader, Search } from "lucide-react";

import { Product } from "@repo/prisma/generated/prisma-client";
import { trpc } from "@repo/trpc/client";
import { Checkbox } from "@repo/ui/src/components/ui/checkbox";
import { ScrollArea } from "@repo/ui/src/components/ui/scroll-area";
import { Input } from "@ui/components/ui/input";
import { Label } from "@ui/components/ui/label";
// import { Product } from "@/store";

const DataList = ({
  setItems,
  items,
}: {
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
  items: Product[];
}) => {
  const { data: products, isLoading } = trpc.api.product.list.useQuery();
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [search, setSearch] = React.useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search === "") {
      return;
    }
    const filtered = products?.filter(
      (product) =>
        product.libelle?.toLowerCase().includes(search) ||
        product.code?.toLowerCase().includes(search),
    );

    setFilteredProducts(filtered!);

    setSearch("");
  }

  return (
    <div className="col-span-1">
      <form onSubmit={(e) => handleSearch(e)}>
        <Label className="flex items-center gap-2 px-2 border-2 border-gray-300 rounded-md bg-gray-50 ">
          <Search className="w-5 h-5 text-zinc-400" />
          <Input
            placeholder="Search Product..."
            className="text-gray-700 border-none"
            value={search}
            disabled={isLoading}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        </Label>
      </form>

      <ScrollArea className="relative h-[400px]">
        <div className="grid h-full place-items-center">
          {isLoading && <Loader className="w-5 h-5 mt-10 text-center animate-spin" />}
          {filteredProducts &&
            filteredProducts.map((p) => (
              <div className="flex items-center gap-2 place-self-start" key={p.id}>
                <Checkbox
                  checked={items?.find((value) => value.id === p.id)?.id ? true : false}
                  onCheckedChange={(checked) => {
                    return checked
                      ? setItems([...items!, p!])
                      : setItems(items?.filter((value) => value.code !== p.code));
                  }}
                  id={p.libelle!}
                />
                <label className="font-bold truncate cursor-pointer" htmlFor={p.libelle!}>
                  {p.libelle}
                </label>
              </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
};
export default DataList;
