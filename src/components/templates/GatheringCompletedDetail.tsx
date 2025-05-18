"use client";

import GreenBadge from "@/components/atoms/Badge/GreenBadge";
import GatheringInfo from "@/components/molecules/gatherings/GatheringInfo";
import ImageCarousel from "@/components/molecules/gatherings/ImageCarousel";
import ParticipantSummary from "@/components/molecules/gatherings/ParticipantSummary";
import { useFetchGatheringDetail } from "@/hooks/queries/useFetchGatheringDetail";

interface Props {
  id: number;
}

export default function GatheringCompletedDetail({ id }: Props) {
  const { data } = useFetchGatheringDetail(id);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(
    "data",
    data.imageUrls?.map((url) => url),
  );

  const imageUrls = data.imageUrls?.map((url) => url) || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="mr-[-20px] mb-8">
        <ImageCarousel imageUrls={imageUrls} />
      </div>
      <GreenBadge>모임 완료 ✌️</GreenBadge>
      <GatheringInfo data={data} />
      <ParticipantSummary data={data} />
    </div>
  );
}
