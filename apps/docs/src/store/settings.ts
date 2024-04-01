import { create } from "zustand";

export type SettingsStore = {
  active: boolean;
  toggle: () => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  active: false,
  toggle: () => set((state) => ({ active: !state.active })),
}));
