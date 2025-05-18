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

  const { mutate: participate } = useParticipateGathering();
  const { mutate: leave } = useLeaveCancelGathering();

  const handleClick = () => {
    if (!isJoined) {
      participate(id);
      setIsJoined(true);
    } else {
      leave(id);
      setIsJoined(false);
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
