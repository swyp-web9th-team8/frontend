import { requestHandler } from "@/lib/axiosInstance";
import { RankingType } from "@/types/ranking";

export const fetchRanking = async (type: RankingType) => {
  return await requestHandler<RankingType>("get", `/api/rankings?type=${type}`);
};
