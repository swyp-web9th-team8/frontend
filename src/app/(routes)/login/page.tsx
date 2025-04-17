// app/login/page.tsx
"use client";

import { getKakaoAuthURL } from "@/api/oauth/kakao";
import Image from "next/image";
import kakao from "@/assets/images/kakao_login.png";

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.location.href = getKakaoAuthURL();
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleKakaoLogin}
        type="button"
        className="cursor-pointer"
      >
        <Image src={kakao} alt="kakao" />
      </button>
    </div>
  );
}
