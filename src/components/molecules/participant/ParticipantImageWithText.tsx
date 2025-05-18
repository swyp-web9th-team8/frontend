import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import { IParticipant } from "@/types/gatherings";

interface Props {
  participantCount: number;
  participants: IParticipant[];
  size: "small" | "large";
}

function ParticipantImageWithText({
  participantCount,
  participants,
  size,
}: Props) {
  const participantImages = participants.map(
    (participant) => participant.profileImage,
  );

  const isMoreThanThree = participantCount > 3;

  const textClass =
    size === "small"
      ? "text-body4-medium text-white"
      : "text-body2-medium text-gray-950";

  return (
    <>
      <ProfileImages
        src={participantImages}
        maxCount={participantCount < 2 ? 1 : 2}
      />
      <div className={`text-gsans-medium justify-start ${textClass}`}>
        {isMoreThanThree ? "외" : ""} {participantCount}명 참가
      </div>
    </>
  );
}

export default ParticipantImageWithText;
