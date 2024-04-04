"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/src/components/ui/sheet";

import { setScannedCode } from "@/store";
import { useSettingsStore } from "@/store/settings";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
import ListClients from "../clients/ListClients";
import ProductForm from "./productSettings";
import { CategorySettings } from "./select";

function Setting() {
  const setActive = useSettingsStore((state) => state.toggle);

  return (
    <Sheet
      onOpenChange={() => {
        setActive();
        setScannedCode("");
      }}
    >
      <SheetTrigger asChild>
        <Button variant={"custome"} size={"full"}>
          Settings
        </Button>
      </SheetTrigger>

      <SheetContent className="pt-10 " side={"right"}>
        <Tabs
          defaultValue="tabs"
          orientation="vertical"
          className="relative w-full h-full space-y-2"
        >
          <TabsList
            aria-orientation="horizontal"
            className="flex items-start h-16 gap-2 font-semibold rounded-md bg-muted "
          >
            <TabsTrigger
              value="tabs"
              className="px-3 py-2 data-[state=active]:text-white border-none  text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md"
            >
              tabs
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="px-3 py-2 data-[state=active]:text-white border-none  text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md"
            >
              products
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="px-3 py-2 data-[state=active]:text-white border-none  text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md"
            >
              Clients
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tabs" className="">
            <CategorySettings />
          </TabsContent>
          <TabsContent value="products" className="">
            <ProductForm />
          </TabsContent>
          <TabsContent value="clients" className="">
            <ListClients />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

export default Setting;
