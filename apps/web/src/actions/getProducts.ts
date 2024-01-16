"use server";

import { serverClient } from "@repo/trpc/server";

export async function getProducts() {
  const products = await serverClient.listProducts();
  return products;
}
