import { useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchCreatedGatherings,
  CreatedGatheringResponse,
} from "@/api/gatherings/myGatherings";

const ROWS_PER_PAGE = 10;

export const useFetchMyCreatedGatheringList = () => {
  return useInfiniteQuery<CreatedGatheringResponse>({
    queryKey: ["myCreatedGatheringList"],
    queryFn: ({ pageParam = 0 }) =>
      fetchCreatedGatherings({
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
