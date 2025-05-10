"use client";

import CalendarIcon from "@/assets/icons/calendar01.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import ChatIcon from "@/assets/icons/IconChat.svg";
import LocationIcon from "@/assets/icons/location.svg";
import GatheringIconTextItem from "@/components/molecules/GatheringIconTextItem";
import { IRecrutingGatherings } from "@/types/recruitingGatherings";
import { formatDateAndTime } from "@/utils/day";

type Props = Pick<
  IRecrutingGatherings,
  "meetingTime" | "placeName" | "openChatUrl"
>;

function RecruitingSummary({ meetingTime, placeName, openChatUrl }: Props) {
  const date = formatDateAndTime(meetingTime, "yyyy년 M월 d일");
  const time = formatDateAndTime(meetingTime, "a h시 m분");

  return (
    <div className="flex items-start justify-between">
      <div className="inline-flex flex-col items-start justify-start gap-1.5">
        <GatheringIconTextItem Icon={CalendarIcon} text={date} />
        <GatheringIconTextItem Icon={ClockIcon} text={time} />
        <GatheringIconTextItem
          Icon={LocationIcon}
          text={placeName}
          href={`https://map.kakao.com/link/search/${placeName}`}
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
