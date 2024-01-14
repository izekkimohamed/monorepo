import React from "react";

import Categories from "./categories-list";
import { useStore } from "@/store";

function Tabs() {
  return (
    <div className="col-span-6 max-w-full row-span-1 bg">
      <Categories />
    </div>
  );
}

export default Tabs;
