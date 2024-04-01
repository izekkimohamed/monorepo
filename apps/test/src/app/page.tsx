"use client";

import { getProduct } from "@/actions/getProduct";
import { useEffect, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState<string>("");
  const [products, setProducts] = useState<any>();
  const [ticket, setTicket] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const data = await getProduct(number);
      if (data) {
        setProducts(data.product);
        console.log(data);
      }
    };
    getData();
  }, [ticket]);
  return (
    <div className="grid h-screen text-gray-100 bg-gray-800 place-items-center">
      <div>
        <h1 className="text-3xl font-bold">Ticket</h1>
        {products && <pre>{JSON.stringify(products, null, 2)}</pre>}
        <input
          className="w-full px-4 py-2 mt-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter ticket number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => setTicket(number)}
        >
          Set Ticket
        </button>
      </div>
    </div>
  );
}
