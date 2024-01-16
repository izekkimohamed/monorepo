"use server";

import { prisma } from "@repo/prisma/db";

export default async function getProductsByRayon(rayonId: number) {
  return await prisma.products.findMany({
    where: {
      rayon_code: rayonId,
    },
  });
}
