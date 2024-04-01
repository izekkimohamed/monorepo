"use client";

import { trpc } from "@repo/trpc/client";

export default function Page() {
  const data = trpc.api.ticket.list.useQuery();
  return (
    <>
      <div className="col-span-1 ">dashboard</div>
      <div className="col-span-1 "> table</div>
      {JSON.stringify(data, null, 2)}
    </>
  );
}
