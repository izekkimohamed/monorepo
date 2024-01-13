import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
import { serverClient } from "@repo/trpc/server";
import ItemButton from "./items-buttons";
// import TabButton from "./tabButton";

async function Categories() {
  const categories = await serverClient.listRayonTab();

  const sortedCategories = categories.toSorted((a, b) => a.id - b.id);

  return (
    <Tabs defaultValue="EPICERIE" className="w-full relative h-full">
      <TabsList className="flex  justify-between h-16 sticky top-0 w-full bg-primary mb-1 ">
        {sortedCategories &&
          sortedCategories?.map((category, i) => (
            <TabsTrigger
              className="font-bold text-lg text-primary border-x border-primary "
              value={category?.libelle!}
              key={i}
            >
              {category.libelle}
            </TabsTrigger>
          ))}
      </TabsList>
      {categories &&
        categories?.map((category, i) => (
          <TabsContent
            value={category?.libelle!}
            key={i}
            className="px-0 grid grid-cols-4 gap-1 "
          >
            {category.products.map((item, i) => (
              <div key={i} className="w-full">
                <ItemButton code={item} />
              </div>
            ))}
          </TabsContent>
        ))}
    </Tabs>
  );
}

export default Categories;
