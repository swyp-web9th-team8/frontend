"use client";

import IconNotification from "@/assets/icons/IconNotification.svg";
import IconSearch from "@/assets/icons/IconSearch.svg";
import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import RegionSelectorModal from "@/components/molecules/RegionSelectorModal";
import GatheringListGroup from "@/components/organisms/homegatherings/GatheringListGroup";
import SearchOverlay from "@/components/templates/SearchOverlay";
import { useModal } from "@/hooks/features/commons/useModal";
import { useFetchCompletedPostId } from "@/hooks/queries/useReview";
import { useSearchStore } from "@/stores/searchStore";
import { IGatheringItem } from "@/types/gatherings";
import { formatDate } from "@/utils/day";
import { groupGatheringsByDate } from "@/utils/gatherings";
import { useState } from "react";
import LocationSelectorDropdown from "../molecules/homefeed/LocationSelectorDropdown";

interface HomeFeedTemplateProps {
  gatherings: IGatheringItem[];
  isClosedView: boolean;
  onChangeTab: (closed: boolean) => void;
}

export default function HomeFeedTemplate({
  gatherings,
  isClosedView,
  onChangeTab,
}: HomeFeedTemplateProps) {
  const groupedList = groupGatheringsByDate(gatherings);
  const openSearch = useSearchStore((state) => state.open);

  const [selectedLocation, setSelectedLocation] = useState("서초동");

  const {
    state: { isOpen: isModalOpen },
    handlers: { handleOpenModal, handleCloseModal },
  } = useModal();

  const { data } = useFetchCompletedPostId();
  console.log("data", data);

  return (
    <div className="min-h-screen pt-[4.5rem] pb-28">
      <div className="mb-9 flex items-center justify-between">
        <LocationSelectorDropdown
          selected={selectedLocation}
          onSelect={setSelectedLocation}
          onOpenModal={handleOpenModal}
        />

        <div className="flex gap-4">
          <button onClick={openSearch} className="cursor-pointer">
            <IconSearch className="h-6 w-6" />
          </button>
          <button>
            <IconNotification />
          </button>
        </div>
      </div>

      <GatheringFilterTabs
        tabLabels={["모집중인 모임", "모집 완료된 모임"]}
        selected={isClosedView}
        onChange={onChangeTab}
      />

      {groupedList.map((items) => {
        const date = formatDate(items[0].meetingTime, "yyyy-MM-dd");
        return (
          <GatheringListGroup
            key={date}
            date={date}
            items={items}
            isClosed={isClosedView}
          />
        );
      })}

      <GatheringCreateButton />
      <SearchOverlay />

      <RegionSelectorModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSelect={(region) => {
          setSelectedLocation(region);
          handleCloseModal();
        }}
      />
    </div>
  );
}
