import Buttons from "@/components/buttons";
import ListTable from "@/components/list-table";
import Stats from "@/components/stats";
import Tabs from "@/components/tabs";
export default function Page() {
  return (
    <div className="bg-red-500 max-h-screen h-screen">
      <div className="w-full h-full grid grid-cols-4 grid-rows-2">
        <ListTable />
        <Buttons />
        <Tabs />
        <Stats />
      </div>
    </div>
  );
}
