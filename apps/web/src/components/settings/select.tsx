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
// import { trpc } from "@/trpc/client";
// import { Input } from "../ui/input";

// import { Button } from "../ui/button";
// import { DataList } from "./dataList";
// import { Rayon } from "@prisma/client";
// import { useLocalStorage } from "@/hooks/useLocalStorage";
// import { XCircle } from "lucide-react";

export function CategorySettings() {
  // const { data: tabs } = trpc.listRayonTab.useQuery();
  // const [items, setItems] = React.useState<string[]>([]);
  // const [valueId, setValueId] = React.useState<string | null>(null);
  // const utils = trpc.useUtils();
  // const { mutate: updateTabs } = trpc.updateRayonTab.useMutation({
  //   onSuccess: () => {
  //     utils.listRayonTab.invalidate();
  //   },
  // });

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

  return (
    <div className="w-full">
      {/* <>
        <div className="grid grid-cols-2 items-center gap-2 w-full">
          <Select
            onValueChange={(v) => {
              setItems([]);
              setValueId(v);
              inputRef.current?.focus();
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
                    {tab.libelle}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {valueId && (
            <>
              <DataList
                setItems={setItems}
                items={items}
                code={tabs?.find((t) => t.id == +valueId)?.code!}
              />
            </>
          )}
        </div>
        <div className="flex mt-4 flex-wrap gap-2 mb-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-2 rounded-md border-2 font-bold cursor-pointer bg-primary hover:bg-primary/90 text-gray-100 relative "
            >
              <p>{item}</p>
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
        <Button
          onClick={handleUpdate}
          disabled={!valueId || !items.length}
          className="border"
        >
          Add
        </Button>
      </> */}
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
