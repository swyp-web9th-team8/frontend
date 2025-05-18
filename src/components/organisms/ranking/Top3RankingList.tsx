import { IRankingResponseDataItem } from "@/types/ranking";
import Top3RankingItem from "./Top3RankingItem";

interface Props {
  data: IRankingResponseDataItem[];
}
function Top3RankingList({ data }: Props) {
  // data 재배치
  return (
    <div className="relative mt-2.5 flex h-[237px] w-full">
      {data[0] && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <Top3RankingItem ranking={1} data={data[0]} />
        </div>
      )}
      {data[1] && (
        <div className="absolute top-[38px] left-0">
          <Top3RankingItem ranking={2} data={data[1]} />
        </div>
      )}
      {data[2] && (
        <div className="absolute top-[38px] right-0">
          <Top3RankingItem ranking={3} data={data[2]} />
        </div>
      )}
    </div>
  );
}

export default Top3RankingList;
