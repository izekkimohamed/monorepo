"use client";
import * as React from "react";

import { useTabsStore } from "@/store/tabs";
import { Products } from "@repo/prisma/client";
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
import { XCircle } from "lucide-react";
import DataList from "./dataList";

export function CategorySettings() {
  const { tabs, addTab, addToTabProducts } = useTabsStore();
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState<Products[]>([]);
  const [valueId, setValueId] = React.useState<string | null>(null);

  return (
    <div className="w-full  px-6 space-y-3">
      <div className="w-full py-4 space-y-2 px-1  bg-muted border border-gray-300 rounded-md ">
        <h2 className="font-bold text-gray-900  ">Create Tab</h2>
        <form
          className="w-full flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            addTab(input.toUpperCase());
            setInput("");
          }}
        >
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=" border-2 border-primary w-full"
            autoFocus
          />
          <Button type="submit">Ajouter</Button>
        </form>
      </div>
      <div className="flex gap-2">
        <div className="w-1/2  bg-muted border border-gray-300 space-y-2 gap-2 p-3 rounded-md">
          <h2 className="font-bold text-gray-900 px-1">Add Products to Tab</h2>
          <Select
            onValueChange={(v) => {
              setItems([]);
              setValueId(v);
            }}
          >
            <SelectTrigger className="border- h-11 border-gray-300  font-bold ring-0">
              <SelectValue
                placeholder="Select a category"
                className="bg-gray-50"
              />
            </SelectTrigger>
            <SelectContent className="font-bold ">
              <SelectGroup>
                {tabs?.map((tab) => (
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
        <ScrollArea className="h-[400px] w-1/2 bg-muted rounded-md border-gray-300 border-2 relative">
          <div className="p-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-2 my-1 text-center rounded-md border-2 font-bold cursor-pointer bg-primary hover:bg-primary/90 text-gray-100 flex justify-between "
              >
                <p>{item.libelle}</p>
                <XCircle
                  className="w-7 h-7 hover:text-red-500 transition-all "
                  onClick={() => {
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
      {items && valueId && (
        <Button
          onClick={() => {
            addToTabProducts(+valueId, items);
            setItems([]);
          }}
          className="absolute bottom-0 right-0"
        >
          Add
        </Button>
      )}
    </div>
  );
}
