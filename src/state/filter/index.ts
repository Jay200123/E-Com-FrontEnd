import { create } from "zustand";

interface FilterState {
  name: string;
  price: number;
  brand: string;
  setFilter: (name: string, price: number, brand: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  name: "",
  price: 0,
  brand: "",
  setFilter: (name: string, price: number, brand: string) =>
    set({
      name: name,
      price: price,
      brand: brand,
    }),
}));
