import Buttons from "@/components/buttons";
import ListTable from "@/components/list-table";
import Tabs from "@/components/tabs";
import { Toaster } from "@ui/components/ui/toaster";
export default function Page() {
  return (
    <div className="h-screen max-h-screen bg-primary">
      <Toaster />
      <div className="w-full h-full grid grid-cols-8 grid-rows-[65vh,auto] ">
        <ListTable />
        <Buttons />
        <Tabs />
      </div>
    </div>
  );
}
