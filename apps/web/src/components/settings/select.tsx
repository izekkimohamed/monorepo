"use client";
import * as React from "react";

import { useSettingsStore } from "@/store/settings";
import { Product } from "@repo/prisma/generated/prisma-client";
import { trpc } from "@repo/trpc/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/src/components/ui/select";
import { Button } from "@ui/components/ui/button";
import { Input } from "@ui/components/ui/input";
import { ScrollArea } from "@ui/components/ui/scroll-area";
import { SheetClose } from "@ui/components/ui/sheet";
import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import DataList from "./dataList";

export function CategorySettings() {
  const { mutate: createTabs } = trpc.api.tabs.create.useMutation();
  const { mutate: addToTab } = trpc.api.tabs.addToTab.useMutation();
  const { mutate: removeFromTab } = trpc.api.tabs.removeFromTab.useMutation();
  const { data: listTabs } = trpc.api.tabs.list.useQuery();
  // const { tabs, addTab, addToTabProducts, removeFromTab } = useTabsStore();
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState<Product[]>([]);
  const [valueId, setValueId] = React.useState<string | null>(null);
  const toggle = useSettingsStore((state) => state.toggle);
  const router = useRouter();

  React.useEffect(() => {
    setItems(listTabs?.find((tab) => tab.id.toString() === valueId)?.products || []);
  }, [listTabs, valueId]);

  return (
    <div className="w-full space-y-3">
      <div className="w-full px-2 py-4 space-y-2 border border-gray-300 rounded-md bg-muted ">
        <h2 className="font-bold text-gray-900 ">Create Tab</h2>
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            // addTab(input.toUpperCase());
            createTabs({
              name: input.toUpperCase(),
            });
            setInput("");
          }}
        >
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border-2 border-primary"
            autoFocus
          />
          <Button size={"lg"} className="whitespace-nowrap" type="submit">
            Add Tab
          </Button>
        </form>
      </div>
      <div className="flex gap-2">
        <div className="w-1/2 gap-2 p-3 space-y-2 border border-gray-300 rounded-md bg-muted">
          <h2 className="px-1 font-bold text-gray-900">Add Products to Tab</h2>
          <Select
            onValueChange={(v) => {
              setItems([]);
              setValueId(v);
            }}
          >
            <SelectTrigger className="font-bold border-gray-300 border- h-11 ring-0">
              <SelectValue placeholder="Select a category" className="bg-gray-50" />
            </SelectTrigger>
            <SelectContent className="font-bold ">
              <SelectGroup>
                {listTabs?.map((tab) => (
                  <SelectItem
                    key={tab.id}
                    value={tab.id.toLocaleString()}
                    className="cursor-pointer"
                  >
                    {tab.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {valueId && <DataList setItems={setItems} items={items} />}
        </div>
        <ScrollArea className="relative w-1/2 h-[500px] border-2 border-gray-300 rounded-md bg-muted">
          <div className="p-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between p-2 my-1 font-bold text-center text-gray-100 border-2 rounded-md cursor-pointer bg-primary hover:bg-primary/90 "
              >
                <p>{item.libelle}</p>
                <XCircle
                  className="transition-all w-7 h-7 hover:text-red-500 "
                  onClick={() => {
                    removeFromTab({ id: item.id });
                    setItems((prev) => {
                      return prev.filter((p) => p !== item);
                    });
                  }}
                />
              </div>
            ))}{" "}
          </div>
        </ScrollArea>
      </div>
      <SheetClose className="float-right">
        {items && valueId && (
          <Button
            size={"lg"}
            onClick={() => {
              const newProducts = items.filter(
                (item) =>
                  !listTabs
                    ?.find((tab) => tab.id.toString() === valueId)
                    ?.products?.includes(item),
              );

              addToTab({
                id: +valueId,
                products: newProducts,
              });
              setItems([]);
              router.refresh();
            }}
          >
            Add
          </Button>
        )}
      </SheetClose>
    </div>
  );
}
