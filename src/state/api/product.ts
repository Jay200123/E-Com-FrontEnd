import { create } from "zustand";
import { Product, ProductState } from "../../interface/product";
import api from "../axios";
import { PATH, RESOURCE } from "../../constants";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  message: "",
  getAllProducts: async () => {
    const res = await api.get(PATH.PRODUCTS_ROUTE);
    set({ message: "Product records found", loading: false });
    return res.data.details;
  },
  getAllMobiles: async () => {
    const res = await api.get(PATH.PRODUCTS_ROUTE);

    const mobiles = res?.data?.details?.filter((p: Product) =>
      p?.category.includes(RESOURCE.MOBILE)
    );
    set({ products: mobiles, message: "Mobile records found", loading: false });

    return mobiles;
  },
  getAllLaptops: async () => {
    const res = await api.get(PATH.PRODUCTS_ROUTE);

    const laptops = res?.data?.details?.filter((p: Product) =>
      p?.category.includes(RESOURCE.LAPTOP)
    );
    set({ products: laptops, message: "Laptop records found", loading: false });

    return laptops;
  },
  getAllComputers: async () => {
    const res = await api.get(PATH.PRODUCTS_ROUTE);

    const computers = res?.data?.details?.filter((p: Product) =>
      p?.category.includes(RESOURCE.COMPUTER)
    );
    set({
      products: computers,
      message: "Product records found",
      loading: false,
    });

    return computers;
  },

  getProductById: async (id: string) => {
    const res = await api.get(`${PATH.PRODUCT_ROUTE_ID.replace(":id", id)}`);
    set({ message: "Product record found", loading: false });
    return res.data.details;
  },

  addProduct: async (data: FormData) => {
    await api.post(PATH.PRODUCTS_ROUTE, data);
    set({ message: "Product record added", loading: false });
  },

  updateProduct: async (id: string, data: FormData) => {
    await api.patch(`${PATH.EDIT_PRODUCT_ROUTE.replace(":id", id)}`, data);
    set({ message: "Product record updated", loading: false });
  },

  deleteProduct: async (id: string) => {
    await api.delete(`${PATH.PRODUCT_ROUTE_ID.replace(":id", id)}`);
    set({ message: "Product record deleted", loading: false });
  },
}));
