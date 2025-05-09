import Description from "@/components/molecules/recruiting/Description";
import JoinButton from "@/components/molecules/recruiting/JoinButton";
import ParticipantSummary from "@/components/molecules/recruiting/ParticipantSummary";
import RecruitingSummary from "@/components/molecules/recruiting/RecruitingSummary";
import Title from "@/components/molecules/recruiting/Title";
import { IRecrutingGatherings } from "@/types/recruitingGatherings";

interface Props {
  data: IRecrutingGatherings;
}

function GatheringRecruiting({ data }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-[23px]">
      <Title title={data.title} />
      <div className="flex flex-1 flex-col gap-9">
        <RecruitingSummary
          meetingTime={data.meetingTime}
          placeName={data.placeName}
          openChatUrl={data.openChatUrl}
        />
        <ParticipantSummary
          writer={data.writer}
          participants={data.participants}
          maxParticipants={data.maxParticipants}
        />
        <Description content={data.content} />
        <div className="mt-auto mb-[42px] w-full">
          <JoinButton isJoined={false} />
        </div>
      </div>
    </div>
  );
}

export default GatheringRecruiting;
