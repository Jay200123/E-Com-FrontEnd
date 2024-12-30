import { create } from "zustand";
import { UserState } from "../../interface";
import axios from "axios";

export const useUserStore = create<UserState>((set) => ({
  message: "",
  getAllUsers: async () => {
    const res = await axios.get("http://localhost:4000/api/v1/users");
    return res?.data?.details;

    set({ message: res?.data?.message });
  },
  getUserById: async (id: string) => {
    const res = await axios.get(`http://localhost:4000/api/v1/user/${id}`);
    return res?.data?.details;
    set({ message: res?.data?.message });
  },
  addUser: async (formData) => {
    const res = await axios.post("http://localhost:4000/api/v1/user", formData);
    set({ message: res?.data?.message });
  },
  updateUserById: async (id: string, formData) => {
    const res = await axios.patch(
      `http://localhost:4000/api/v1/user/edit/${id}`,
      formData
    );
    set({ message: res?.data?.message });
  },
  deleteUserById: async (id) => {
    const res = await axios.delete(
      `http://localhost:4000/api/v1/user/delete/${id}`
    );
    set({ message: res?.data?.message });
  },
}));
