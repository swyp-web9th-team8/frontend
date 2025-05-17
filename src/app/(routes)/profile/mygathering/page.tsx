"use client";

import { useState } from "react";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import Header from "@/components/organisms/Header";
import MyGatheringCardList from "@/components/organisms/mygathering/MyGatheringCardList";
import { useRouter } from "next/navigation";
import Empty from "@/components/organisms/Empty";
import {
  useCreatedGatherings,
  useParticipatedGatherings,
} from "@/hooks/queries/useMyGatherings";

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
    data: participatedData = [],
    isLoading: isLoadingParticipated,
    error: participatedError,
  } = useParticipatedGatherings();

  const {
    data: createdData = [],
    isLoading: isLoadingCreated,
    error: createdError,
  } = useCreatedGatherings();

  const isLoading = isLoadingParticipated || isLoadingCreated;
  const error = participatedError || createdError;

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

  const participatedGatherings = (participatedData || []).map((g) => ({
    id: g.id,
    title: g.title,
    date: new Date(g.meetingDt).toLocaleDateString(),
    time: new Date(g.meetingDt).toLocaleTimeString(),
    location: g.placeName || "장소 미정",
    status: g.completed ? "완료" : calculateDday(g.meetingDt),
    isReviewed: false,
  }));

  const createdGatherings = (createdData || []).map((g) => ({
    id: g.id,
    title: g.title,
    date: new Date(g.meetingDt).toLocaleDateString(),
    time: new Date(g.meetingDt).toLocaleTimeString(),
    location: g.placeName || "장소 미정",
    status: g.completed ? "완료" : calculateDday(g.meetingDt),
    isReviewed: false,
  }));

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
                onClick={() => router.push("/gathering/create")}
                className="bg-green text-body1-medium font-gsans-medium text-grey-0 cursor-pointer rounded-xl px-[2.75rem] py-3"
              >
                모임 만들기
              </button>
            </Empty>
          </div>
        ) : (
          <MyGatheringCardList
            items={isMineTab ? createdGatherings : participatedGatherings}
          />
        )}
      </div>
    </div>
  );
}
