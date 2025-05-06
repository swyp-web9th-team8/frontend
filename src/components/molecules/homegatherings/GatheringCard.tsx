import IconClock from "@/assets/icons/clock.svg";
import IconLocation from "@/assets/icons/location.svg";
import { IGatheringItem } from "@/types/gatherings";

interface GatheringCardProps {
  gathering: IGatheringItem;
  isClosed?: boolean;
}

export default function GatheringCard({
  gathering,
  isClosed = false,
}: GatheringCardProps) {
  return (
    <div className="flex justify-between rounded-2xl p-4 shadow-[0_4px_24px_rgba(170,170,170,0.15)]">
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
      {!isClosed && (
        <div className="flex flex-col gap-[1.375rem]">
          <span className="text-body3-medium font-gsans-medium text-grey-400">
            {gathering.participantCount}자리 남음
          </span>
          <button className="bg-green font-gsans-medium text-body3-medium text-grey-0 rounded-full px-3 py-2">
            참여하기
          </button>
        </div>
      )}
    </div>
  );
}
