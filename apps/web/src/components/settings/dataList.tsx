"use client";

import * as React from "react";

import { Button } from "@repo/ui/src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@repo/ui/src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/src/components/ui/popover";
import { ChevronDown, SortAscIcon } from "lucide-react";

import { Checkbox } from "@repo/ui/src/components/ui/checkbox";
// import getProductsByRayon from "@/actions/getProductsByRayon";
// import { Products } from "@prisma/client";
import { ScrollArea } from "@repo/ui/src/components/ui/scroll-area";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function DataList({
  setItems,
  items,
  code,
}: {
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  items: string[];
  code: string | null;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [products, setProducts] = React.useState<Products[]>([]);

  // async function getProducts() {
  //   if (!code) return;

  //   const products = await getProductsByRayon(+code);
  //   setProducts(products);
  // }

  // React.useEffect(() => {
  //   getProducts();
  // }, [code]);

  return (
    <div className="w-full col-span-1">
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-muted border-2 border-gray-300 font-bold"
          >
            Select Product
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <ScrollArea className="h-[300px] relative">
              <CommandGroup className="">
                {products.map((product) => (
                  <CommandItem
                    key={product.code}
                    value={product.libelle!}
                    className="text-gray-950 cursor-pointer"
                  >
                    <div className="flex gap-2 items-center ">
                      <Checkbox
                        checked={items?.includes(product.code!)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? setItems([...items, product.code!])
                            : setItems(
                                items?.filter(
                                  (value) => value !== product.code,
                                ),
                              );
                        }}
                        id={product.libelle!}
                      />
                      <label
                        className="font-bold truncate"
                        htmlFor={product.libelle!}
                      >
                        {product.libelle}
                      </label>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
