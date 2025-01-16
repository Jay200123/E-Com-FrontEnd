import { create } from "zustand";
import { UserState } from "../../interface";
import api from "../axios";
import { PATH } from "../../constants";

export const useUserStore = create<UserState>((set) => ({
  message: "",
  getAllUsers: async () => {
    const res = await api.get(PATH.USERS_ROUTE);
    return res?.data?.details;

    set({ message: res?.data?.message });
  },
  getUserById: async (id: string) => {
    const res = await api.get(`${PATH.USER_ROUTE_ID.replace(":id", id)}`);
    return res?.data?.details;
    set({ message: res?.data?.message });
  },
  addUser: async (formData) => {
    const res = await api.post(PATH.USERS_ROUTE, formData);
    set({ message: res?.data?.message });
  },
  updateUserById: async (id: string, formData) => {
    const res = await api.patch(
      `${PATH.EDIT_USER_ROUTE.replace(":id", id)}`,
      formData
    );
    set({ message: res?.data?.message });
  },
  deleteUserById: async (id) => {
    const res = await api.delete(`${PATH.USER_ROUTE_ID.replace(":id", id)}`); 
    set({ message: res?.data?.message });
  },
}));
