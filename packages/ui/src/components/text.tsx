import React from "react";
import { cn } from "@repo/libs/src";

export const Test = () => {
  const active = true;
  return (
    <div className={cn("bg-red-300", active && "bg-green-300")}>
      test test test test
    </div>
  );
};
