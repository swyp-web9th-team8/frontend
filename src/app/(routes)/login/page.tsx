"use client";

import { getGoogleAuthURL } from "@/api/oauth/google";
import GoogleLogo from "@/assets/icons/google.svg";
import KakaoLoginButton from "@/components/atoms/Button/KakaoLoginButton";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = getGoogleAuthURL();
  };

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

        <button
          onClick={handleGoogleLogin}
          className="relative flex h-12 w-[19.8125rem] cursor-pointer items-center justify-center rounded-xl border-[0.8px] border-[#B0B0B0] bg-white transition-all"
        >
          <GoogleLogo className="mr-3 h-5 w-5" />
          <p className="font-['Roboto'] text-sm font-medium text-[#1f1f1f]">
            Google 계정으로 로그인
          </p>
        </button>
      </div>
    </div>
  );
}
