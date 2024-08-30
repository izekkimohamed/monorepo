import { serverClient as trpc } from "@repo/trpc/server";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/src/components/ui/tabs";
import ItemButton from "./items-buttons";

const Categories = async () => {
  const tabs = await trpc.api.tabs.list.query();
  // const [mount, setMount] = useState(false);

  // useEffect(() => {
  //   useTabsStore.persist.rehydrate();
  //   setMount(true);
  // }, []);

  return (
    <div className="relative h-full">
      {tabs && (
        <Tabs defaultValue={tabs[0].name || ""} className="w-full h-full">
          <TabsList className="sticky top-0 z-20 flex justify-between w-full h-16 mb-1 border-b-2 border-primary ">
            {tabs &&
              tabs?.map((category, i) => (
                <TabsTrigger
                  className="text-base font-bold transition-all duration-300 ease-in-out border text-primary border-primary"
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
                className="grid grid-cols-7 gap-1 px-0 py-1 "
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
