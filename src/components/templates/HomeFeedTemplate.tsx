"use client";

import IconNotification from "@/assets/icons/IconNotification.svg";
import IconSearch from "@/assets/icons/IconSearch.svg";
import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";
import RegionSelectorModal from "@/components/molecules/RegionSelectorModal";
import GatheringListGroup from "@/components/organisms/homegatherings/GatheringListGroup";
import { useGeolocation } from "@/hooks/features/commons/useGeoLocation";
import useIntersectionObserver from "@/hooks/features/commons/useIntersectionObserver";
import { useModal } from "@/hooks/features/commons/useModal";
import { useFetchGatheringList } from "@/hooks/queries/useFetchGatheringList";
import { useFetchCompletedPostId } from "@/hooks/queries/useReview";
import { useUserProfile } from "@/hooks/queries/useUserProfile";
import { useRegionStore } from "@/stores/useRegionStore";
import { formatDate } from "@/utils/day";
import { groupGatheringsByDate } from "@/utils/gatherings";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LocationSelectorDropdown from "../molecules/homefeed/LocationSelectorDropdown";
import Empty from "../organisms/Empty";
import ReviewConfirmModal from "../organisms/modal/ReviewConfirmModal";

interface HomeFeedTemplateProps {
  isClosedView: boolean;
  onChangeTab: (closed: boolean) => void;
}

export default function HomeFeedTemplate({
  isClosedView,
  onChangeTab,
}: HomeFeedTemplateProps) {
  const router = useRouter();
  const region = useRegionStore((state) => state.region);
  const setRegion = useRegionStore((state) => state.setRegion);
  const { data: userProfile } = useUserProfile();

  useEffect(() => {
    if (userProfile?.region) {
      setRegion(userProfile.region);
    }
  }, [userProfile?.region, setRegion]);

  const {
    data: gatheringList,
    fetchNextPage,
    hasNextPage,
  } = useFetchGatheringList(isClosedView, region || "");

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  const {
    state: { isOpen: isModalOpen },
    handlers: { handleOpenModal, handleCloseModal },
  } = useModal();

  const { reviewOpen, reviewId } = useFetchCompletedPostId();

  const { latitude, longitude } = useGeolocation();

  const handleSearchClick = (loc: "/search" | "/notification") => {
    // TODO: 알림 구현되면 삭제
    if (loc === "/notification") {
      router.push("/notification/settings");
      return;
    }
    router.push(loc);
  };

  const groupedList = groupGatheringsByDate(gatheringList || []);

  return (
    <div className="flex flex-1 flex-col pt-[4.5rem]">
      <div className="mb-9 flex items-center justify-between">
        <LocationSelectorDropdown
          latitude={latitude || undefined}
          longitude={longitude || undefined}
          selected={region || ""}
          onSelect={setRegion}
          onOpenModal={handleOpenModal}
        />

        <div className="flex gap-4">
          <button
            onClick={() => handleSearchClick("/search")}
            className="cursor-pointer"
          >
            <IconSearch className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleSearchClick("/notification")}
            className="cursor-pointer"
          >
            <IconNotification />
          </button>
        </div>
      </div>

      <GatheringFilterTabs
        tabLabels={["모집중인 모임", "모집 완료된 모임"]}
        selected={isClosedView}
        onChange={onChangeTab}
      />

      <div className="relative flex-1">
        {groupedList.length === 0 ? (
          <div className="relative h-[60vh]">
            <Empty
              largeText="검색 결과가 없어요"
              smallText="다른 지역으로 검색해보세요!"
            />
          </div>
        ) : (
          <>
            {groupedList.map((items) => {
              const date = formatDate(items[0].meetingTime, "yyyy-MM-dd");
              return (
                <div key={date}>
                  <GatheringListGroup
                    date={date}
                    items={items}
                    isClosed={isClosedView}
                  />
                </div>
              );
            })}
            <div ref={setTarget} />
          </>
        )}
      </div>

      <GatheringCreateButton />

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
