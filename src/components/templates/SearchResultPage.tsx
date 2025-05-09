"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import SearchHeader from "@/components/atoms/Search/SearchHeader";
import SearchInput from "@/components/molecules/search/SearchInput";
import SearchCardList from "@/components/organisms/Search/SearchCardList";

// 가짜 데이터
const mockResults = {
  upcoming: [
    {
      id: 1,
      title: "한강공원 플로깅",
      date: "2025년 4월 26일 토요일",
      time: "오전 10시",
      location: "여의도 한강공원",
      status: "D-1",
    },
  ],
  past: [
    {
      id: 2,
      title: "한강공원 플로깅",
      date: "2025년 4월 13일 일요일",
      time: "오전 8시",
      location: "한강공원",
      status: "완료",
    },
    {
      id: 3,
      title: "한강공원 플로깅",
      date: "2025년 4월 12일 토요일",
      time: "오전 8시",
      location: "한강공원",
      status: "완료",
    },
  ],
};

async function fetchSearchResults(keyword: string) {
  await new Promise((res) => setTimeout(res, 500)); // simulate latency
  if (!keyword) throw new Error("검색어가 없습니다.");
  return mockResults;
}

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [keyword, setKeyword] = useState(q);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => fetchSearchResults(keyword),
    enabled: !!keyword,
  });

  const handleSearch = () => {
    // 추후 검색 제출 시 URL 변경 혹은 쿼리 트리거
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

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>검색 중 오류가 발생했습니다.</p>}

      {data && (
        <div className="flex flex-col gap-[2.375rem]">
          <SearchCardList
            title="다가오는 모임"
            items={data.upcoming}
            highlightColor="bg-[#F6A314]"
          />
          <SearchCardList
            title="완료된 모임"
            items={data.past}
            highlightColor="bg-green"
          />
        </div>
      )}
    </div>
  );
}
