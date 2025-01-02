import { OrderState } from "../../interface";
import { create } from "zustand";
import api from "../axios";

export const useOrderStore = create<OrderState>((set) => ({
  message: "",
  getAllOrders: async () => {
    const res = await api.get("/orders");
    return res.data.details;

    set({ message: res.data.message });
  },
  getOrderById: async (id: string) => {
    const res = await api.get(`/order/${id}`);
    return res.data.details;

    set({ message: res.data.message });
  },
  addOrder: async (values) => {
    const res = await api.post("/orders", values);
    console.log(res);
    set({ message: res.data.message });
  },
  updateOrderById: async (id, formData) => {
    const res = await api.put(`/order/edit/${id}`, formData);
    set({ message: res.data.message });
  },
  deleteOrderById: async (id) => {
    const res = await api.delete(`/order/delete/${id}`);
    set({ message: res.data.message });
  },
}));
