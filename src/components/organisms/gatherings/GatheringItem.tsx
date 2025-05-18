"use client";

import LocationIcon from "@/assets/icons/location.svg";
import NextIcon from "@/assets/icons/next-arrow.svg";
import ParticipantImageWithText from "@/components/molecules/participant/ParticipantImageWithText";
import { IGatheringItem } from "@/types/gatherings";
import Image from "next/image";
import Link from "next/link";

type Props = Pick<
  IGatheringItem,
  "id" | "title" | "address" | "participants" | "participantCount" | "thumbnail"
>;

export default function GatheringItem({
  id,
  title,
  address,
  participants,
  participantCount,
  thumbnail,
}: Props) {
  const thumbnailUrl = thumbnail
    ? process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`
      : `http://localhost:8080${thumbnail}`
    : "/images/default-gathering.png";

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
      <div className="relative self-stretch overflow-hidden rounded-2xl">
        {/* 이미지 */}
        <Image
          className="h-[200px] w-full object-cover"
          src={thumbnailUrl}
          alt="gathering"
          sizes="100vw"
          width={0}
          height={0}
        />

        {/* 그라데이션 */}
        <div className="absolute top-0 left-0 h-[200px] w-full rounded-2xl bg-gradient-to-t from-black/85 via-neutral-600/60 to-gray-100/0" />

        {/* 참여자 */}
        <div className="absolute bottom-[18px] left-[18px] inline-flex items-center justify-start gap-1">
          <ParticipantImageWithText
            participantCount={participantCount + 1}
            participants={participants}
            size="small"
          />
        </div>

        {/* 링크 이동 */}
        <Link
          href={`/gatherings/completed/${id}`}
          className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F4EF]"
        >
          <NextIcon className="h-5 w-5" />
        </Link>
      </div>

      {/* 설명 */}
      <div className="inline-flex items-end justify-start gap-1.5 self-stretch">
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-1.5">
          <div className="justify-start self-stretch text-base leading-normal font-bold text-gray-950">
            {title}
          </div>
          <div className="inline-flex items-center justify-start gap-2.5">
            <LocationIcon className="h-[22px] w-[18px]" />
            <div className="tex-gray-950 justify-start text-sm leading-none font-medium">
              {address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
