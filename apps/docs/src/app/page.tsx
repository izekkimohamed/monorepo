import LineChartComponent from "@/components/line-charts";
import PieChartComponent from "@/components/pie-chart";
import { prisma } from "@repo/prisma/src";
import {} from "recharts";
export function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
export default async function Page() {
  const data = await prisma.ticket.aggregate({
    _sum: { total: true },
  });
  console.log(data);
  return (
    <div className="grid h-full grid-rows-8 gap-y-3">
      <div className="grid grid-cols-3 row-span-4 gap-4 ">
        <div className="col-span-2 card-blur from-[#8884d82e]  to-[#c292e941]">
          <h1 className="p-4 font-sans text-5xl font-bold text-gray-50">
            {formatCurrency(data._sum.total!)}
          </h1>
          <LineChartComponent />
        </div>
        <div className="col-span-1 card-blur bg-[#8884d82e]">
          <PieChartComponent />
        </div>
      </div>
      <div className="row-span-2">
        <div className="h-full card-blur"></div>
      </div>
      <div className="grid grid-cols-3 row-span-2 gap-3">
        <div className="h-full card-blur"></div>
        <div className="h-full card-blur"></div>
        <div className="h-full card-blur"></div>
      </div>
    </div>
  );
}
