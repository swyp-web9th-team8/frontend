import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import ParticipantWithLabel from "@/components/molecules/ParticipantWithLabel";
import { IFetchGatheringDetailResponse } from "@/types/gatherings";
import ParticipantImageWithText from "../participant/ParticipantImageWithText";

type Props = Pick<IFetchGatheringDetailResponse, "data">;

export default function ParticipantSummary({
  data: { writer, participants },
}: Props) {
  return (
    <div className="inline-flex items-center justify-start gap-11 self-stretch">
      <ParticipantWithLabel title="모임장">
        <ProfileImage src={writer.profileImage} size={28} />
        <div className="justify-start text-sm leading-none font-medium text-gray-950">
          {writer.nickname}
        </div>
      </ParticipantWithLabel>
      <ParticipantWithLabel title="참가인원">
        <ParticipantImageWithText
          participantCount={participants.length + 1}
          participants={[...participants, writer]}
          size="large"
        />
      </ParticipantWithLabel>
    </div>
  );
}
