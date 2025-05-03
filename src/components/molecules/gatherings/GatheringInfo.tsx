import CalendarIcon from "@/assets/icons/calendar01.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import LocationIcon from "@/assets/icons/location.svg";

export default function GatheringInfo() {
  return (
    <div className="mb-7">
      <div className="text-heading1-bold font-gsans-bold mb-5 justify-start self-stretch text-gray-950">
        토요일 오전 줍깅 챌린지🔥
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-1.5">
        <div className="inline-flex items-center justify-start gap-3 self-stretch">
          <CalendarIcon className="h-6 w-6" />
          <div className="text-greyscale-gray-950 justify-start font-['Gmarket_Sans_TTF'] text-base leading-tight font-medium">
            2025년 4월 30일
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-3">
          <ClockIcon className="h-6 w-6" />
          <div className="text-greyscale-gray-950 justify-start font-['Gmarket_Sans_TTF'] text-base leading-tight font-medium">
            오전 8시{" "}
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-3">
          <LocationIcon className="h-6 w-6" />
          <div className="text-greyscale-gray-950 justify-start font-['Gmarket_Sans_TTF'] text-base leading-tight font-medium">
            평촌 중앙공원
          </div>
        </div>
      </div>
    </div>
  );
}
