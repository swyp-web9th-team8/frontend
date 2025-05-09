import DateBadge from "@/components/atoms/Badge/DateBadge";
import GatheringCard from "@/components/molecules/homegatherings/GatheringCard";
import { IGatheringItem } from "@/types/gatherings";
import { getDay, getDayOfWeek, getMonth } from "@/utils/day";

interface GatheringListGroupProps {
  date: string;
  items: IGatheringItem[];
  isClosed?: boolean;
}

export default function GatheringListGroup({
  date,
  items,
  isClosed = false,
}: GatheringListGroupProps) {
  return (
    <div className="mb-5 grid grid-cols-[auto_1fr] items-start gap-2.5">
      <DateBadge
        month={getMonth(date)}
        day={getDay(date)}
        dayOfWeek={getDayOfWeek(date)}
      />
      <div className="flex flex-col gap-3">
        {items.map((gathering) => (
          <GatheringCard
            key={gathering.postId}
            gathering={gathering}
            isClosed={isClosed}
          />
        ))}
      </div>
    </div>
  );
}
