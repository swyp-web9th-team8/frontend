"use client";

import { useEffect } from "react";
import Empty from "@/components/organisms/Empty";
import Header from "@/components/organisms/Header";
import "@/types/kakao";

export default function InvitePage() {
  useEffect(() => {
    // 이미 로드된 경우 중복 로드 방지
    if (window.Kakao) return;

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "");
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleKakaoInvite = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(
        "카카오 SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.",
      );
      return;
    }
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "플로고에서 함께 줍깅해요!",
        description: "동네 친구들과 줍깅 챌린지에 도전해보세요!",
        imageUrl: "https://ploggo.co.kr/logo.png",
        link: {
          mobileWebUrl: "https://ploggo.co.kr",
          webUrl: "https://ploggo.co.kr",
        },
      },
      buttons: [
        {
          title: "플로고 바로가기",
          link: {
            mobileWebUrl: "https://ploggo.co.kr",
            webUrl: "https://ploggo.co.kr",
          },
        },
      ],
    });
  };

  const handleSmsInvite = () => {
    const message = `동네 친구들과 줍깅 챌린지에 도전해보세요! https://ploggo.co.kr`;
    const smsUrl = `sms:?&body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="친구 초대하기" backButton />

      <div className="relative flex-1">
        <Empty
          largeText="친구를 플로고에 초대해보세요"
          smallText={`줍깅이는 처음이라 망설여진다면 친구와\n함께 도전해보세요!`}
        />
      </div>

      <div className="mb-10 flex flex-col gap-2">
        <button
          onClick={handleKakaoInvite}
          className="font-gsans-medium text-body1-medium text-grey-95- w-full cursor-pointer rounded-xl bg-[#FEE812] py-3 text-center"
        >
          카카오로 초대하기
        </button>
        <button
          onClick={handleSmsInvite}
          className="bg-grey-200 font-gsans-medium text-body1-medium text-grey-950 w-full cursor-pointer rounded-xl py-3 text-center"
        >
          문자로 초대하기
        </button>
      </div>
    </div>
  );
}
