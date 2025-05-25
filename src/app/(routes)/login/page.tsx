"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/components/atoms/Button/GoogleLoginButton";
import KakaoLoginButton from "@/components/atoms/Button/KakaoLoginButton";
import IconExclamation from "@/assets/icons/IconExclamation.svg";
import { useAuthStore } from "@/stores/useAuthStore";
import Loading from "@/assets/icons/Loading.svg";

export default function LoginPage() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace("/home");
    }
  }, [router, isLoggedIn, isLoading]);

  if (isLoading || isLoggedIn) {
    return (
      <p className="flex flex-1 items-center justify-center text-center">
        <Loading className="h-[81px] w-[81px] animate-spin" />
      </p>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-gigantic text-[5.25rem] text-[#59AC6E]">Ploggo</h1>
        <p className="font-gsans-bold text-lg text-[#59AC6E]">
          동네사람들과 줍깅하기
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <IconExclamation className="h-4 w-4" />
        <p>소셜 로그인으로 간편하게 시작하세요</p>
      </div>
    </div>
  );
}
