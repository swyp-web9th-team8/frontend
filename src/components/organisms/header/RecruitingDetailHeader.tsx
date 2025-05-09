"use client";

import IconChevronLeft from "@/assets/icons/IconChevronLeft.svg";
import IconShare from "@/assets/icons/IconShare.svg";
import { useRouter } from "next/navigation";

function RecruitingDetailHeader() {
  const router = useRouter();

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
      <button
        className="absolute right-5 cursor-pointer"
        onClick={() => {}}
        type="button"
      >
        <IconShare className="h-7 w-7 text-gray-950" />
      </button>
    </header>
  );
}

export default RecruitingDetailHeader;
