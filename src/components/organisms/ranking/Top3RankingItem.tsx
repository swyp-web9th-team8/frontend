import Rank1 from "@/assets/icons/rank1.svg";
import Rank2 from "@/assets/icons/rank2.svg";
import Rank3 from "@/assets/icons/rank3.svg";
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
    <div className="relative z-0 inline-flex w-24 flex-col items-center justify-start gap-1.5">
      <ProfileImage src={profileImageDir} size={profileImageSize} />
      {ranking === 1 && <Rank1 className={`absolute -top-6 left-0.5 -z-10`} />}
      {ranking === 2 && <Rank2 className={`absolute -top-4 left-2.5 -z-10`} />}
      {ranking === 3 && <Rank3 className={`absolute -top-4 right-2.5 -z-10`} />}
      <div className="text-body1-medium text -center justify-start text-gray-950">
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
