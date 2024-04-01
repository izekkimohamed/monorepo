import ScannedList from "./scanned-list";
import TableHeader from "./table-header";
import TotalDiplay from "./total-display";

function ListTable() {
  return (
    <div className="relative h-full col-span-3 overflow-auto bg-gradient-to-b from-primary from-40% to-gray-400 ">
      <div className="sticky top-0 left-0 z-10 w-full font-bold text-gray-100 bg-header">
        <TableHeader />
        <TotalDiplay />
      </div>
      <ScannedList />
    </div>
  );
}

export default ListTable;
