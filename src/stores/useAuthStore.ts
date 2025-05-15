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

        logout: () => {
          // 상태 초기화
          set({
            isLoggedIn: false,
            user: null,
          });

          // localStorage에서 persist된 상태 삭제
          if (typeof window !== "undefined") {
            localStorage.removeItem("auth-storage");
          }
        },
      }),
      {
        name: "auth-storage", // localStorage에 저장될 키
      },
    ),
    {
      name: "AuthStore", // Redux Devtools에 표시될 이름
    },
  ),
);
