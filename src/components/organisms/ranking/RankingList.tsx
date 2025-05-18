import { IRankingResponseDataItem } from "@/types/ranking";
import RankingItem from "./RankingItem";

interface Props {
  data: IRankingResponseDataItem[];
}

function RankingList({ data }: Props) {
  return (
    <div className="mt-[32px] flex flex-col gap-2.5">
      {data.map((item) => (
        <RankingItem key={item.userId} data={item} />
      ))}
    </div>
  );
}

export default RankingList;
