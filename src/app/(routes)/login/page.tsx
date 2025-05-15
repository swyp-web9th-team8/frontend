"use client";

import GoogleLoginButton from "@/components/atoms/Button/GoogleLoginButton";
import KakaoLoginButton from "@/components/atoms/Button/KakaoLoginButton";
import IconExclamation from "@/assets/icons/IconExclamation.svg";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-[1.125rem]">
        <h1 className="font-gigantic text-green text-[5.25rem]">Ploggo</h1>
        <p className="text-heading2-bold font-gsans-bold text-green">
          동네사람들과 줍깅하기
        </p>
      </div>
      <div className="flex flex-col gap-[1.375rem]">
        <div className="flex flex-col items-center justify-center gap-4">
          <KakaoLoginButton />
          <GoogleLoginButton />
        </div>
        <div className="flex gap-1">
          <IconExclamation className="h-4 w-4" />
          <p className="text-grey-400 font-gsans-medium text-body3-medium">
            안전한 줍깅이 활동을 위해 로그인을 해야 이용 가능해요
          </p>
        </div>
      </div>
    </div>
  );
}
