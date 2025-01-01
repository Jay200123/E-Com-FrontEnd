import { create } from "zustand";
import { ProductState } from "../../interface/product";
import api from "../axios";

export const useProductStore = create<ProductState>((set) => ({
  loading: false,
  message: "",
  getAllProducts: async () => {
    const res = await api.get(`/products`);
    set({ message: "Product records found", loading: false });
    return res.data.details;
  },
  getProductById: async (id: string) => {
    const res = await api.get(`/product/${id}`);
    set({ message: "Product record found", loading: false });
    return res.data.details;
  },
  addProduct: async (data: FormData) => {
    await api.post("/products", data);
    set({ message: "Product record added", loading: false });
  },
  updateProduct: async (id: string, data: FormData) => {
    await api.patch(`/products/${id}`, data);
    set({ message: "Product record updated", loading: false });
  },
  deleteProduct: async (id: string) => {
    await api.delete(`/products/${id}`);
    set({ message: "Product record deleted", loading: false });
  },
}));
