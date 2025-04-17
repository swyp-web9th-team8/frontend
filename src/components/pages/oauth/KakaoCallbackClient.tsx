"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useOauthLogin } from "@/hooks/mutations/useOauthLogin";

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();
  const { mutate } = useOauthLogin();

  useEffect(() => {
    if (code) {
      mutate(
        { provider: "kakao", code },
        {
          onSuccess: () => {
            router.push("/");
          },
        },
      );
    }
  }, [code]);

  return <div className="mt-20 text-center">로그인 처리 중입니다...</div>;
}
