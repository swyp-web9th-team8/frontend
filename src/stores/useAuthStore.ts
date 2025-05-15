import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface User {
  id: number;
  email: string;
  nickname: string;
  gender: "male" | "female";
  provider: "KAKAO" | "GOOGLE";
  registered: boolean;
  region: string; // 예: "강남구 개포동"
  profileImageUrl: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,

        login: (user) =>
          set({
            isLoggedIn: true,
            user,
          }),

        logout: () =>
          set({
            isLoggedIn: false,
            user: null,
          }),
      }),
      {
        name: "auth-storage",
      },
    ),
    {
      name: "AuthStore",
    },
  ),
);
