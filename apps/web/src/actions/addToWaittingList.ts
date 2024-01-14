"use server";

import { Product } from "@/store";
import { serverClient } from "@repo/trpc/server";

export async function addToWaittingList(total: number, products: Product[]) {
  const mutate = serverClient.createWaittingTickets({ total, products });
  return mutate;
}
