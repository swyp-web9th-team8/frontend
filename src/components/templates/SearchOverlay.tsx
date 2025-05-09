"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/stores/searchStore";
import SearchHeader from "@/components/atoms/Search/SearchHeader";
import SearchInput from "@/components/molecules/search/SearchInput";
import SearchHistory from "@/components/molecules/search/SearchHistory";
import { getSearchHistory, removeSearchKeyword } from "@/utils/searchHistory";

export default function SearchOverlay() {
  const router = useRouter();
  const { isOpen, close } = useSearchStore();
  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setHistory(getSearchHistory());
    }
  }, [isOpen]);

  const handleSearch = () => {
    if (!keyword.trim()) return;
    close();
    router.push(`/search/result?q=${encodeURIComponent(keyword)}`);
  };

  const handleRemove = (item: string) => {
    removeSearchKeyword(item);
    setHistory((prev) => prev.filter((v) => v !== item));
  };

  if (!isOpen) return null;

  return (
    <div className="bg-grey-50 fixed inset-0 z-50 px-5 py-8">
      <SearchHeader title="검색" onBack={close} />

      <div className="mb-[3.625rem]">
        <SearchInput
          value={keyword}
          onChange={setKeyword}
          onSubmit={handleSearch}
          onClear={() => setKeyword("")}
        />
      </div>

      <SearchHistory history={history} onRemove={handleRemove} />
    </div>
  );
}
