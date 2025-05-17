import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import ParticipantWithLabel from "@/components/molecules/ParticipantWithLabel";
import { IFetchGatheringDetailResponse } from "@/types/gatherings";

type Props = Pick<IFetchGatheringDetailResponse, "data">;

function ParticipantInfo({
  data: { writer, participants, maxParticipants },
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
          src={[
            ...participants.map((participant) => participant.profileImage),
            writer.profileImage,
          ]}
          maxCount={participants.length === 0 ? 1 : 2}
        />
        <div className="justify-start text-sm leading-none font-medium text-gray-950">
          {participants.length + 1} / {maxParticipants}
        </div>
      </ParticipantWithLabel>
    </div>
  );
}

export default ParticipantInfo;
