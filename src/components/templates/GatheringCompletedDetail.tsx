"use client";

import GreenBadge from "@/components/atoms/Badge/GreenBadge";
import GatheringInfo from "@/components/molecules/gatherings/GatheringInfo";
import ImageCarousel from "@/components/molecules/gatherings/ImageCarousel";
import ParticipantSummary from "@/components/molecules/gatherings/ParticipantSummary";

export default function GatheringCompletedDetail() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mr-[-20px] mb-8">
        <ImageCarousel />
      </div>
      <GreenBadge>모임 완료 ✌️</GreenBadge>
      <GatheringInfo />
      <ParticipantSummary />
    </div>
  );
}
