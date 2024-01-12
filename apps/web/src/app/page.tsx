import { Data } from "@repo/prisma/client";
import { prisma } from "@repo/prisma/db";
import { Button, Card, Input, Test } from "@repo/ui/src";

export default async function Page() {
  const data = await prisma.data.findMany();
  return (
    <div className="bg-card-foreground px-6 text-secondary h-full space-y-3">
      <h1 className="text-3xl font-bold">Web</h1>
      <Button className="bg-yellow-400" size="lg">
        Web
      </Button>
      <Card className="bg-muted-foreground p-7 rounded">
        <Input className="font-bold rounded" placeholder="Search" />
      </Card>
      <div className="space-y-3">
        {data.map((d) => (
          <p
            className="w-fit text-gray-950 font-bold text-2xl px-3 py-2 bg-slate-300 rounded"
            key={d.id}
          >
            {d.libelle}
          </p>
        ))}
      </div>
      <Test />
    </div>
  );
}
