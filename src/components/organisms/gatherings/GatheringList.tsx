"use client";

import DateBadge from "@/components/atoms/Badge/DateBadge";
import { useFetchCompletedGatheringList } from "@/hooks/queries/useFetchGatheringList";
import { getDay, getDayOfWeek, getMonth } from "@/utils/day";
import { groupGatheringsByDate } from "@/utils/gatherings";
import Empty from "../Empty";
import GatheringItem from "./GatheringItem";

export default function GatheringList() {
  const { data, isLoading } = useFetchCompletedGatheringList();

  if (!data && !isLoading) return null;

  const groupedGatherings = groupGatheringsByDate(data, true);
  const isEmpty = groupedGatherings.length === 0;

  return (
    <div className="flex flex-1 flex-col gap-5">
      {!isEmpty && (
        <h1 className="justify-start text-xl leading-normal font-bold text-[#1A1A1A]">
          동네에 이런 모임이 있었어요 🔥
        </h1>
      )}
      {!isEmpty &&
        groupedGatherings.map((gatherings, index) => (
          <div className="flex flex-row gap-2" key={index}>
            <div>
              <DateBadge
                month={getMonth(gatherings[0].meetingTime)}
                day={getDay(gatherings[0].meetingTime)}
                dayOfWeek={getDayOfWeek(gatherings[0].meetingTime)}
              />
            </div>
            <div className="flex flex-1 flex-col gap-5">
              {gatherings.map((gathering, index) => (
                <GatheringItem {...gathering} key={index} />
              ))}
            </div>
          </div>
        ))}
      {isEmpty && <Empty largeText="완료된 모임이 없어요" />}
    </div>
  );
}
