"use client";
import { Button } from "@repo/ui/src/components/ui/button";

import { trpc } from "@repo/trpc/client";

export default function Page() {
  const { data: tabs } = trpc.listRayonTab.useQuery();

  return (
    <div className="bg-card-foreground px-6 text-secondary h-full space-y-3">
      <h1 className="text-3xl font-bold">Web</h1>
      <Button className="bg-yellow-400" size="lg">
        Web
      </Button>

      <div className="space-y-3">
        {tabs?.map((d) => (
          <p
            className="w-fit text-gray-950 font-bold text-2xl px-3 py-2 bg-slate-300 rounded"
            key={d.id}
          >
            {d.libelle}
          </p>
        ))}
      </div>
    </div>
  );
}
