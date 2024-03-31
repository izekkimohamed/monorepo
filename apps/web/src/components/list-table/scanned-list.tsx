"use client";
import { removeProduct, selectProduct, useStore } from "@/store";
import usePaymentStore from "@/store/paymentsMethods";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@repo/libs/utils";
import { PaymentEnum } from "@repo/prisma/client";
import { trpc } from "@repo/trpc/client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@repo/ui/src/components/ui/table";
import { Trash2 } from "lucide-react";

function ScannedList() {
  const { paymentMethods, setPaymentMethods } = usePaymentStore();
  // const remaining = useStore((state) => state.remaining);
  const { mutate: deleteProduct } = trpc.api.data.delete.useMutation();
  const { mutate: deletewaittingTicket } = trpc.api.waitting.delete.useMutation();
  const products = useStore((state) => state.products);
  const selectedProduct = useStore((state) => state.selectedProduct);

  const wattingTickets = products.filter((p) => p.waittingTicketsNumber !== undefined);
  const deleteFromList = (mode: PaymentEnum) => {
    setPaymentMethods(paymentMethods.filter((item) => item.mode !== mode));
  };

  const t = products.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);
  const r = paymentMethods.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const remaining = t - r;

  return paymentMethods.length > 0 ? (
    <Table className="h-full ">
      <TableBody className="w-full h-full">
        {paymentMethods.map((item, i) => (
          <TableRow
            key={i}
            className={cn(
              i % 2 === 0 ? "bg-gray-300" : "bg-gray-100",
              "font-bold text-lg w-full",
            )}
          >
            <TableCell className="">
              <Trash2
                onClick={() => {
                  deleteFromList(item.mode);
                  // setQty(1);
                }}
                className="text-red-500 cursor-pointer"
                size={20}
              />
            </TableCell>

            <TableCell colSpan={3}>{item.mode}</TableCell>
            <TableCell className="text-right">
              {item.amount.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter className="bg-primary hover:bg-primary text-gray-50">
        <TableRow className="h-full">
          <TableCell colSpan={4} className="text-lg font-semibold">
            Remaining
          </TableCell>
          <TableCell className="sticky bottom-0 text-2xl font-bold text-right ">
            {formatCurrency(remaining)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ) : (
    <Table className="h-full bg-gray-50">
      <TableBody className="h-full">
        {products.map((item, i) => (
          <TableRow
            key={i}
            onClick={() => {
              selectProduct(item);
            }}
            className={cn(
              i % 2 === 0 ? "bg-gray-300" : "bg-gray-100",
              "font-bold  grid  grid-cols-8 hover:bg-blue-200",
              selectedProduct?.code === item.code && "bg-blue-200 hover:bg-blue-200",
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
                className="text-red-700 cursor-pointer hover:text-red-500 "
                size={20}
              />
            </TableCell>
            <TableCell className="col-span-4 truncate text-start ">
              {item.libelle}
            </TableCell>
            <TableCell className="col-span-1 text-center">
              {formatCurrency(item.price!)}
            </TableCell>
            <TableCell className="col-span-1 text-center">{item.quantity}</TableCell>
            <TableCell className="col-span-1 text-center">
              {formatCurrency(item.total)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScannedList;
