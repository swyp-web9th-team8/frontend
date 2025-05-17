"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchHeader from "@/components/atoms/Search/SearchHeader";
import SearchInput from "@/components/molecules/search/SearchInput";
import SearchHistory from "@/components/molecules/search/SearchHistory";
import {
  getSearchHistory,
  removeSearchKeyword,
  addSearchKeyword,
} from "@/utils/searchHistory";

export default function SearchPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    setHistory(getSearchHistory().slice(0, 10)); // 최근 10개만 표시
  }, []);

  const handleSearch = () => {
    if (!keyword.trim()) return;

    // 검색어 저장
    addSearchKeyword(keyword);

    // 검색 결과 페이지로 이동
    router.push(`/search/result?q=${encodeURIComponent(keyword)}`);
  };

  const handleRemove = (item: string) => {
    removeSearchKeyword(item);
    setHistory((prev) => prev.filter((v) => v !== item));
  };

  const handleHistoryClick = (searchKeyword: string) => {
    router.push(`/search/result?q=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <div className="px-4 pt-6">
      <SearchHeader title="검색" />

      <div className="mb-12">
        <SearchInput
          value={keyword}
          onChange={setKeyword}
          onSubmit={handleSearch}
          onClear={() => setKeyword("")}
        />
      </div>

      {!keyword && (
        <SearchHistory
          history={history}
          onRemove={handleRemove}
          onItemClick={handleHistoryClick}
        />
      )}
    </div>
  );
}
