"use server";

import { serverClient } from "@repo/trpc/server";

export async function getProduct(code: string) {
  const product = await serverClient.scannedProduct({ code });
  return product;
}
