"use client";

import { formatCurrency } from "@/app/page";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const LineChartComponent = () => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 0, right: 5, left: -10, bottom: -10 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#c292e9" stopOpacity={1} />
              <stop offset="80%" stopColor="#8884d8" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontSize: ".9rem",
              fontStyle: "italic",
              fontWeight: "600",
              textAnchor: "middle",
            }}
            alignmentBaseline="central"
            className=""
          />
          <YAxis
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontSize: ".9rem",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          />
          <CartesianGrid
            fill="transparent"
            strokeOpacity={0.2}
            horizontalCoordinatesGenerator={(props) => [75, 150, 225]}
            strokeDasharray="1"
            verticalCoordinatesGenerator={(props) =>
              props.width > 450 ? [100, 250, 400, 550] : [200, 400]
            }
            strokeWidth={1}
            vertical={false}
          />

          <Tooltip
            wrapperStyle={{
              width: "max-content",
              background: " #111827",
              color: "black",
              borderRadius: "10px",
              border: "none",
            }}
            contentStyle={{
              color: "white",
              background: "#111827",
              borderRadius: "10px",
              border: "none",
            }}
            cursor={false}
            labelStyle={{ fontWeight: "bold", fontSize: "1rem" }}
            itemStyle={{
              color: "white",

              fontWeight: "bold",
              fontSize: "1rem",
            }}
            formatter={(value: number) => formatCurrency(value)}
          />

          <Line
            dot={false}
            type="monotone"
            dataKey="Total"
            strokeWidth={2}
            stroke="url(#total)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
