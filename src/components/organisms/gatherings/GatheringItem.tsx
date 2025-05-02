/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"

import LocationIcon from "@/assets/icons/location.svg";
import NextIcon from "@/assets/icons/next-arrow.svg";
import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import { IGatheringItem } from "@/types/gatherings";
import Image from "next/image";
import Link from "next/link";

interface Props extends IGatheringItem { }

export default function GatheringItem({ participantCount, postId, title, placeName }: Props) {
    return (
        <div className="inline-flex flex-col justify-start items-start gap-2.5 w-full">
            <div className="self-stretch rounded-2xl overflow-hidden relative">
                {/* 이미지 */}
                <Image className="w-full h-[200px] object-cover" src="https://placehold.co/310x207" alt="gathering" sizes='100vw' width={0} height={0} />

                {/* 그라데이션 */}
                <div className="w-full h-[200px] bg-gradient-to-t from-black/85 via-neutral-600/60 to-gray-100/0 rounded-2xl absolute top-0 left-0" />

                {/* 참여자 */}
                <div className="left-[18px] bottom-[18px] absolute inline-flex justify-start items-center gap-1">
                    <ProfileImages src={[]} maxCount={2} />
                    <div className="justify-start text-white text-[10px] font-medium font-['Gmarket_Sans_TTF'] leading-none">외 {participantCount}명 참가</div>
                </div>

                {/* 링크 이동 */}
                <Link href={`/gatherings/${postId}`} className="flex w-8 h-8 bg-[#F7F4EF] rounded-full justify-center items-center absolute right-3 bottom-3">
                    <NextIcon className="w-5 h-5" />
                </Link>
            </div>

            {/* 설명 */}
            <div className="self-stretch inline-flex justify-start items-end gap-1.5">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch justify-start text-greyscale-gray-950 text-base font-bold font-['Gmarket_Sans_TTF'] leading-normal">{title}</div>
                    <div className="inline-flex justify-start items-center gap-2.5">
                        <LocationIcon className="w-[18px] h-[22px]" />
                        <div className="justify-start text-greyscale-gray-950 text-sm font-medium font-['Gmarket_Sans_TTF'] leading-none">{placeName}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

