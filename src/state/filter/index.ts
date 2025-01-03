import { create } from "zustand";

interface FilterState {
  price: number;
  brand: string;
  setFilter: (price: number, brand: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  price: 0,
  brand: "",
  setFilter: (price: number, brand: string) =>
    set({
      price: price,
      brand: brand,
    }),
}));
