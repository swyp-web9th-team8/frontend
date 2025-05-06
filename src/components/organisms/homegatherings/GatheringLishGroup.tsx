import React from "react";
import { IGatheringItem } from "@/types/gatherings";
import DateBadge from "@/components/atoms/Badge/DateBadge";
import { getDay, getDayOfWeek, getMonth } from "@/utils/day";
import GatheringCard from "@/components/molecules/homegatherings/GathringCard";

interface Props {
  date: string;
  items: IGatheringItem[];
}

export default function GatheringListGroup({ date, items }: Props) {
  return (
    <div className="mb-2.5 flex gap-2.5">
      <div>
        <DateBadge
          month={getMonth(date)}
          day={getDay(date)}
          dayOfWeek={getDayOfWeek(date)}
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        {items.map((gathering) => (
          <GatheringCard key={gathering.postId} item={gathering} />
        ))}
      </div>
    </div>
  );
}
