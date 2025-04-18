import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        login: () => set({ isLoggedIn: true }),
        logout: () => set({ isLoggedIn: false }),
      }),
      {
        name: "auth-storage", // localStorage에 표시되는 key 이름
      },
    ),
    {
      name: "AuthStore", // Redux Devtools에서 표시되는 store 이름
    },
  ),
);
