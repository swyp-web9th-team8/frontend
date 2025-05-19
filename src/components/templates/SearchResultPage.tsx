"use client";

import SearchHeader from "@/components/atoms/Search/SearchHeader";
import SearchHistory from "@/components/molecules/search/SearchHistory";
import SearchInput from "@/components/molecules/search/SearchInput";
import SearchCardList from "@/components/organisms/Search/SearchCardList";
import { useFetchGatheringList } from "@/hooks/queries/useFetchGatheringList";
import { useRegionStore } from "@/stores/useRegionStore";
import { formatDateAndTime } from "@/utils/day";
import {
  addSearchKeyword,
  getSearchHistory,
  removeSearchKeyword,
} from "@/utils/searchHistory";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [keyword, setKeyword] = useState(q);
  const [searchTerm, setSearchTerm] = useState(q);
  const [history, setHistory] = useState<string[]>([]);
  const region = useRegionStore((state) => state.region) || "";

  // 최근 검색어 로드
  useEffect(() => {
    setHistory(getSearchHistory().slice(0, 10));
  }, []);

  // URL의 검색어 파라미터가 변경되면 검색어와 검색 실행 키워드를 업데이트
  useEffect(() => {
    setKeyword(q);
    setSearchTerm(q);
  }, [q]);

  const { data: gatheringList } = useFetchGatheringList(
    false,
    region,
    searchTerm,
  );

  const handleSearch = () => {
    if (!keyword.trim()) return;

    // 검색어 저장
    addSearchKeyword(keyword);
    setHistory(getSearchHistory().slice(0, 10));

    // 검색 실행 키워드 업데이트
    setSearchTerm(keyword);

    // URL 업데이트
    router.push(`/search/result?q=${encodeURIComponent(keyword)}`);
  };

  const handleRemove = (item: string) => {
    removeSearchKeyword(item);
    setHistory((prev) => prev.filter((v) => v !== item));
  };

  const handleHistoryClick = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    setSearchTerm(searchKeyword);
    router.push(`/search/result?q=${encodeURIComponent(searchKeyword)}`);
  };

  const handleKeywordChange = (value: string) => {
    setKeyword(value);
    if (!value) {
      setSearchTerm("");
      router.push("/search");
    }
  };

  return (
    <div className="px-4 pt-6">
      <SearchHeader title="검색" />

      <div className="mb-12">
        <SearchInput
          value={keyword}
          onChange={handleKeywordChange}
          onSubmit={handleSearch}
          onClear={() => {
            setKeyword("");
            setSearchTerm("");
            router.push("/search");
          }}
        />
      </div>

      {!keyword && (
        <SearchHistory
          history={history}
          onRemove={handleRemove}
          onItemClick={handleHistoryClick}
        />
      )}

      {keyword && searchTerm && gatheringList && gatheringList.length > 0 && (
        <div className="flex flex-col gap-[2.375rem]">
          <SearchCardList
            title="검색 결과"
            items={gatheringList.map((item) => ({
              id: item.id,
              title: item.title,
              date: formatDateAndTime(item.meetingTime, "yyyy년 M월 d일 E요일"),
              time: formatDateAndTime(item.meetingTime, "a h시"),
              location: item.placeName || item.address,
              status: "모집중",
            }))}
            highlightColor="bg-[#F6A314]"
          />
        </div>
      )}

      {keyword && searchTerm && gatheringList && gatheringList.length === 0 && (
        <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
