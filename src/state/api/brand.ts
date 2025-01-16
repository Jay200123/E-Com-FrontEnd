import { create } from "zustand";
import { BrandState } from "../../interface";
import api from "../axios";
import { PATH } from "../../constants";

export const useBrandStore = create<BrandState>((set) => ({
  message: "",
  getAllBrands: async () => {
    const res = await api.get(PATH.BRANDS_ROUTE);
    set({ message: res.data.message });
    return res.data.details;
  },
  getBrandById: async (id: string) => {
    const res = await api.get(`${PATH.BRAND_ROUTE_ID.replace(":id", id)}`);
    set({ message: res.data.message });

    return res.data.details;
  },

  addBrand: async (formData) => {
    const res = await api.post(PATH.BRANDS_ROUTE, formData);
    set({ message: res.data.message });
  },
  updateBrandById: async (id, brand_name) => {
    const res = await api.put(`${PATH.EDIT_BRAND_ROUTE.replace(":id", id)}`, {
      brand_name,
    });
    set({ message: res.data.message });
  },
  deleteBrandById: async (id) => {
    const res = await api.delete(`${PATH.BRAND_ROUTE_ID.replace(":id", id)}`);
    set({ message: res.data.message });
  },
}));
