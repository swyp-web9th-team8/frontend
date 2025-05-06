"use client";

import DateBadge from "@/components/atoms/Badge/DateBadge";
import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import { IGatheringItem } from "@/types/gatherings";
import { getDay, getDayOfWeek, getMonth } from "@/utils/day";
import React from "react";
import IconSearch from "@/assets/icons/IconSearch.svg";
import IconNotification from "@/assets/icons/IconNotification.svg";
import IconClock from "@/assets/icons/clock.svg";
import IconLocation from "@/assets/icons/location.svg";
import IconDropdown from "@/assets/icons/dropdown-arrow.svg";

const gatherings: IGatheringItem[] = [
  {
    postId: 1,
    title: "아침 플로깅 함께해요!",
    meetingTime: "2025-05-02T08:00:00",
    placeName: "잠실 아크로 중앙정원",
    address: "서울시 송파구 올림픽로 300",
    participantCount: 3,
  },
  {
    postId: 2,
    title: "줍깅은 처음이라면 여기부터!",
    meetingTime: "2025-05-02T09:00:00",
    placeName: "잠실 아크로 중앙정원",
    address: "서울시 송파구 올림픽로 300",
    participantCount: 5,
  },
  {
    postId: 3,
    title: "초보자 환영 플로깅 모임",
    meetingTime: "2025-05-02T08:00:00",
    placeName: "잠실 아크로 중앙정원",
    address: "서울시 송파구 올림픽로 300",
    participantCount: 2,
  },
  {
    postId: 4,
    title: "주말 한강 플로깅",
    meetingTime: "2025-05-03T08:00:00",
    placeName: "한강공원",
    address: "서울시 영등포구 여의동로 280",
    participantCount: 4,
  },
  {
    postId: 5,
    title: "주말 아침 산책 겸 플로깅",
    meetingTime: "2025-05-04T08:00:00",
    placeName: "중앙공원",
    address: "서울시 서초구 반포대로 210",
    participantCount: 6,
  },
  {
    postId: 6,
    title: "친환경 플로깅 챌린지!",
    meetingTime: "2025-05-04T08:00:00",
    placeName: "서래마을 공원",
    address: "서울시 서초구 서래로 50",
    participantCount: 1,
  },
];

export default function Home() {
  const groupedByDate = gatherings.reduce<Record<string, IGatheringItem[]>>(
    (acc, curr) => {
      const date = curr.meetingTime.split("T")[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(curr);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen px-5 pt-[4.5rem] pb-28">
      <div className="mb-9 flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <h1 className="font-gsans-medium text-heading2-medium text-grey-950">
            서초동
          </h1>
          <button>
            <IconDropdown className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4">
          <button>
            <IconSearch />
          </button>
          <button>
            <IconNotification />
          </button>
        </div>
      </div>

      <div className="mb-3.5">
        <button className="font-gsans-bold text-body1-bold text-green border-grey-200 mr-2 border-r-2 pr-2">
          모집중인 모임
        </button>
        <button className="text-grey-200 font-gsans-bold text-body1-bold">
          모집 완료된 모임
        </button>
      </div>

      {Object.entries(groupedByDate).map(([date, items]) => (
        <div key={date} className="mb-2.5 flex gap-2.5">
          <div>
            <DateBadge
              month={getMonth(date)}
              day={getDay(date)}
              dayOfWeek={getDayOfWeek(date)}
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            {items.map((gathering) => (
              <div
                key={gathering.postId}
                className="flex justify-between rounded-2xl border border-gray-200 p-4 shadow-[0_4px_24px_rgba(170,170,170,0.15)]"
              >
                <div className="flex flex-col gap-3">
                  <div className="font-gsans-bold text-body2-medium text-grey-950">
                    {gathering.title}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-body2-medium font-gsans-medium text-grey-950 flex gap-2">
                      <IconClock className="h-4 w-4" />
                      <span>오전 8시</span>
                    </div>
                    <div className="text-body2-medium font-gsans-medium text-grey-950 flex gap-2">
                      <IconLocation className="h-4 w-4" />
                      <span>{gathering.placeName}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[1.375rem]">
                  <span className="text-body3-medium font-gsans-medium text-grey-400">
                    {gathering.participantCount}자리 남음
                  </span>
                  <button className="bg-green text-grey-0 font-gsans-medium text-body3-medium rounded-full px-3 py-2">
                    참여하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <GatheringCreateButton />
    </div>
  );
}
