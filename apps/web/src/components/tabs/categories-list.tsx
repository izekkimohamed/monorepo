"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
import { serverClient } from "@repo/trpc/server";
import ItemButton from "./items-buttons";
import { useTabsStore } from "@/store/tabs";
import { Button } from "@ui/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@ui/components/ui/input";
import { useStore } from "@/store";
// import TabButton from "./tabButton";

const Categories = () => {
  // const categories = await serverClient.listRayonTab();

  // const sortedCategories = categories.toSorted((a, b) => a.id - b.id);
  const { tabs } = useTabsStore();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    useTabsStore.persist.rehydrate();
    setMount(true);
  }, []);

  return (
    <>
      {mount && (
        <Tabs defaultValue={tabs[0].name} className="w-full relative h-full">
          <TabsList className="flex  justify-between h-16 sticky top-0 w-full bg-primary mb-1 ">
            {tabs &&
              tabs?.map((category, i) => (
                <TabsTrigger
                  className="font-bold text-lg text-primary border-x border-primary "
                  value={category?.name!}
                  key={i}
                >
                  {category.name}
                </TabsTrigger>
              ))}
          </TabsList>
          {tabs &&
            tabs?.map((category, i) => (
              <TabsContent
                value={category?.name!}
                key={i}
                className="px-0 grid grid-cols-4 gap-1 "
              >
                {category.products.map((item, i) => (
                  <div key={i} className="w-full">
                    <ItemButton item={item} />
                  </div>
                ))}
              </TabsContent>
            ))}
        </Tabs>
      )}
    </>
  );
};

export default Categories;
