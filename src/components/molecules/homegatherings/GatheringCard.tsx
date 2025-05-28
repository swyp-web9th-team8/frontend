import IconClock from "@/assets/icons/clock.svg";
import IconLocation from "@/assets/icons/location.svg";
import {
  useLeaveCancelGathering,
  useParticipateGathering,
} from "@/hooks/queries/useParticipateGathering";
import { IGatheringItem } from "@/types/gatherings";
import { formatMeetingTime } from "@/utils/day";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface GatheringCardProps {
  gathering: IGatheringItem;
  isClosed?: boolean;
}

export default function GatheringCard({
  gathering,
  isClosed = false,
}: GatheringCardProps) {
  const { mutateAsync: participate, isPending } = useParticipateGathering();
  const { mutateAsync: leave } = useLeaveCancelGathering();

  const router = useRouter();

  const [isJoined, setIsJoined] = useState(gathering.iin);

  const handleParticipate = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isJoined) {
      try {
        await participate(gathering.id);
        setIsJoined(true);
      } catch {}
    } else {
      try {
        await leave(gathering.id);
        setIsJoined(false);
      } catch {}
    }
  };

  const handleClick = () => {
    router.push(`/gatherings/recruiting/${gathering.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full min-w-0 cursor-pointer justify-between rounded-2xl p-4 shadow-[0_4px_24px_rgba(170,170,170,0.15)]"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="font-gsans-bold text-body2-medium text-grey-950 truncate">
          {gathering.title}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-body2-medium font-gsans-medium text-grey-950 flex gap-2">
            <IconClock className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">
              {formatMeetingTime(gathering.meetingTime)}
            </span>
          </div>
          <div className="text-body2-medium font-gsans-medium text-grey-950 flex w-full gap-2">
            <IconLocation className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{gathering.address}</span>
          </div>
        </div>
      </div>
      {!isClosed && (
        <div className="ml-4 flex flex-shrink-0 flex-col gap-[1.375rem]">
          <span className="text-body3-medium font-gsans-medium text-grey-400 text-end whitespace-nowrap">
            {gathering.maxParticipants - gathering.participantCount}자리 남음
          </span>
          {isJoined ? (
            <div
              onClick={(e) => {
                handleParticipate(e);
              }}
              className="bg-grey-200 font-gsans-medium text-body3-medium text-grey-0 h-[2.125rem] rounded-full px-3 py-2 whitespace-nowrap"
            >
              참여하기
            </div>
          ) : (
            <div
              onClick={(e) => {
                handleParticipate(e);
              }}
              className={`bg-green font-gsans-medium text-body3-medium text-grey-0 h-[2.125rem] cursor-pointer rounded-full px-3 py-2 whitespace-nowrap ${
                isPending ? "opacity-50" : ""
              }`}
            >
              {isPending ? "참여중..." : "참여하기"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
