"use client";

import GoogleLoginButton from "@/components/atoms/Button/GoogleLoginButton";
import KakaoLoginButton from "@/components/atoms/Button/KakaoLoginButton";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-[1.375rem]">
        <h1 className="text-[84px] font-normal text-[#59AC6E]">Ploggo</h1>
        <p className="text-lg font-bold text-[#59AC6E]">
          동네사람들과 줍깅하기
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <KakaoLoginButton />

        <GoogleLoginButton />
      </div>
    </div>
  );
}
