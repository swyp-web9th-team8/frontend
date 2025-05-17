import { fetchGatheringDetail } from "@/api/gatherings/gatherings";
import { IFetchGatheringDetailResponse } from "@/types/gatherings";
import { useQuery } from "@tanstack/react-query";

export const useFetchGatheringDetail = (postId: number) => {
  const { data } = useQuery<number, Error, IFetchGatheringDetailResponse>({
    queryKey: ["fetchGatheringDetail", postId],
    queryFn: () => fetchGatheringDetail(postId),
  });

  return { data: data?.data };
};
