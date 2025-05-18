"use client";

import { useFetchRanking } from "@/hooks/queries/useRanking";

function RankingTemplate() {
  const { data, isLoading } = useFetchRanking("ALL");

  if (!data && isLoading) return <div>Loading...</div>;

  return <div>RankingTemplate</div>;
}

export default RankingTemplate;
