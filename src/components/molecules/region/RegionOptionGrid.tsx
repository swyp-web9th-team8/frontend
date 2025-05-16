interface RegionOptionGridProps {
  items: string[];
  selected: string;
  onSelect: (value: string) => void;
  loading?: boolean;
}

export default function RegionOptionGrid({
  items,
  selected,
  onSelect,
  loading = false,
}: RegionOptionGridProps) {
  if (loading) {
    return <div className="text-grey-400 text-center text-sm">로딩 중...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-2.5 overflow-y-auto">
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
