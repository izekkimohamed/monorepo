"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/src/components/ui/sheet";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
import { useStore } from "@/store";

// import { trpc } from "@/trpc/client";
// import ListClients from "../clients/ListClients";
// import ProductForm from "./productSettings";
// import { CategorySettings } from "./select";

function Setting() {
  // const { data: tabsProducts } = trpc.listRayonTab.useQuery();
  const inputRef = useStore((state) => state.inputRef);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-full row-span-1 bg-[#009f55] rounded">
          Settings
        </Button>
      </SheetTrigger>

      <SheetContent className="px-2 py-4">
        <SheetHeader>
          <SheetTitle className="text-center text-4xl font-bold text-primary font-sans">
            Settings
          </SheetTitle>
        </SheetHeader>
        <Tabs
          defaultValue="tabs"
          orientation="vertical"
          className="w-full h-full"
        >
          <TabsList className="font-semibold flex my-3 rounded-md border-2 border-gray-200 p-1 gap-2 items-start bg-muted ">
            <TabsTrigger
              value="tabs"
              className="px-3 py-2 data-[state=active]:text-white  text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md"
            >
              tabs
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="px-3 py-2 data-[state=active]:text-white  text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md"
            >
              products
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="px-3 py-2 data-[state=active]:text-white  text-gray-950 data-[state=active]:bg-black  cursor-pointer w-full rounded-md"
            >
              Clients
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="w-full h-full">
            {/* <ProductForm /> */}
          </TabsContent>
          <TabsContent value="clients" className="w-full">
            {/* <ListClients /> */}
          </TabsContent>
          <TabsContent value="tabs" className="w-full">
            {/* <CategorySettings /> */}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

export default Setting;
