"use server";

import { Product } from "@/store";
import { serverClient } from "@repo/trpc/server";

export async function addToWaittingList(total: number, products: Product[]) {
  return await serverClient.createWaittingTickets({ total, products });
}
