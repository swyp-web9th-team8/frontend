import { useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchParticipatedGatherings,
  ParticipatedGatheringResponse,
} from "@/api/gatherings/myGatherings";

const ROWS_PER_PAGE = 10;

export const useFetchMyParticipatedGatheringList = () => {
  return useInfiniteQuery<ParticipatedGatheringResponse>({
    queryKey: ["myParticipatedGatheringList"],
    queryFn: ({ pageParam = 0 }) =>
      fetchParticipatedGatherings({
        page: pageParam as number,
        size: ROWS_PER_PAGE,
      }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.totalPages - 1 !== lastPage.page ? nextPage : undefined;
    },
    initialPageParam: 0,
  });
};
