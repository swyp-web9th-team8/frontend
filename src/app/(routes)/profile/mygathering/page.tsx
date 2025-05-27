"use client";

import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import Empty from "@/components/organisms/Empty";
import Header from "@/components/organisms/Header";
import MyGatheringCardList from "@/components/organisms/mygathering/MyGatheringCardList";
import { formatDateAndTime } from "@/utils/day";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFetchMyCreatedGatheringList } from "@/hooks/queries/useFetchMyCreatedGatheringList";
import { useFetchMyParticipatedGatheringList } from "@/hooks/queries/useFetchMyParticipatedGatheringList";
import useIntersectionObserver from "@/hooks/features/commons/useIntersectionObserver";

const calculateDday = (meetingDt: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const meetingDate = new Date(meetingDt);
  meetingDate.setHours(0, 0, 0, 0);

  const diffTime = meetingDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "D-day";
  if (diffDays < 0) return "종료";
  return `D-${diffDays}`;
};

export default function MyGatheringPage() {
  const [isMineTab, setIsMineTab] = useState(false);
  const router = useRouter();

  const {
    data: createdData,
    fetchNextPage: fetchNextCreatedPage,
    hasNextPage: hasNextCreatedPage,
    isLoading: isLoadingCreated,
    error: createdError,
  } = useFetchMyCreatedGatheringList();

  const {
    data: participatedData,
    fetchNextPage: fetchNextParticipatedPage,
    hasNextPage: hasNextParticipatedPage,
    isLoading: isLoadingParticipated,
    error: participatedError,
  } = useFetchMyParticipatedGatheringList();

  const isLoading = isLoadingParticipated || isLoadingCreated;
  const error = participatedError || createdError;

  const { setTarget } = useIntersectionObserver({
    hasNextPage: isMineTab ? hasNextCreatedPage : hasNextParticipatedPage,
    fetchNextPage: isMineTab ? fetchNextCreatedPage : fetchNextParticipatedPage,
  });

  if (isLoading) {
    return (
      <div className="py-6">
        <Header title="내 모임" backButton rightButton />
        <div className="flex h-[60vh] items-center justify-center">
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6">
        <Header title="내 모임" backButton rightButton />
        <div className="flex h-[60vh] items-center justify-center">
          <p>데이터를 불러오는데 실패했습니다.</p>
        </div>
      </div>
    );
  }

  const participatedGatherings =
    participatedData?.pages.flatMap((page) =>
      (page.content ?? []).map((g) => ({
        id: g.id,
        title: g.title,
        date: formatDateAndTime(g.meetingDt, "yyyy년 M월 d일 E요일"),
        time: formatDateAndTime(g.meetingDt, "a h시"),
        location: g.address || "장소 미정",
        status: g.completed ? "완료" : calculateDday(g.meetingDt),
        isReviewed: false,
      })),
    ) ?? [];

  const createdGatherings =
    createdData?.pages.flatMap((page) =>
      (page.content ?? []).map((g) => ({
        id: g.id,
        title: g.title,
        date: formatDateAndTime(g.meetingDt, "yyyy년 M월 d일 E요일"),
        time: formatDateAndTime(g.meetingDt, "a h시"),
        location: g.address || "장소 미정",
        status: g.completed ? "완료" : calculateDday(g.meetingDt),
        isReviewed: false,
      })),
    ) ?? [];

  const isEmptyMyGatherings =
    isMineTab && (!createdData || createdGatherings.length === 0);

  return (
    <div className="py-6">
      <Header title="내 모임" backButton rightButton />
      <GatheringFilterTabs
        tabLabels={["참여한 모임", "내가 만든 모임"]}
        selected={isMineTab}
        onChange={setIsMineTab}
      />
      <div className="mt-4 flex flex-col gap-6">
        {isEmptyMyGatherings ? (
          <div className="relative h-[60vh]">
            <Empty
              largeText="회원님이 만든 모임이 없어요"
              smallText="새 모임을 만들어 보실래요?"
            >
              <button
                onClick={() => router.push("/gatherings/create")}
                className="bg-green text-body1-medium font-gsans-medium text-grey-0 cursor-pointer rounded-xl px-[2.75rem] py-3"
              >
                모임 만들기
              </button>
            </Empty>
          </div>
        ) : (
          <>
            <MyGatheringCardList
              items={isMineTab ? createdGatherings : participatedGatherings}
            />
            {(isMineTab ? hasNextCreatedPage : hasNextParticipatedPage) && (
              <div className="h-4" ref={setTarget}></div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
