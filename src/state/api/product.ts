import { create } from "zustand";
import { ProductState } from "../../interface/product";
import axios from "axios";

export const useProductStore = create<ProductState>((set) => ({
  loading: false,
  message: "",
  getAllProducts: async () => {
    const res = await axios.get("http://localhost:4000/api/v1/products");
    set({ message: "Product records found", loading: false });
    return res.data.details;
  },
  getProductById: async (id: string) => {
    const res = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
    set({ message: "Product record found", loading: false });
    return res.data.details;
  },
  addProduct: async (data: FormData) => {
    await axios.post("http://localhost:4000/api/v1/products", data);
    set({ message: "Product record added", loading: false });
  },
  updateProduct: async (id: string, data: FormData) => {
    await axios.patch(`http://localhost:4000/api/v1/products/${id}`, data);
    set({ message: "Product record updated", loading: false });
  },
  deleteProduct: async (id: string) => {
    await axios.delete(`http://localhost:4000/api/v1/products/${id}`);
    set({ message: "Product record deleted", loading: false });
  },
}));
