"use client";

import DateBadge from "@/components/atoms/Badge/DateBadge";
import { useFetchCompletedGatheringList } from "@/hooks/queries/useFetchGatheringList";
import { getDay, getDayOfWeek, getMonth } from "@/utils/day";
import { groupGatheringsByDate } from "@/utils/gatherings";
import GatheringItem from "./GatheringItem";

export default function GatheringList() {
  const { data, isLoading } = useFetchCompletedGatheringList();

  if (!data && !isLoading) return null;

  const groupedGatherings = groupGatheringsByDate(data);

  return (
    <div className="flex flex-1 flex-col gap-5">
      {groupedGatherings.map((gatherings, index) => (
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
    </div>
  );
}
