// import { create, StateCreator } from "zustand";
// import { persist } from "zustand/middleware";
// import localforage from "localforage";
// import { Data } from "@repo/prisma/client";

// export type Tabs = {
//   id: number;
//   name: string;
//   products: Data[];
// };

// export type TabsStore = {
//   tabs: Tabs[];
//   addTab: (tab: string) => void;
//   removeTab: (id: number) => void;
//   updateTabProducts: (id: number, products: Data[]) => void;
//   removeFromTab: (id: number, productId: number) => void;
//   addToTabProducts: (id: number, products: Data[]) => void;
// };

// // Define the Zustand store
// export const useTabsStore = create<TabsStore>(
//   persist<TabsStore>(
//     (set) => ({
//       tabs: [],
//       addTab: (name: string) =>
//         set((state) => ({
//           tabs: [
//             ...state.tabs,
//             { id: state.tabs.length + 1, name, products: [] },
//           ],
//         })),
//       removeTab: (id: number) =>
//         set((state) => ({ tabs: state.tabs.filter((tab) => tab.id !== id) })),
//       updateTabProducts: (id: number, products: Data[]) =>
//         set((state) => ({
//           tabs: state.tabs.map((tab) =>
//             tab.id === id ? { ...tab, products } : tab,
//           ),
//         })),
//       removeFromTab: (id: number, productId: number) =>
//         set((state) => ({
//           tabs: state.tabs.map((tab) =>
//             tab.id === id
//               ? {
//                   ...tab,
//                   products: tab.products.filter((p) => p.id !== productId),
//                 }
//               : tab,
//           ),
//         })),
//       addToTabProducts: (id: number, newProducts: Data[]) =>
//         set((state) => ({
//           tabs: state.tabs.map((tab) =>
//             tab.id === id
//               ? { ...tab, products: [...tab.products, ...newProducts] }
//               : tab,
//           ),
//         })),
//     }),
//     {
//       name: "tabs-store", // Key for localforage
//       storage: localStorage,
//     },
//   ),
// );
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type TBearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      color: "red",
      size: "big",
      increasePopulation: () =>
        set((state) => ({
          bears: state.bears + 1,
        })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bear store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["size", "color"].includes(key),
          ),
        ),
    },
  ),
);
