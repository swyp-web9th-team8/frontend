interface GatheringFilterTabsProps {
  selected: boolean;
  onChange: (closed: boolean) => void;
}

export default function GatheringFilterTabs({
  selected,
  onChange,
}: GatheringFilterTabsProps) {
  return (
    <div className="mb-3.5">
      <button
        onClick={() => onChange(false)}
        className={`font-gsans-bold text-body1-bold border-grey-200 mr-2 border-r-2 pr-2 ${
          !selected ? "text-green" : "text-grey-200"
        }`}
      >
        모집중인 모임
      </button>
      <button
        onClick={() => onChange(true)}
        className={`font-gsans-bold text-body1-bold ${
          selected ? "text-green" : "text-grey-200"
        }`}
      >
        모집 완료된 모임
      </button>
    </div>
  );
}
