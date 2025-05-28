"use client";

import {
  useLeaveCancelGathering,
  useParticipateGathering,
} from "@/hooks/queries/useParticipateGathering";
import { useState } from "react";

interface Props {
  id: number;
  areadyJoined: boolean;
}

function JoinButton({ id, areadyJoined }: Props) {
  const [isJoined, setIsJoined] = useState(areadyJoined);

  const { mutateAsync: participate } = useParticipateGathering();
  const { mutateAsync: leave } = useLeaveCancelGathering();

  const handleClick = async () => {
    if (!isJoined) {
      try {
        await participate(id);
        setIsJoined(true);
      } catch {}
    } else {
      try {
        await leave(id);
        setIsJoined(false);
      } catch {}
    }
  };

  return (
    <button
      className={`text-body1-medium bg-green bottom-0 flex w-full cursor-pointer items-center justify-center rounded-xl py-3`}
      onClick={handleClick}
    >
      {isJoined ? "참여 취소하기" : "참여하기"}
    </button>
  );
}

export default JoinButton;
