"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import axios from "axios";

export default function GoogleCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { login } = useAuthStore();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      console.log(
        "✅ 요청 URL:",
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google/callback`,
      );

      try {
        const response = await axios.get(
          // `${process.env.NEXT_PUBLIC_SERVER_URL}/login/oauth2/code/google`,
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/google/callback`,
          {
            params: { code },
            withCredentials: true,
          },
        );

        const { accessToken, refreshToken, user } = response.data;
        const isNewUser = user.registered === false;

        login({
          user: {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            provider: user.provider,
          },
          accessToken,
          refreshToken,
        });

        router.replace(isNewUser ? "/signup" : "/home");
      } catch (error) {
        console.error("Google 로그인 실패:", error);
        router.replace("/login?error=google");
      }
    };

    if (code) handleGoogleLogin();
  }, [code, login, router]);

  return <p>구글 로그인 처리 중입니다...</p>;
}
