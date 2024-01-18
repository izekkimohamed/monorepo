"use client";
import { useTabsStore } from "@/store/tabs";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
import { useEffect, useState } from "react";
import ItemButton from "./items-buttons";

const Categories = () => {
  const { tabs } = useTabsStore();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    useTabsStore.persist.rehydrate();
    setMount(true);
  }, []);

  return (
    <div className="relative h-full">
      {mount && (
        <Tabs defaultValue={tabs[0]?.name} className="w-full h-full">
          <TabsList className="sticky top-0 flex justify-between w-full h-16 mb-1 bg-primary ">
            {tabs &&
              tabs?.map((category, i) => (
                <TabsTrigger
                  className="text-base font-bold text-primary border-x border-primary "
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
                className="grid grid-cols-5 gap-1 px-0 py-1 "
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
    </div>
  );
};

export default Categories;
