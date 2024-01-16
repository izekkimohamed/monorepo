"use server";

import { serverClient } from "@repo/trpc/server";

export const getProduct = async (code: string) => {
  const product = await serverClient.scannedProduct({ code });

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
