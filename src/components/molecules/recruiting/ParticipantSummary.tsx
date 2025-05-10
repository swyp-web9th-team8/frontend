import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import ParticipantWithLabel from "@/components/molecules/ParticipantWithLabel";
import { IRecrutingGatherings } from "@/types/recruitingGatherings";

type Props = Pick<
  IRecrutingGatherings,
  "writer" | "participants" | "maxParticipants"
>;

function ParticipantInfo({ writer, participants, maxParticipants }: Props) {
  return (
    <div className="inline-flex items-center justify-start gap-11 self-stretch">
      <ParticipantWithLabel title="모임장">
        <ProfileImage src={writer.profileImageUrl} size={28} />
        <div className="justify-start text-sm leading-none font-medium text-gray-950">
          {writer.nickname}
        </div>
      </ParticipantWithLabel>
      <ParticipantWithLabel title="참가인원">
        <ProfileImages
          src={participants.map((participant) => participant.profileImageUrl)}
          maxCount={2}
        />
        <div className="justify-start text-sm leading-none font-medium text-gray-950">
          {participants.length} / {maxParticipants}
        </div>
      </ParticipantWithLabel>
    </div>
  );
}

export default ParticipantInfo;
