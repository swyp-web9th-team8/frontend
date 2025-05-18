import { fetchRanking } from "@/api/ranking/ranking";
import { IRankingResponse, RankingType } from "@/types/ranking";
import { useQuery } from "@tanstack/react-query";

export const useFetchRanking = (type: RankingType) => {
  return useQuery<IRankingResponse>({
    queryKey: ["fetchRanking"],
    queryFn: () => fetchRanking(type),
  });
};
