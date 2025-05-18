import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import { IParticipant } from "@/types/gatherings";

interface Props {
  participantCount: number;
  participants: IParticipant[];
}

function ParticipantImageWithText({ participantCount, participants }: Props) {
  const participantImages = participants.map(
    (participant) => participant.profileImage,
  );

  const isMoreThanThree = participantCount > 3;

  return (
    <>
      <ProfileImages
        src={participantImages}
        maxCount={participantCount < 2 ? 1 : 2}
      />
      <div className="justify-start text-[10px] leading-none font-medium text-white">
        {isMoreThanThree ? "외" : ""} {participantCount}명 참가
      </div>
    </>
  );
}

export default ParticipantImageWithText;
