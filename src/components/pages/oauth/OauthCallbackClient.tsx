"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

export default function OauthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  const provider = searchParams.get("provider");
  const id = searchParams.get("id");
  const email = searchParams.get("email");
  const nickname = searchParams.get("nickname");
  const registered = searchParams.get("registered");

  const { login } = useAuthStore();

  useEffect(() => {
    if (provider && id && email && nickname) {
      login({
        user: {
          id: Number(id),
          email,
          nickname,
          provider: provider.toUpperCase() as "KAKAO" | "GOOGLE",
        },
      });

      const isNewUser = registered === "false";
      router.replace(isNewUser ? "/signup" : "/home");
    } else {
      router.replace("/login?error=oauth");
    }
  }, [code, provider, id, email, nickname, login, router]);

  return <p className="mt-20 text-center">로그인 처리 중입니다...</p>;
}
