import { OrderState } from "../../interface";
import { create } from "zustand";
import api from "../axios";


export const useOrderStore = create<OrderState>((set) => ({
  message: "",
  getAllOrders: async () => {
    const res = await api.get("/orders");
    set({ message: res.data.message });
    return res.data.details;
  },
  getOrderById: async (id) => {
    const res = await api.get(`/order/${id}`);
    set({ message: res.data.message });
    return res.data.details;
  },
  addOrder: async (values) => {
    const res = await api.post("/orders", values);
    set({ message: res.data.message });
  },
  updateOrderById: async (id, formData) => {
    const res = await api.put(`/order/edit/${id}`, formData);
    set({ message: res.data.message });
  },
  packedOrder: async (id) => {
    const res = await api.patch(`/order/packed/${id}`);
    set({ message: res.data.message });
  },
  shippedOrder: async (id) => {
    const res = await api.patch(`/order/shipped/${id}`);
    set({ message: res.data.message });
  },
  deliveredOrder: async (id) => {
    const res = await api.patch(`/order/delivered/${id}`);
    set({ message: res.data.message });
  },

  deleteOrderById: async (id) => {
    const res = await api.delete(`/order/delete/${id}`);
    set({ message: res.data.message });
  },
}));
