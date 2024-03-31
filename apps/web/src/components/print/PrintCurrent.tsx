import { useStore } from "@/store";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@repo/libs/utils";
import { format } from "date-fns";

export default function PrintCurrent() {
  const products = useStore((state) => state.products);

  const tva_2 = products
    .filter((item) => item.tva_code === 2)
    .map((item) => {
      return item.total_pvht * (20 / 100);
    })
    .reduce((acc, curr) => Number(acc + +curr), 0);

  const tva_1 = products
    .filter((item) => item.tva_code === 1)
    .map((item) => {
      return item.total_pvht * (5.5 / 100);
    })
    .reduce((acc, curr) => Number(acc + +curr), 0);
  return (
    <>
      <div className="font-bold text-center">
        <h1>Ticket # </h1>
        <h1>{format(new Date(), "dd-MM-yyyy hh:mm")}</h1>
      </div>

      {products.map((item, i) => (
        <div
          key={i}
          className={cn(
            i % 2 === 0 ? "bg-gray-300" : "bg-gray-100",
            "font-bold px-5 items-center justify-center grid  grid-cols-8",
          )}
        >
          <div className="col-span-5 truncate text-start ">{item.libelle}</div>
          <div className="col-span-1 text-center">{formatCurrency(item.price)}</div>
          <div className="col-span-1 text-center">{item.quantity}</div>
          <div className="col-span-1 text-center">{formatCurrency(item.total)}</div>
        </div>
      ))}
      <div className="px-10 text-lg font-bold text-gray-950">
        <div className="px-4 ">
          <div className="flex items-center justify-between gap-2">
            {products.length > 0 && (
              <>
                <span className="">PVHT :</span>
                <span className="">
                  {products &&
                    formatCurrency(
                      products.reduce((acc, curr) => acc + +curr.total_pvht, 0),
                    )}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center justify-between gap-2">
            {tva_2 ? (
              <>
                <span className="">TVA 20% :</span>
                <span className="">{formatCurrency(tva_2)}</span>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex items-center justify-between gap-2">
            {tva_1 ? (
              <>
                <span className="">TVA 5.5% :</span>
                <span className="">{formatCurrency(tva_1)}</span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 px-4">
          <span className="">Total :</span>
          <span className="">
            {products &&
              formatCurrency(products.reduce((acc, curr) => acc + +curr.total, 0))}
          </span>
        </div>
      </div>
    </>
  );
}
