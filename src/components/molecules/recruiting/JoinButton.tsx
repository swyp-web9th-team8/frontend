"use client";

interface Props {
  isJoined: boolean;
}

function JoinButton({ isJoined }: Props) {
  return (
    <button
      className={`text-body1-medium bottom-0 flex w-full cursor-pointer items-center justify-center rounded-xl py-3 ${
        isJoined ? "bg-gray-200" : "bg-gray-green"
      }`}
      onClick={() => {}}
      disabled={!isJoined}
    >
      {isJoined ? "참여 취소하기" : "참여하기"}
    </button>
  );
}

export default JoinButton;
