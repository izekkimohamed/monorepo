import { prisma } from "@repo/prisma/db";

export default async function Page() {
  const data = await prisma.data.findMany();
  return (
    <>
      <div className="col-span-1 ">dashboard</div>
      <div className="col-span-1 "> table</div>
      {JSON.stringify(data, null, 2)}
    </>
  );
}
