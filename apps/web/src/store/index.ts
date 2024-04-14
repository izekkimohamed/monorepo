import { Data } from "@repo/prisma/generated/prisma-client";
import { RefObject, createRef } from "react";
import { create } from "zustand";

export type Product = Omit<Data, "id" | "createdAt" | "updatedAt"> & {
  total_pvht: number;
  id: number | undefined;
};
export type Store = {
  products: Product[];
  qty: number;
  scannedCode: string;
  selectedProduct: Product | null;
  inputRef: RefObject<HTMLInputElement>;
  namPad: string;
  remaining: number;
};

export const useStore = create<Store>(() => ({
  products: [],
  qty: 1,
  scannedCode: "",
  selectedProduct: null,
  inputRef: createRef(),
  namPad: "",
  remaining: 0,
}));

export const addProduct = (product: Product) => {
  useStore.setState((state) => ({
    products: [...state.products, product],
  }));
};

export const setRemaining = (remaining: number) => {
  useStore.setState((state) => ({
    remaining,
  }));
};

export const updateProduct = (code: string, qty?: number) => {
  useStore.setState((state) => ({
    products: state.products.map((item) =>
      item.code === code
        ? {
            ...item,
            quantity: qty ? qty : item.quantity + 1,
            total: qty
              ? Number((item.price! * qty).toFixed(2))
              : Number((item.price! * (item.quantity + 1)).toFixed(2)),
            totalPvht: qty ? item.pvht! * qty : item.pvht! * (item.quantity + 1),
          }
        : item,
    ),
  }));
};

export const removeProduct = (product: Product) => {
  useStore.setState((state) => ({
    products: state.products.filter((p) => p.code !== product.code),
  }));
};

export const resetList = () => {
  useStore.setState((state) => ({
    products: [],
  }));
};
export const selectProduct = (product: Product) => {
  useStore.setState((state) => ({
    selectedProduct: product,
  }));
};

export const deselectProduct = () => {
  useStore.setState((state) => ({
    selectedProduct: null,
  }));
};

export const setQty = (qty: number) => {
  useStore.setState((state) => ({
    qty,
  }));
};
export const resetQty = () => {
  useStore.setState((state) => ({
    qty: 1,
  }));
};

export const setScannedCode = (code: string) => {
  useStore.setState((state) => ({
    scannedCode: code,
  }));
};

export const setNamPad = (code: string) => {
  useStore.setState((state) => ({
    namPad: state.namPad + code,
  }));
};
export const resetNamPad = () => {
  useStore.setState((state) => ({
    namPad: "",
  }));
};

export const totalProducts = () => {
  const products = useStore.getState().products;
  return Number(products.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2));
};
