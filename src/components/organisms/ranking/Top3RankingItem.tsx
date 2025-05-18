import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import { IRankingResponseDataItem } from "@/types/ranking";

interface Props {
  ranking: number;
  data: IRankingResponseDataItem;
}
function Top3RankingItem({
  ranking,
  data: { nickname, totalMeet, profileImageDir },
}: Props) {
  const profileImageSize = ranking === 1 ? 96 : 80;

  return (
    <div className="inline-flex w-24 flex-col items-center justify-start gap-1.5">
      <ProfileImage src={profileImageDir} size={profileImageSize} />
      <div className="text-body1-medium justify-start text-center text-gray-950">
        {nickname}
      </div>
      <div className="bg-green inline-flex items-center justify-start gap-1.5 rounded-xl px-3 py-0.5">
        <div className="text-body4-medium justify-center text-white">
          {totalMeet}회
        </div>
      </div>
    </div>
  );
}

export default Top3RankingItem;
