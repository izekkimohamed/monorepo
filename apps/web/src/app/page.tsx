import Buttons from "@/components/buttons";
import ListTable from "@/components/list-table";
import Stats from "@/components/stats";
import Tabs from "@/components/tabs";
import { Toaster } from "@ui/components/ui/toaster";
export default function Page() {
  return (
    <div className="bg-primary max-h-screen h-screen">
      <Toaster />
      <div className="w-full h-full grid grid-cols-8 grid-rows-[60vh,auto] gap-y-1">
        <ListTable />
        <Buttons />
        <Tabs />
        <Stats />
      </div>
    </div>
  );
}
