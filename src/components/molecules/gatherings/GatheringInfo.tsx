import CalendarIcon from "@/assets/icons/calendar01.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { IFetchGatheringDetailResponse } from "@/types/gatherings";
import { formatDateAndTime } from "@/utils/day";

type Props = Pick<IFetchGatheringDetailResponse, "data">;

export default function GatheringInfo({
  data: { title, meetingTime, address },
}: Props) {
  const date = formatDateAndTime(meetingTime, "yyyy년 M월 d일");
  const time = formatDateAndTime(meetingTime, "a h시 m분");

  return (
    <div className="mb-7">
      <div className="text-heading1-bold font-gsans-bold mb-5 justify-start self-stretch text-gray-950">
        {title}
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-1.5">
        <div className="inline-flex items-center justify-start gap-3 self-stretch">
          <CalendarIcon className="h-6 w-6" />
          <div className="text-greyscale-gray-950 justify-start font-['Gmarket_Sans_TTF'] text-base leading-tight font-medium">
            {date}
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-3">
          <ClockIcon className="h-6 w-6" />
          <div className="text-greyscale-gray-950 justify-start font-['Gmarket_Sans_TTF'] text-base leading-tight font-medium">
            {time}
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-3">
          <LocationIcon className="h-6 w-6" />
          <div className="text-greyscale-gray-950 justify-start font-['Gmarket_Sans_TTF'] text-base leading-tight font-medium">
            {address}
          </div>
        </div>
      </div>
    </div>
  );
}
