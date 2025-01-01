import { create } from "zustand";
import { UserState } from "../../interface";
import api from "../axios";

export const useUserStore = create<UserState>((set) => ({
  message: "",
  getAllUsers: async () => {
    const res = await api.get("/users");
    return res?.data?.details;

    set({ message: res?.data?.message });
  },
  getUserById: async (id: string) => {
    const res = await api.get(`/user/${id}`);
    return res?.data?.details;
    set({ message: res?.data?.message });
  },
  addUser: async (formData) => {
    const res = await api.post("/users", formData);
    set({ message: res?.data?.message });
  },
  updateUserById: async (id: string, formData) => {
    const res = await api.patch(`/user/edit/${id}`, formData);
    set({ message: res?.data?.message });
  },
  deleteUserById: async (id) => {
    const res = await api.delete(`/user/${id}`);
    set({ message: res?.data?.message });
  },
}));
