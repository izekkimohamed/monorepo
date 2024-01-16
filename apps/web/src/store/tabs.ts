import { Data, Products } from "@repo/prisma/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Tabs = {
  id: number;
  name: string;
  products: Products[];
};

export type TabsStore = {
  tabs: Tabs[];
  addTab: (name: string) => void;
  removeTab: (id: number) => void;
  // updateTabProducts: (id: number, products: Data[]) => void;
  removeFromTab: (id: number, productId: number) => void;
  addToTabProducts: (id: number, newProducts: Products[]) => void;
};

// Define the Zustand store
export const useTabsStore = create<TabsStore>()(
  persist(
    (set) => ({
      tabs: [],
      addTab: (name: string) =>
        set((state) => ({
          // check if alredy exist
          tabs: state.tabs.find((tab) => tab.name === name)
            ? state.tabs
            : [
                ...state.tabs,
                { id: state.tabs.length + 1, name, products: [] },
              ],
        })),
      removeTab: (id: number) =>
        set((state) => ({ tabs: state.tabs.filter((tab) => tab.id !== id) })),
      updateTabProducts: (id: number, products: Products[]) =>
        set((state) => ({
          tabs: state.tabs.map((tab) =>
            tab.id === id ? { ...tab, products } : tab,
          ),
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
      addToTabProducts: (id: number, newProducts: Products[]) =>
        set((state) => ({
          tabs: state.tabs.map((tab) =>
            tab.id === id
              ? { ...tab, products: [...tab.products, ...newProducts] }
              : tab,
          ),
        })),
    }),
    {
      name: "tabs-store", // Key for localforage
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
