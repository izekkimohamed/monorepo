import { SpecificTicket } from "@/store/specificTicket";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@repo/libs/utils";
import { format } from "date-fns";

export default function PrintSpecific({ data }: { data: SpecificTicket }) {
  const specificTicket = data;
  const products = specificTicket?.products;

  const tva_2 = products
    ?.filter((item) => item.tva_code === 2)
    .map((item) => {
      const totalPvht = item.pvht * item.quantity;
      return totalPvht * (20 / 100);
    })
    .reduce((acc, curr) => Number(acc + +curr), 0);

  const tva_1 = products
    ?.filter((item) => item.tva_code === 1)
    .map((item) => {
      const totalPvht = item.pvht * item.quantity;

      return totalPvht * (5.5 / 100);
    })
    .reduce((acc, curr) => Number(acc + +curr), 0);

  return (
    <div className="">
      <div className="text-lg font-bold text-center">
        <p>Ticket: {specificTicket?.number}</p>
        <p>
          {specificTicket &&
            format(new Date(specificTicket.createdAt), "dd/MM/yyyy HH:mm:ss")}
        </p>
      </div>
      {specificTicket && (
        <>
          <div>
            {specificTicket.products?.map((item, i) => (
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
          </div>
          <div className="px-4 py-2 text-xl font-bold border-gray-200 border-x">
            <div className="flex items-center justify-between gap-2">
              {specificTicket && specificTicket.products.length > 0 && (
                <>
                  <span className="">PVHT :</span>
                  <span className="">
                    {products &&
                      formatCurrency(
                        products.reduce(
                          (acc, curr) => acc + curr.pvht * curr.quantity,
                          0,
                        ),
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
          <div className="px-4 py-2 text-lg font-bold bg-gray-300">
            {specificTicket.paymentModes.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-2 ">
                <div className="text-start">{item.mode}</div>
                <div className="text-center">{formatCurrency(item.amount)}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2 px-4 py-2 text-lg font-bold bg-gray-950 text-gray-50">
            <span className="">Total :</span>
            <span className="">
              {formatCurrency(
                specificTicket.products.reduce((acc, curr) => acc + curr.total, 0),
              )}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
