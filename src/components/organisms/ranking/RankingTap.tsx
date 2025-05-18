import GatheringFilterTabs from "@/components/molecules/homegatherings/GatheringFilterTabs";

interface Props {
  selected: boolean;
  onChange: (closed: boolean) => void;
}
function RankingTap({ selected, onChange }: Props) {
  return (
    <GatheringFilterTabs
      tabLabels={["이번주", "전체"]}
      selected={selected}
      onChange={onChange}
    />
  );
}

export default RankingTap;
