"use server";

import { serverClient } from "@repo/trpc/server";

export const getProduct = async (code: string) => {
  const product = await serverClient.api.product.scan.query({ code });

  if (product == null) {
    return {
      error: "Product Not Found",
    };
  } else {
    return {
      success: true,
      product,
    };
  }
};
export async function getAllProducts() {
  const products = await serverClient.api.product.list.query();
  return products;
}
