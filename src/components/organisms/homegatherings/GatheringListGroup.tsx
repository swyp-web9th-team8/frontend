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
    <div className="mb-5 flex min-w-0 flex-row gap-2.5 overflow-x-hidden">
      <div className="flex-shrink-0">
        <DateBadge
          month={getMonth(date)}
          day={getDay(date)}
          dayOfWeek={getDayOfWeek(date)}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {items.map((gathering) => (
          <GatheringCard
            key={gathering.id}
            gathering={gathering}
            isClosed={isClosed}
          />
        ))}
      </div>
    </div>
  );
}
