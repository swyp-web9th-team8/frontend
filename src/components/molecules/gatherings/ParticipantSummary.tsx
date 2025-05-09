import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import ProfileImages from "@/components/atoms/ProfileImage/ProfileImages";
import ParticipantWithLabel from "@/components/molecules/ParticipantWithLabel";

export default function ParticipantSummary() {
  return (
    <div className="inline-flex items-center justify-start gap-11 self-stretch">
      <ParticipantWithLabel title="모임장">
        <ProfileImage src={undefined} size={28} />
        <div className="justify-start text-sm leading-none font-medium text-gray-950">
          나리이
        </div>
      </ParticipantWithLabel>
      <ParticipantWithLabel title="참가인원">
        <ProfileImages src={[]} maxCount={2} />
        <div className="justify-start text-sm leading-none font-medium text-gray-950">
          외 2명
        </div>
      </ParticipantWithLabel>
    </div>
  );
}
