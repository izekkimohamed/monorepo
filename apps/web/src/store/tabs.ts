import { Product } from "@repo/prisma/generated/prisma-client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Tabs = {
  id: number;
  name: string;
  products: Product[];
};

export type TabsStore = {
  tabs: Tabs[];
  addTab: (name: string) => void;
  removeTab: (id: number) => void;
  removeFromTab: (id: number, productId: number) => void;
  addToTabProducts: (id: number, newProducts: Product[]) => void;
};

export const useTabsStore = create<TabsStore>()(
  persist(
    (set) => ({
      tabs: [],
      addTab: (name: string) =>
        set((state) => ({
          tabs: state.tabs.find((tab) => tab.name === name)
            ? state.tabs
            : [...state.tabs, { id: state.tabs.length + 1, name, products: [] }],
        })),
      removeTab: (id: number) =>
        set((state) => ({ tabs: state.tabs.filter((tab) => tab.id !== id) })),
      updateTabProducts: (id: number, products: Product[]) =>
        set((state) => ({
          tabs: state.tabs.map((tab) => (tab.id === id ? { ...tab, products } : tab)),
        })),
      removeFromTab: (id: number, productId: number) =>
        set((state) => ({
          tabs: state.tabs.map((tab) =>
            tab.id === id
              ? {
                  ...tab,
                  products: tab.products.filter((p) => p.id !== productId),
                }
              : tab,
          ),
        })),
      addToTabProducts: (id: number, newProducts: Product[]) =>
        set((state) => ({
          tabs: state.tabs.map((tab) =>
            tab.id === id ? { ...tab, products: [...tab.products, ...newProducts] } : tab,
          ),
        })),
    }),
    {
      name: "tabs-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
