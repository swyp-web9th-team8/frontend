"use client";

import { getKakaoAuthURL } from "@/api/oauth/kakao";
import { getGoogleAuthURL } from "@/api/oauth/google";
import Image from "next/image";
import kakao from "@/assets/images/kakao_login.png";
import GoogleLogo from "@/assets/icons/google.svg";

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.location.href = getKakaoAuthURL();
  };

  const handleGoogleLogin = () => {
    window.location.href = getGoogleAuthURL();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <button onClick={handleKakaoLogin} className="cursor-pointer">
        <Image src={kakao} alt="카카오 로그인" />
      </button>

      <button
        onClick={handleGoogleLogin}
        className="relative flex h-10 cursor-pointer items-center rounded-md border border-[#747775] bg-white px-3 font-['Roboto'] text-sm font-medium text-[#1f1f1f] transition-all hover:shadow-md"
      >
        <GoogleLogo className="mr-3 h-5 w-5" />
        Google 계정으로 로그인
      </button>
    </div>
  );
}
