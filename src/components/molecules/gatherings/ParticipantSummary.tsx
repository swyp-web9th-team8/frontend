import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import ParticipantWithLabel from "@/components/molecules/ParticipantWithLabel";
import { IFetchGatheringDetailResponse } from "@/types/gatherings";

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
        <ProfileImages
          src={participants
            .filter((p) => p.profileImage)
            .map((p) => p.profileImage)}
          maxCount={2}
        />
        {participants.length - 2 && (
          <div className="justify-start text-sm leading-none font-medium text-gray-950">
            외 {participants.length - 2}명
          </div>
        )}
      </ParticipantWithLabel>
    </div>
  );
}
