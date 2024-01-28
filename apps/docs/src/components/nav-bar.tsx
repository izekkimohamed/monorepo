"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@repo/libs/utils";

function NavrBar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center w-full p-3 font-bold text-gray-400 border-b border-gray-600 gap-7 bg-white/5 backdrop-blur-[2px]">
      <Link
        className={cn(
          "",

          pathname === "/" &&
            "text-gray-200 font-semibold underline underline-offset-4",
        )}
        href="/"
      >
        Dashboard
      </Link>
      <Link
        className={cn(
          "",

          pathname === "/clients" &&
            "text-gray-200 font-semibold underline underline-offset-4",
        )}
        href="/clients"
      >
        Clients
      </Link>
      <Link
        className={cn(
          "",

          pathname === "/products" &&
            "text-gray-200 font-semibold underline underline-offset-4",
        )}
        href="/products"
      >
        Products
      </Link>
    </div>
  );
}

export default NavrBar;
