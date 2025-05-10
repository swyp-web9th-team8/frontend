interface RegionOptionGridProps {
  items: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function RegionOptionGrid({
  items,
  selected,
  onSelect,
}: RegionOptionGridProps) {
  return (
    <div className="grid h-full grid-cols-3 gap-2.5 overflow-y-auto">
      {items.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`font-gsans-medium text-body1-medium cursor-pointer rounded-xl px-4 py-3 ${
            selected === name
              ? "bg-green text-grey-0"
              : "bg-grey-0 text-grey-950"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
