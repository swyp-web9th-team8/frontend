import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

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
  profileImageUrl: string | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,
        profileImageUrl: null,

        login: (user) =>
          set({
            isLoggedIn: true,
            user,
            profileImageUrl: user.profileImageUrl,
          }),

        logout: () =>
          set({
            isLoggedIn: false,
            user: null,
            profileImageUrl: null,
          }),
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: "AuthStore", // Redux Devtools에 표시될 이름
    },
  ),
);
