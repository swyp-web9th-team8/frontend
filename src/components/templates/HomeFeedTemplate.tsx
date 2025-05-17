"use client";

import IconNotification from "@/assets/icons/IconNotification.svg";
import IconSearch from "@/assets/icons/IconSearch.svg";
import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import RegionSelectorModal from "@/components/molecules/RegionSelectorModal";
import GatheringListGroup from "@/components/organisms/homegatherings/GatheringListGroup";
import SearchOverlay from "@/components/templates/SearchOverlay";
import { useGeolocation } from "@/hooks/features/commons/useGeoLocation";
import useIntersectionObserver from "@/hooks/features/commons/useIntersectionObserver";
import { useModal } from "@/hooks/features/commons/useModal";
import { useFetchGatheringList } from "@/hooks/queries/useFetchGatheringList";
import { useFetchCompletedPostId } from "@/hooks/queries/useReview";
import { useSearchStore } from "@/stores/searchStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRegionStore } from "@/stores/useRegionStore";
import { formatDate } from "@/utils/day";
import { groupGatheringsByDate } from "@/utils/gatherings";
import { useEffect } from "react";
import LocationSelectorDropdown from "../molecules/homefeed/LocationSelectorDropdown";
import ReviewConfirmModal from "../organisms/modal/ReviewConfirmModal";

interface HomeFeedTemplateProps {
  isClosedView: boolean;
  onChangeTab: (closed: boolean) => void;
}

export default function HomeFeedTemplate({
  isClosedView,
  onChangeTab,
}: HomeFeedTemplateProps) {
  const region = useRegionStore((state) => state.region);
  const setRegion = useRegionStore((state) => state.setRegion);
  const authRegion = useAuthStore((state) => state.user?.region);

  useEffect(() => {
    if (!region && authRegion) {
      setRegion(authRegion);
    }
  }, [authRegion, region, setRegion]);

  const {
    data: gatheringList,
    fetchNextPage,
    hasNextPage,
  } = useFetchGatheringList(isClosedView, region || "");

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  const openSearch = useSearchStore((state) => state.open);

  const {
    state: { isOpen: isModalOpen },
    handlers: { handleOpenModal, handleCloseModal },
  } = useModal();

  const { reviewOpen, reviewId } = useFetchCompletedPostId();

  const { latitude, longitude } = useGeolocation();

  useEffect(() => {
    if (latitude && longitude) {
      console.log("위 경도", latitude, longitude);
    }
  }, [latitude, longitude]);

  const groupedList = groupGatheringsByDate(gatheringList || []);

  return (
    <div className="min-h-screen pt-[4.5rem] pb-28">
      <div className="mb-9 flex items-center justify-between">
        <LocationSelectorDropdown
          selected={region || ""}
          onSelect={setRegion}
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
          <div key={date}>
            <GatheringListGroup
              date={date}
              items={items}
              isClosed={isClosedView}
            />
            <div className="h-4" ref={setTarget}></div>
          </div>
        );
      })}

      <GatheringCreateButton />
      <SearchOverlay />

      <RegionSelectorModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSelect={(region) => {
          setRegion(region);
          handleCloseModal();
        }}
      />

      <ReviewConfirmModal reviewOpen={reviewOpen} reviewId={reviewId} />
    </div>
  );
}
