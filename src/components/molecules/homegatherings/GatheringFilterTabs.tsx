interface GatheringFilterTabsProps {
  selected: boolean;
  onChange: (closed: boolean) => void;
  tabLabels: [string, string];
}

export default function GatheringFilterTabs({
  selected,
  onChange,
  tabLabels,
}: GatheringFilterTabsProps) {
  return (
    <div className="mb-3.5">
      <button
        onClick={() => onChange(false)}
        className={`font-gsans-bold text-body1-bold border-grey-200 mr-2 cursor-pointer border-r-2 pr-2 ${
          !selected ? "text-green" : "text-grey-200"
        }`}
      >
        {tabLabels[0]}
      </button>
      <button
        onClick={() => onChange(true)}
        className={`font-gsans-bold text-body1-bold cursor-pointer ${
          selected ? "text-green" : "text-grey-200"
        }`}
      >
        {tabLabels[1]}
      </button>
    </div>
  );
}
