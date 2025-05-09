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

  return (
    <div className="min-h-screen pt-[4.5rem] pb-28">
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
    </div>
  );
}
