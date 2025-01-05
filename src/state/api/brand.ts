import { create } from "zustand";
import { BrandState } from "../../interface";
import api from "../axios";

export const useBrandStore = create<BrandState>((set) => ({
  message: "",
  getAllBrands: async () => {
    const res = await api.get("/brands");
    set({ message: res.data.message });
    return res.data.details;
  },
  getBrandById: async (id: string) => {
    const res = await api.get(`/brand/${id}`);
    set({ message: res.data.message });

    return res.data.details;
  },

  addBrand: async (formData) => {
    const res = await api.post("/brands", formData);
    set({ message: res.data.message });
  },
  updateBrandById: async (id, brand_name) => {
    const res = await api.put(`/brands/${id}`, { brand_name });
    set({ message: res.data.message });
  },
  deleteBrandById: async (id) => {
    const res = await api.delete(`/brands/${id}`);
    set({ message: res.data.message });
  },
}));
