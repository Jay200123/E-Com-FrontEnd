import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../axios";
import { AuthenticationState } from "../../interface";
import { encryptedSessionStorage } from "../../storage";

export const useAuthenticationStore = create<AuthenticationState>()(
  persist(
    (set) => ({
      user: null,
      isAuthorized: false,
      login: async (email, password) => {
        const res = await api.post("/login", {
          email,
          password,
        });

        set({
          user: res?.data?.details,
          isAuthorized: true,
        });

        sessionStorage.setItem("access", res?.data?.access);
        return res?.data?.details;
      },
      logout: async () => {
        set({
          user: null,
          isAuthorized: false,
        }),
          sessionStorage.removeItem("authentication");
        sessionStorage.removeItem("access");
      },
    }),
    {
      name: "authentication",
      storage: encryptedSessionStorage,
    }
  )
);
