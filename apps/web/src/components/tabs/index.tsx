import Categories from "./categories-list";
import { useStore } from "@/store";

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../tabs/categories-list"), { ssr: false });

function Tabs() {
  return (
    <div className="col-span-6 max-w-full row-span-1 bg">
      <Categories />
    </div>
  );
}

export default Tabs;
