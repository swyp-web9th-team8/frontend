"use client";
import React, { useState } from "react";
import { IGatheringItem } from "@/types/gatherings";
import IconSearch from "@/assets/icons/IconSearch.svg";
import IconNotification from "@/assets/icons/IconNotification.svg";
import IconDropdown from "@/assets/icons/dropdown-arrow.svg";
import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatgeringFilterTabs";
import GatheringListGroup from "@/components/organisms/homegatherings/GatheringLishGroup";

interface HomeFeedTemplateProps {
  gatherings: IGatheringItem[];
}

export default function HomeFeedTemplate({
  gatherings,
}: HomeFeedTemplateProps) {
  const [selectedTab, setSelectedTab] = useState<"active" | "closed">("active");

  const groupedByDate = gatherings.reduce<Record<string, IGatheringItem[]>>(
    (acc, curr) => {
      const date = curr.meetingTime.split("T")[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(curr);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen px-5 pt-[4.5rem] pb-28">
      <div className="mb-9 flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <h1 className="font-gsans-medium text-heading2-medium text-grey-950">
            서초동
          </h1>
          <button>
            <IconDropdown className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4">
          <button>
            <IconSearch />
          </button>
          <button>
            <IconNotification />
          </button>
        </div>
      </div>

      <GatheringFilterTabs selected={selectedTab} onChange={setSelectedTab} />

      {Object.entries(groupedByDate).map(([date, items]) => (
        <GatheringListGroup key={date} date={date} items={items} />
      ))}

      <GatheringCreateButton />
    </div>
  );
}
