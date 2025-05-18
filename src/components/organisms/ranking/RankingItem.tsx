import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";
import { IRankingResponseDataItem } from "@/types/ranking";

interface Props {
  data: IRankingResponseDataItem;
}

function RankingItem({ data }: Props) {
  return (
    <div className="inline-flex items-center justify-between self-stretch">
      <div className="flex items-center justify-start gap-2.5">
        <div className="text-body1-medium w-5 justify-start text-center text-gray-950">
          {data.ranking}
        </div>
        <div className="text-body1-medium flex items-center justify-start gap-3">
          <ProfileImage src={data.profileImageDir} size={48} />
          {data.nickname}
        </div>
      </div>
      <div className="flex items-center justify-start gap-1.5 rounded-xl bg-gray-300 px-3 py-0.5">
        <div className="text-body4-medium justify-center text-white">
          {data.totalMeet}회
        </div>
      </div>
    </div>
  );
}

export default RankingItem;
