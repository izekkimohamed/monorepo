"use server";

import { Product } from "@/store";
import { serverClient } from "@repo/trpc/server";

export async function addToWaittingList(total: number, products: Product[]) {
  if (!products[0].waittingTicketsNumber) {
    return await serverClient.api.waitting.create.mutate({ total, products });
  } else {
    return await serverClient.api.waitting.update.mutate({ total, products });
  }
}
