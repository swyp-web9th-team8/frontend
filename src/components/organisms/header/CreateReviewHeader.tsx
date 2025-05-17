"use client";

import IconClose from "@/assets/icons/IconClose.svg";
import { useRouter } from "next/navigation";

function CompletedGatheringHeader() {
  const router = useRouter();

  return (
    <div className="font-gsans-medium relative -mx-5 flex items-center justify-center pt-8 pb-6 text-xl leading-normal font-medium">
      <div className="text-body1-medium">모임 리뷰</div>
      <div className="absolute right-5" onClick={() => router.back()}>
        <IconClose className="h-[28px] w-[28px] text-gray-950" />
      </div>
    </div>
  );
}

export default CompletedGatheringHeader;
