import { OrderState } from "../../interface";
import { create } from "zustand";
import api from "../axios";
import { PATH } from "../../constants";

export const useOrderStore = create<OrderState>((set) => ({
  message: "",
  getAllOrders: async () => {
    const res = await api.get(PATH.ORDERS_ROUTE);
    set({ message: res.data.message });
    return res.data.details;
  },
  getOrderById: async (id) => {
    const res = await api.get(`${PATH.ORDER_ROUTE_ID.replace(":id", id)}`);
    set({ message: res.data.message });
    return res.data.details;
  },
  addOrder: async (values) => {
    const res = await api.post(PATH.ORDERS_ROUTE, values);
    set({ message: res.data.message });
  },
  updateOrderById: async (id, formData) => {
    const res = await api.put(`${PATH.EDIT_ORDER_ROUTE.replace(":id", id)}`, formData);
    set({ message: res.data.message });
  },
  packedOrder: async (id) => {
    const res = await api.patch(
      `${PATH.ORDER_PACKED_ROUTE.replace(":id", id)}`
    );
    set({ message: res.data.message });
  },
  shippedOrder: async (id) => {
    const res = await api.patch(
      `${PATH.ORDER_SHIPPED_ROUTE.replace(":id", id)}`
    );
    set({ message: res.data.message });
  },
  deliveredOrder: async (id) => {
    const res = await api.patch(
      `${PATH.ORDER_DELIVERED_ROUTE.replace(":id", id)}`
    );
    set({ message: res.data.message });
  },

  deleteOrderById: async (id) => {
    const res = await api.delete(`${PATH.ORDER_ROUTE_ID.replace(":id", id)}`);
    set({ message: res.data.message });
  },
}));
