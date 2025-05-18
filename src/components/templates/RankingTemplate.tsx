"use client";

import RankingList from "@/components/organisms/ranking/RankingList";
import { useFetchRanking } from "@/hooks/queries/useRanking";
import { RankingType } from "@/types/ranking";
import { useState } from "react";
import RankingTap from "../organisms/ranking/RankingTap";
import Top3RankingList from "../organisms/ranking/Top3RankingList";

function RankingTemplate() {
  const [rankingType, setRankingType] = useState<RankingType>("ALL");
  const [isWeeklyView, setIsWeeklyView] = useState(false);

  const { data, isLoading } = useFetchRanking(rankingType);

  if (!data || isLoading) return <div>Loading...</div>;

  const handleChangeTab = (closed: boolean) => {
    if (closed) {
      setRankingType("ALL");
    } else {
      setRankingType("WEEKLY");
    }
    setIsWeeklyView(closed);
  };

  return (
    <div className="flex flex-1 flex-col pt-7">
      <RankingTap selected={isWeeklyView} onChange={handleChangeTab} />
      <Top3RankingList data={data.slice(0, 3)} />
      {data.length > 3 && <RankingList data={data} />}
    </div>
  );
}

export default RankingTemplate;
