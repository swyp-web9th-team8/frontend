"use client";

import Empty from "@/components/organisms/Empty";
import Header from "@/components/organisms/Header";

export default function InvitePage() {
  const handleKakaoInvite = () => {
    // 추후 카카오톡 공유 API 연동 예정
    alert("카카오톡으로 초대합니다 (추후 구현 예정)");
  };

  const handleSmsInvite = () => {
    const message = `동네 친구들과 줍깅 챌린지에 도전해보세요! https://ploggo.co/kr`;
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
