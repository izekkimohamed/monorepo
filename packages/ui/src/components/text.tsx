import React from "react";
import { cn } from "@repo/libs/src";

export const Test = () => {
  const active = true;
  return (
    <div
      className={cn("bg-red-300 p-4 rounded w-1/2", active && "bg-green-300")}
    >
      <h1 className="text-primary font-bold text-3xl">Test</h1>
    </div>
  );
};
