import {
  fetchClosedgatheringList,
  fetchOngoingGatheringList,
} from "@/api/gatherings/gatherings";
import { IFetchGatheringListResponse } from "@/types/gatherings";
import { useInfiniteQuery } from "@tanstack/react-query";

const ROWS_PER_PAGE = 20;

/** 홈 화면 - 모집중/마감된 모임 */
export const useFetchGatheringList = (closed: boolean) => {
  const { data, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery<IFetchGatheringListResponse>({
      queryKey: ["fetchGatheringList", closed],
      queryFn: ({ pageParam }) => {
        const payload = {
          pos: "도봉구 창동",
          page: pageParam as number,
          size: ROWS_PER_PAGE,
        };

        return closed
          ? fetchClosedgatheringList(payload)
          : fetchOngoingGatheringList(payload);
      },
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        return lastPage.totalPages !== lastPage.page ? nextPage : undefined;
      },
      initialPageParam: 0,
    });

  const response = data?.pages.flatMap((page) => page.content) || [];

  return {
    fetchNextPage,
    hasNextPage,
    refetch,
    data: response,
  };
};

/** 홈 화면 - 모집 완료된 모임 */
export const useFetchClosedGatheringList = () => {};

/** 모임 화면 - 활동이 완료된 모임 */
export const useFetchCompletedGatheringList = () => {};
