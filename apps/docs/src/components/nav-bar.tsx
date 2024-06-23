"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavrBar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full gap-4 p-4 font-bold text-gray-400 rounded-md">
      <h1 className="text-3xl font-semibold text-gray-50">Logo</h1>
      <div className="flex flex-col gap-2">
        <Link href="/" className={pathname === "/" ? "text-gray-50" : ""}>
          Home
        </Link>
        <Link href="/clients" className={pathname === "/clients" ? "text-gray-50" : ""}>
          Clients
        </Link>
        <Link href="/products" className={pathname === "/projects" ? "text-gray-50" : ""}>
          Products
        </Link>
      </div>
    </div>
  );
}

export default NavrBar;
