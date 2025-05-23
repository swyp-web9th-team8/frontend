import {
  fetchClosedgatheringList,
  fetchCompletedGatheringList,
  fetchOngoingGatheringList,
} from "@/api/gatherings/gatherings";
import {
  IFetchGatheringCompletedListResponse,
  IFetchGatheringListResponse,
  IGatheringItem,
} from "@/types/gatherings";
import { useInfiniteQuery } from "@tanstack/react-query";

const ROWS_PER_PAGE = 20;

/** 홈 화면 - 모집중/마감된 모임 */
export const useFetchGatheringList = (
  closed: boolean,
  pos: string,
  searchKeyword: string = "",
) => {
  const { data, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery<IFetchGatheringListResponse>({
      queryKey: ["fetchGatheringList", closed, pos, searchKeyword],
      queryFn: ({ pageParam }) => {
        const payload = {
          pos: `서울특별시 ${pos}`,
          page: pageParam as number,
          size: ROWS_PER_PAGE,
          v: searchKeyword,
        };

        return closed
          ? fetchClosedgatheringList(payload)
          : fetchOngoingGatheringList(payload);
      },
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        return lastPage.totalPages - 1 !== lastPage.page ? nextPage : undefined;
      },
      initialPageParam: 0,
    });

  const response: IGatheringItem[] =
    data?.pages.flatMap((page) => page.content) || [];

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
export const useFetchCompletedGatheringList = () => {
  const { data, fetchNextPage, hasNextPage, refetch, isLoading } =
    useInfiniteQuery<IFetchGatheringCompletedListResponse>({
      queryKey: ["fetchGatheringCompletedList"],
      queryFn: ({ pageParam }) => {
        const payload = {
          page: pageParam as number,
          size: ROWS_PER_PAGE,
        };
        return fetchCompletedGatheringList(payload);
      },
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        return lastPage.totalPages - 1 !== lastPage.page ? nextPage : undefined;
      },
      initialPageParam: 0,
    });

  const response: IGatheringItem[] =
    data?.pages.flatMap((page) => page.content) || [];

  return {
    fetchNextPage,
    hasNextPage,
    refetch,
    data: response,
    isLoading,
  };
};
