"use client";

import { useState } from "react";
import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import GatheringListGroup from "@/components/organisms/homegatherings/GatheringListGroup";
import SearchOverlay from "@/components/templates/SearchOverlay";
import { IGatheringItem } from "@/types/gatherings";
import IconSearch from "@/assets/icons/IconSearch.svg";
import IconNotification from "@/assets/icons/IconNotification.svg";
import IconDropdown from "@/assets/icons/dropdown-arrow.svg";
import { groupGatheringsByDate } from "@/utils/gatherings";
import { formatDate } from "@/utils/day";
import { useSearchStore } from "@/stores/searchStore";
import DropdownList from "../organisms/DropdownList";
import DropdownItem from "../molecules/DropdownItem";
import { useModal } from "@/hooks/features/commons/useModal";
import RegionSelectorModal from "@/components/molecules/RegionSelectorModal";

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("서초동");

  const {
    state: { isOpen: isModalOpen },
    handlers: { handleOpenModal, handleCloseModal },
  } = useModal();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const handleDropdownItemClick = (option: string) => {
    if (option === "다른 지역 보기") {
      setIsDropdownOpen(false);
      handleOpenModal();
    } else {
      handleSelectLocation(option);
    }
  };

  return (
    <div className="min-h-screen pt-[4.5rem] pb-28">
      <div className="mb-9 flex items-center justify-between">
        <div className="relative">
          <div className="flex items-center gap-0.5">
            <h1
              className="font-gsans-medium text-heading2-medium text-grey-950 cursor-pointer"
              onClick={toggleDropdown}
            >
              {selectedLocation}
            </h1>
            <button type="button" onClick={toggleDropdown}>
              <IconDropdown
                className={`h-6 w-6 transition-all ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-[2.5rem] left-0 z-10">
              <DropdownList>
                {["내 거주지역", "현재 위치한 지역 (동)"].map((option) => (
                  <DropdownItem
                    key={option}
                    isActive={selectedLocation === option}
                    onClick={() => handleDropdownItemClick(option)}
                    type="selectable"
                  >
                    {option}
                  </DropdownItem>
                ))}

                <DropdownItem
                  key="다른 지역 보기"
                  onClick={() => handleDropdownItemClick("다른 지역 보기")}
                  type="action"
                >
                  다른 지역 보기
                </DropdownItem>
              </DropdownList>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button onClick={openSearch}>
            <IconSearch className="h-6 w-6" />
          </button>
          <button>
            <IconNotification />
          </button>
        </div>
      </div>

      <GatheringFilterTabs selected={isClosedView} onChange={onChangeTab} />

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
