"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/src/components/ui/sheet";

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
    <Sheet onOpenChange={setActive}>
      <SheetTrigger asChild>
        <Button variant={"action"} size={"full"}>
          Settings
        </Button>
      </SheetTrigger>

      <SheetContent className="h-full px-2" side={"right"}>
        <SheetHeader>
          <SheetTitle className="font-sans text-4xl font-bold text-center text-primary">
            Settings
          </SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="tabs" orientation="vertical" className="w-full h-full ">
          <TabsList
            aria-orientation="horizontal"
            className="flex items-start gap-2 p-1 my-3 font-semibold border-2 border-gray-200 rounded-md bg-muted "
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
          <TabsContent value="products" className="relative block w-full h-full ">
            <ProductForm />
          </TabsContent>
          <TabsContent value="clients" className="relative block w-full h-full ">
            <ListClients />
          </TabsContent>
          <TabsContent value="tabs" className="relative flex w-full h-full">
            <CategorySettings />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

export default Setting;
