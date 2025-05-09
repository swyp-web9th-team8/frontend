import IconSearch from "@/assets/icons/IconSearch.svg";
import IconClose from "@/assets/icons/IconClose.svg";
import { addSearchKeyword } from "@/utils/searchHistory";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  onClear,
}: SearchInputProps) {
  const handleSubmit = () => {
    if (!value.trim()) return;
    addSearchKeyword(value);
    onSubmit();
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="제목+내용"
        className="bg-grey-0 text-grey-950 placeholder:text-grey-300 border-grey-950 text-body1-medium font-gsans-medium w-full rounded-full border px-9 py-3 focus:outline-none"
      />
      <IconSearch className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
      {value && (
        <button
          onClick={onClear}
          className="bg-grey-200 absolute top-1/2 right-4 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
        >
          <IconClose className="text-grey-0 h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
