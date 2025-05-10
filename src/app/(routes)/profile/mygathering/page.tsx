"use client";

import { useState } from "react";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import Header from "@/components/organisms/Header";
import MyGatheringCardList from "@/components/organisms/mygathering/MyGatheringCardList";
import { mygatherings } from "@/data/mygathering";
import { useRouter } from "next/navigation";
import Empty from "@/components/organisms/Empty";

export default function MyGatheringPage() {
  const [isMineTab, setIsMineTab] = useState(false);
  const router = useRouter();

  const myGatherings = mygatherings
    .filter((g) => g.isMine)
    .map((g) => ({
      id: g.postId,
      title: g.title,
      date: g.date,
      time: g.time,
      location: g.placeName,
      status: g.status,
      isReviewed: g.isReviewed,
    }));

  const joinedGatherings = mygatherings
    .filter((g) => !g.isMine)
    .map((g) => ({
      id: g.postId,
      title: g.title,
      date: g.date,
      time: g.time,
      location: g.placeName,
      status: g.status,
      isReviewed: g.isReviewed,
    }));

  const isEmptyMyGatherings = isMineTab && myGatherings.length === 0;

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
            items={isMineTab ? myGatherings : joinedGatherings}
          />
        )}
      </div>
    </div>
  );
}
