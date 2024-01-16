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
import { ScrollArea } from "@repo/ui/src/components/ui/scroll-area";
import { Data, Products } from "@repo/prisma/client";
import getProductsByRayon from "@/actions/getProductsByRayon";
import { trpc } from "@repo/trpc/client";

export function DataList({
  setItems,
  items,
}: {
  setItems: React.Dispatch<React.SetStateAction<Products[]>>;
  items: Products[];
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { data: products } = trpc.listProducts.useQuery();

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
                {products?.map((product) => (
                  <CommandItem
                    key={product.id}
                    value={product.libelle!}
                    className="text-gray-950 cursor-pointer"
                  >
                    <div className="flex gap-2 items-center ">
                      <Checkbox
                        checked={
                          items?.find((value) => value.id === product.id)?.id
                            ? true
                            : false
                        }
                        onCheckedChange={(checked) => {
                          return checked
                            ? setItems([...items!, product!])
                            : setItems(
                                items?.filter(
                                  (value) => value.code !== product.code,
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
