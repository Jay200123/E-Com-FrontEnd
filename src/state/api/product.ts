import { create } from "zustand";
import { Product, ProductState } from "../../interface/product";
import api from "../axios";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  message: "",
  getAllProducts: async () => {
    const res = await api.get(`/products`);
    set({ message: "Product records found", loading: false });
    return res.data.details;
  },
  getAllMobiles: async () => {
    const res = await api.get(`/products`);

    const mobiles = res?.data?.details?.filter((p:Product)=> p?.category.includes("Mobile"));
    set({ products: mobiles, message: "Mobile records found", loading: false }); 

    return mobiles;
  },
  getAllLaptops: async () => {
    const res = await api.get(`/products`);

    const laptops = res?.data?.details?.filter((p:Product)=> p?.category.includes("Laptop"));
    set({ products: laptops, message: "Laptop records found", loading: false }); 

    return laptops;
  },
  getAllComputers: async () => {
    const res = await api.get(`/products`);

    const computers = res?.data?.details?.filter((p:Product)=> p?.category.includes("Computer"));
    set({ products: computers, message: "Product records found", loading: false }); 

    return computers;
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
