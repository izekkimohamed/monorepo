"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/src/components/ui/select";
import { trpc } from "@repo/trpc/client";
import { Button } from "@ui/components/ui/button";
import { Data, Products, Rayon } from "@repo/prisma/client";
import { XCircle } from "lucide-react";
import { DataList } from "./dataList";
import { useTabsStore } from "@/store/tabs";
import { Input } from "@ui/components/ui/input";
// import { trpc } from "@/trpc/client";
// import { Input } from "../ui/input";

// import { Button } from "../ui/button";
// import { DataList } from "./dataList";
// import { Rayon } from "@prisma/client";
// import { useLocalStorage } from "@/hooks/useLocalStorage";
// import { XCircle } from "lucide-react";

export function CategorySettings() {
  const { tabs, addTab, addToTabProducts } = useTabsStore();
  const [input, setInput] = React.useState("");
  // const { data: tabs } = trpc.listRayonTab.useQuery();
  // const [selectedRayons, setSelectedRayons] = React.useState<Rayon>();
  const [items, setItems] = React.useState<Products[]>([]);
  const [valueId, setValueId] = React.useState<string | null>(null);
  // const utils = trpc.useUtils();
  // const { mutate: updateTabs } = trpc.updateRayonTab.useMutation({
  //   onSuccess: () => {
  //     utils.listRayonTab.invalidate();
  //   },
  // });
  // const { data: categories } = trpc.listRayonTab.useQuery();
  // const { mutate: createRayon } = trpc.createRayonTab.useMutation();
  // const { mutate: updateRayon } = trpc.updateRayonTab.useMutation();

  // async function createTab(libelle: string, code: string) {
  //   // first check if the tab already exists
  //   const existingTab = categories?.find((tab) => tab.code === code);
  //   if (existingTab) {
  //     return existingTab;
  //   }
  //   return await createRayon({ libelle, code });
  // }
  // async function updateTab(id: number, products: string[]) {
  //   return await updateRayon({ id, products });
  // }
  // const { data: rayonsList } = trpc.listRayons.useQuery();

  // async function handleTabsUpdate() {
  //   if (!selectedRayons) return;
  //   const tab = await createTab(
  //     selectedRayons.libelle!,
  //     selectedRayons.code.toLocaleString(),
  //   );
  //   setSelectedRayons(undefined);
  // }

  // async function handleUpdate() {
  //   if (!valueId || !items.length) return;

  //   updateTabs({
  //     id: +valueId,
  //     products: items,
  //   });
  //   setItems([]);
  //   setValueId(null);
  // }
  // const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    useTabsStore.persist.rehydrate();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full px-6">
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
            className=" border-2 w-full"
          />
          <Button type="submit">Ajouter</Button>
        </form>
      </div>
      <>
        <div className="grid grid-cols-2 items-center gap-2 w-full">
          <Select
            onValueChange={(v) => {
              setItems([]);
              setValueId(v);
            }}
          >
            <SelectTrigger className="border-2 bg-muted border-gray-300 font-bold ring-0">
              <SelectValue placeholder="Select a category" />
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

          {valueId && (
            <>
              <DataList setItems={setItems} items={items} />
            </>
          )}
        </div>
        <div className="flex mt-4 flex-wrap gap-2 mb-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-2 rounded-md border-2 font-bold cursor-pointer bg-primary hover:bg-primary/90 text-gray-100 relative "
            >
              <p>{item.libelle}</p>
              <XCircle
                className="w-5 h-5 -top-2 -right-2 absolute rounded-full bg-red-500 hidden group-hover:block transition-all "
                onClick={() => {
                  setItems((prev) => {
                    return prev.filter((p) => p !== item);
                  });
                }}
              />
            </div>
          ))}{" "}
        </div>
        {items && valueId && (
          <Button
            onClick={() => {
              addToTabProducts(+valueId, items);
              setItems([]);
            }}
          >
            Add
          </Button>
        )}
      </>
    </div>
  );
}

/*
to create tabs with rayon list

  const { data: rayonsList } = trpc.listRayons.useQuery();
  const { createTab } = useLocalStorage();

  async function handleTabsUpdate() {
    if (!selectedRayons) return;
    const tab = await createTab(
      selectedRayons.libelle!,
      selectedRayons.code.toLocaleString(),
    );
    setSelectedRayons(undefined);
  }

<div className="flex gap-2">
        <Select
          onValueChange={(v) => {
            setSelectedRayons(
              rayonsList?.find((rayon) => rayon.code.toString() === v),
            );
          }}
        >
          <SelectTrigger className="border-2 border-black ring-0">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {rayonsList
                ?.filter((rayon) => {
                  return !tabs?.find(
                    (tab) => tab.code === rayon.code.toLocaleString(),
                  );
                })
                .map((rayon) => (
                  <SelectItem
                    key={rayon.code}
                    value={rayon.code.toLocaleString()}
                    className=""
                  >
                    {rayon.libelle}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={handleTabsUpdate} className="">
          Add Category
        </Button>
      </div>

*/
