"use client";
import { removeProduct, selectProduct, useStore } from "@/store";
import { cn } from "@repo/libs/utils";
import { trpc } from "@repo/trpc/client";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@repo/ui/src/components/ui/table";
import { Trash2 } from "lucide-react";

function ScannedList() {
  const { mutate: deleteProduct } = trpc.deleteData.useMutation();
  const { mutate: deletewaittingTicket } =
    trpc.deleteWaittingTickets.useMutation();
  const products = useStore((state) => state.products);
  const selectedProduct = useStore((state) => state.selectedProduct);

  const wattingTickets = products.filter(
    (p) => p.waittingTicketsNumber !== undefined,
  );

  return (
    <Table className="bg-gray-50 h-full">
      <TableBody className="h-full">
        {products.map((item, i) => (
          <TableRow
            key={i}
            onClick={() => {
              selectProduct(item);
            }}
            className={cn(
              i % 2 === 0 ? "bg-gray-300" : "bg-gray-100",
              "font-bold text-lg grid  grid-cols-8 hover:bg-blue-200",
              selectedProduct?.code === item.code &&
                "bg-blue-200 hover:bg-blue-200",
            )}
          >
            <TableCell className="col-span-1 text-center">
              <Trash2
                onClick={() => {
                  if (item.id) {
                    if (wattingTickets.length <= 1) {
                      deletewaittingTicket(item.waittingTicketsNumber!);
                    }
                    deleteProduct(item.id);
                    removeProduct(item);
                    // setQty(1);}
                  } else {
                    removeProduct(item);
                  }
                }}
                className="text-red-500 cursor-pointer"
                size={20}
              />
            </TableCell>
            <TableCell className="truncate col-span-4 text-start ">
              {item.libelle}
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {item.price}
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {item.quantity}
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {item.total}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScannedList;
