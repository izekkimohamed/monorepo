import React from "react";
import TableHeader from "./table-header";
import TotalDiplay from "./total-display";
import ScannedList from "./scanned-list";

function ListTable() {
  return (
    <div className="relative h-full col-span-4 overflow-auto bg-gray-50">
      <div className="sticky top-0 left-0 z-10 w-full">
        <TableHeader />
        <TotalDiplay />
      </div>
      <ScannedList />
    </div>
  );
}

export default ListTable;
