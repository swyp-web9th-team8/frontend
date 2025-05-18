import { fetchRanking } from "@/api/ranking/ranking";
import { IRankingResponse, RankingType } from "@/types/ranking";
import { useQuery } from "@tanstack/react-query";

export const useFetchRanking = (type: RankingType) => {
  const { data, isLoading } = useQuery<IRankingResponse>({
    queryKey: ["fetchRanking", type],
    queryFn: () => fetchRanking(type),
  });

  return {
    data: data?.data,
    isLoading,
  };
};
