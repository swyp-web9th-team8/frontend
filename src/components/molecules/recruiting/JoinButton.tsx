"use client";

interface Props {
  isJoined: boolean;
}

function JoinButton({ isJoined }: Props) {
  return (
    <button
      className="text-body1-medium bg-green text-grey-0 flex cursor-pointer items-center justify-center rounded-xl py-3"
      onClick={() => {}}
    >
      {isJoined ? "참석 취소하기" : "참여하기"}
    </button>
  );
}

export default JoinButton;
