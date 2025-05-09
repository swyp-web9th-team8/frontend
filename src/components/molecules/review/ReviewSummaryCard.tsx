"use client";

import CalendarIcon from "@/assets/icons/calendar01.svg";
import LocationIcon from "@/assets/icons/IconLocation.svg";

function ReviewSummaryCard() {
  return (
    <div data-property-1="체크" data-리뷰-여부="false" className="card-base">
      <div className="inline-flex w-60 flex-col items-start justify-start gap-3">
        <div className="inline-flex items-start justify-start gap-[5px] self-stretch">
          <div className="text-body1-bold text-gray-950">중앙공원 플로깅</div>
          <div className="flex items-center gap-1.5">
            <div className="text-body2-medium bg-green flex items-center justify-center rounded-xl px-3 py-0.5 text-white">
              완료
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1 self-stretch">
          <div className="inline-flex items-center justify-start gap-3 self-stretch">
            <CalendarIcon className="h-6 w-6" />
            <div className="justify-start text-sm leading-none font-medium text-gray-950">
              2025년 4월 3일 토요일
            </div>
          </div>
          <div className="inline-flex items-center justify-start gap-3">
            <LocationIcon className="h-6 w-6" />
            <div className="text-greyscale-gray-950 justify-start text-sm leading-none font-medium">
              중랑천
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSummaryCard;
