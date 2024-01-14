import React from "react";
import TableHeader from "./table-header";
import TotalDiplay from "./total-display";
import ScannedList from "./scanned-list";

function ListTable() {
  return (
    <div className="bg-gray-50 overflow-auto col-span-4">
      <div className="sticky z-10 top-0 left-0 w-full">
        <TableHeader />
        <TotalDiplay />
      </div>
      <ScannedList />
    </div>
  );
}

export default ListTable;
