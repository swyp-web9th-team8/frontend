import IconClose from "@/assets/icons/IconClose.svg";

interface SearchHistoryProps {
  history: string[];
  onRemove: (item: string) => void;
  onItemClick: (item: string) => void;
}

export default function SearchHistory({
  history,
  onRemove,
  onItemClick,
}: SearchHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="text-body2-medium font-gsans-medium text-grey-950 mb-2">
        최근 검색어
      </p>
      <div className="flex flex-wrap gap-1.5">
        {history.map((item) => (
          <div
            key={item}
            className="bg-grey-0 text-grey-800 border-grey-200 flex items-center gap-1.5 rounded-full border px-3.5 py-2.5"
          >
            <button
              onClick={() => onItemClick(item)}
              className="cursor-pointer"
            >
              <span>{item}</span>
            </button>
            <button
              onClick={() => onRemove(item)}
              className="text-grey-950 font-gsans-medium text-body2-medium"
            >
              <IconClose className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
