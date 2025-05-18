"use client";

import Description from "@/components/molecules/recruiting/Description";
import JoinButton from "@/components/molecules/recruiting/JoinButton";
import ParticipantSummary from "@/components/molecules/recruiting/ParticipantSummary";
import RecruitingSummary from "@/components/molecules/recruiting/RecruitingSummary";
import Title from "@/components/molecules/recruiting/Title";
import { useFetchGatheringDetail } from "@/hooks/queries/useFetchGatheringDetail";

interface Props {
  id: number;
}

function GatheringRecruiting({ id }: Props) {
  const { data } = useFetchGatheringDetail(id);

  if (!data) {
    return <div>Loading...</div>;
  }

  const areadyJoined =
    data.iin || Boolean(data.participants.length + 1 >= data.maxParticipants);

  return (
    <>
      {data && (
        <div className="flex flex-1 flex-col gap-[23px]">
          <Title title={data.title} />
          <div className="flex flex-1 flex-col gap-9">
            <RecruitingSummary data={data} />
            <ParticipantSummary data={data} />
            <Description data={data} />
            <div className="mt-auto mb-[42px] w-full">
              <JoinButton areadyJoined={areadyJoined} id={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GatheringRecruiting;
