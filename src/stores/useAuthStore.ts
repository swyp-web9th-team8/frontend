import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface User {
  id: number;
  email: string;
  nickname: string;
  provider: "GOOGLE" | "KAKAO";
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (payload: {
    user: User;
    accessToken: string;
    refreshToken: string;
  }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,
        accessToken: null,
        refreshToken: null,

        login: ({ user, accessToken, refreshToken }) =>
          set({
            isLoggedIn: true,
            user,
            accessToken,
            refreshToken,
          }),

        logout: () =>
          set({
            isLoggedIn: false,
            user: null,
            accessToken: null,
            refreshToken: null,
          }),
      }),
      {
        name: "auth-storage", // localStorage에 저장될 키 이름
      },
    ),
    {
      name: "AuthStore", // Redux Devtools에서 표시될 이름
    },
  ),
);
