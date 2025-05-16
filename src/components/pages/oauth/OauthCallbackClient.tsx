"use client";

import { getMyProfile } from "@/api/auth/getMyProfile";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OauthCallbackClient() {
  const router = useRouter();
  const { login } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getMyProfile();
        login(user.user);
        router.replace(user.user.registered === false ? "/signup" : "/home");
      } catch (error) {
        console.error("로그인 정보 확인 실패:", error);
        router.replace("/login?error=auth");
      }
    };

    fetchUser();
  }, [login, router]);

  return <p className="mt-20 text-center">로그인 처리 중입니다...</p>;
}
