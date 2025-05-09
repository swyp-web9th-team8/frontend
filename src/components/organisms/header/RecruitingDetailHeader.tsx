"use client";

import IconChevronLeft from "@/assets/icons/IconChevronLeft.svg";
import ShareButton from "@/components/atoms/Button/ShareButton";
import { useParams, useRouter } from "next/navigation";

function RecruitingDetailHeader() {
  const router = useRouter();
  const { id } = useParams();

  return (
    <header className="font-gsans-medium bg-green relative flex items-center justify-center pt-[29px] pb-[14px] text-xl leading-normal font-medium">
      <div className="absolute left-3">
        <IconChevronLeft
          className="h-8 w-8 cursor-pointer text-gray-950"
          onClick={() => router.back()}
        />
      </div>
      {/* 가운데 타이틀 */}
      <div className="text-body1-medium">모임</div>
      <div className="absolute right-5 cursor-pointer">
        <ShareButton
          title="현재 모집중인 모임"
          text="확인해보세요!"
          href={`https://polggo.co.kr/gatherings/recruiting/${id}`}
        />
      </div>
    </header>
  );
}

export default RecruitingDetailHeader;
