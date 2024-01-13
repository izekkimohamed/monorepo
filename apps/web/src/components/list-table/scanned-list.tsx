"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@repo/ui/src/components/ui/table";
import { Trash2 } from "lucide-react";
import { cn } from "@repo/libs/utils";

function ScannedList() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const ticketMethods = [];
  const [selectedItem, setSelectedItem] = React.useState(1);
  const [qty, setQty] = React.useState(1);
  const deleteData = (code: string) => "";
  const deleteFromList = (code: string) => "";
  const remaining = 100;

  return (
    <Table className="bg-gray-50 h-full">
      <TableBody className="h-full">
        {data.map((item, i) => (
          <TableRow
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(item);
            }}
            className={cn(
              i % 2 === 0 ? "bg-gray-300" : "bg-gray-100",
              "font-bold text-lg grid  grid-cols-8 hover:bg-blue-200",
              // selectedItem?.code === item.code &&
              //   "bg-blue-200 hover:bg-blue-200",
            )}
          >
            <TableCell className="col-span-1 text-center">
              <Trash2
                onClick={() => {
                  deleteData(item.code);
                  setQty(1);
                }}
                className="text-red-500 cursor-pointer"
                size={20}
              />
            </TableCell>
            <TableCell className="truncate col-span-4 text-start ">
              {/* {item.libelle} */}
              libelle
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {/* {item.price} */}
              2.00
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {/* {item.quantity} */}3
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {/* {item.total} */}
              6.00
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScannedList;
