"use client";

import * as React from "react";

import { Search } from "lucide-react";

import { getProducts } from "@/actions/getProducts";
import { Products } from "@repo/prisma/client";
import { Checkbox } from "@repo/ui/src/components/ui/checkbox";
import { ScrollArea } from "@repo/ui/src/components/ui/scroll-area";
import { Input } from "@ui/components/ui/input";
import { Label } from "@ui/components/ui/label";

const DataList = ({
  setItems,
  items,
}: {
  setItems: React.Dispatch<React.SetStateAction<Products[]>>;
  items: Products[];
}) => {
  const [products, setProducts] = React.useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<Products[]>([]);
  const [search, setSearch] = React.useState("");
  async function getData() {
    const data = await getProducts();
    setProducts(data);
  }
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search === "") {
      return;
    }
    const filtered = products.filter(
      (product) =>
        product.libelle?.toLowerCase().includes(search) ||
        product.code?.toLowerCase().includes(search),
    );

    setFilteredProducts(filtered);

    setSearch("");
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="col-span-1 ">
      <form onSubmit={(e) => handleSearch(e)}>
        <Label className="flex items-center gap-2 px-2 border-2 border-gray-300 rounded-md bg-gray-50 ">
          <Search className="w-5 h-5 text-zinc-400" />
          <Input
            placeholder="Search Product..."
            className="text-gray-700 border-none"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        </Label>
      </form>
      <div>
        <ScrollArea className="h-[250px] p-2 pb-0 relative">
          {filteredProducts &&
            filteredProducts.map((p) => (
              <div className="flex items-center gap-2 " key={p.id}>
                <Checkbox
                  checked={items?.find((value) => value.id === p.id)?.id ? true : false}
                  onCheckedChange={(checked) => {
                    return checked
                      ? setItems([...items!, p!])
                      : setItems(items?.filter((value) => value.code !== p.code));
                  }}
                  id={p.libelle!}
                />
                <label className="font-bold truncate" htmlFor={p.libelle!}>
                  {p.libelle}
                </label>
              </div>
            ))}
        </ScrollArea>
      </div>
    </div>
  );
};
export default DataList;
