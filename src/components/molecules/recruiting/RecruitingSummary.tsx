"use client";

import CalendarIcon from "@/assets/icons/calendar01.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import ChatIcon from "@/assets/icons/IconChat.svg";
import LocationIcon from "@/assets/icons/location.svg";
import GatheringIconTextItem from "@/components/molecules/GatheringIconTextItem";
import { IFetchGatheringDetailResponse } from "@/types/gatherings";
import { formatDateAndTime } from "@/utils/day";

type Props = Pick<IFetchGatheringDetailResponse, "data">;

function RecruitingSummary({
  data: { meetingTime, address, openChatUrl },
}: Props) {
  const date = formatDateAndTime(meetingTime, "yyyy년 M월 d일");
  const time = formatDateAndTime(meetingTime, "a h시 m분");

  return (
    <div className="flex items-start justify-between">
      <div className="inline-flex flex-col items-start justify-start gap-1.5">
        <GatheringIconTextItem Icon={CalendarIcon} text={date} />
        <GatheringIconTextItem Icon={ClockIcon} text={time} />
        <GatheringIconTextItem
          Icon={LocationIcon}
          text={address}
          href={`https://map.kakao.com/link/search/${address}`}
        />
      </div>
      <div>
        <GatheringIconTextItem
          Icon={ChatIcon}
          text="오픈채팅방 링크"
          href={openChatUrl}
        />
      </div>
    </div>
  );
}

export default RecruitingSummary;
