"use client";

import { useState } from "react";
import Header from "@/components/organisms/Header";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import MyGatheringCardList from "@/components/organisms/mygathering/MyGatheringCardList";
import { mygatherings } from "@/data/mygathering";

export default function MyGatheringPage() {
  const [isClosed, setIsClosed] = useState(false);

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

  const joinedGatherings = mygatherings.map((g) => ({
    id: g.postId,
    title: g.title,
    date: g.date,
    time: g.time,
    location: g.placeName,
    status: g.status,
    isReviewed: g.isReviewed,
  }));

  return (
    <div>
      <Header title="내 모임" backButton rightButton />

      <GatheringFilterTabs
        tabLabels={["참여한 모임", "내가 만든 모임"]}
        selected={isClosed}
        onChange={setIsClosed}
      />

      <div className="mt-4 flex flex-col gap-6">
        {isClosed ? (
          <MyGatheringCardList items={myGatherings} />
        ) : (
          <MyGatheringCardList items={joinedGatherings} />
        )}
      </div>
    </div>
  );
}
