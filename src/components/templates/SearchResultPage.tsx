"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import IconSearch from "@/assets/icons/IconSearch.svg";
import IconClose from "@/assets/icons/IconClose.svg";
import { useState } from "react";
import BackArrow from "@/assets/icons/back-arrow.svg";
import IconClock from "@/assets/icons/clock.svg";
import IconLocation from "@/assets/icons/location.svg";
import IconCalendar from "@/assets/icons/calendar01.svg";

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
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => fetchSearchResults(keyword),
    enabled: !!keyword,
  });

  const handleSearch = () => {
    // 검색어 제출 동작 추가 가능
  };

  return (
    <div className="px-4 pt-6">
      <header className="relative mb-[1.875rem] flex items-center justify-center">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="뒤로가기"
          className="absolute left-0 mr-3 cursor-pointer"
        >
          <BackArrow />
        </button>
        <h1 className="text-grey-950 text-heading1-medium font-gsans-medium text-center">
          검색
        </h1>
      </header>
      <div className="relative mb-12">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="제목+내용"
          className="bg-grey-0 text-grey-950 placeholder:text-grey-300 border-grey-950 text-body1-medium font-gsans-medium w-full rounded-full border px-9 py-3 focus:outline-none"
        />
        <IconSearch className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
        {keyword && (
          <button
            onClick={() => setKeyword("")}
            className="bg-grey-200 absolute top-1/2 right-4 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
          >
            <IconClose />
          </button>
        )}
      </div>

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>검색 중 오류가 발생했습니다.</p>}

      {data && (
        <div className="flex flex-col gap-[2.375rem]">
          <div className="flex flex-col gap-3">
            <h2 className="text-grey-950 text-body-1-bold font-gsans-bold">
              다가오는 모임
            </h2>
            <ul className="flex flex-col">
              {data.upcoming.map((item) => (
                <li
                  key={item.id}
                  className="bg-grey-0 flex flex-col gap-3 rounded-2xl p-5 shadow-[0_4px_24px_rgba(170,170,170,0.15)]"
                >
                  <div className="flex gap-1">
                    <h3 className="font-gsans-bold text-body1-bold text-grey-950">
                      {item.title}
                    </h3>
                    <span className="text-grey-0 text-body4-medium font-gsans-medium rounded-xl bg-[#F6A314] px-3 py-0.5">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                      <IconCalendar className="h-5 w-5" />
                      <p>{item.date}</p>
                    </div>
                    <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                      <IconClock className="h-5 w-5" />
                      <p>{item.time}</p>
                    </div>
                    <p className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                      <IconLocation className="h-5 w-5" />
                      {item.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-grey-950 text-body-1-bold font-gsans-bold">
              완료된 모임
            </h2>
            <ul className="space-y-2">
              {data.past.map((item) => (
                <li
                  key={item.id}
                  className="bg-grey-0 flex flex-col gap-3 rounded-2xl p-5 shadow-[0_4px_24px_rgba(170,170,170,0.15)]"
                >
                  <div className="flex gap-1">
                    <h3 className="font-gsans-bold text-body1-bold text-grey-950">
                      {item.title}
                    </h3>
                    <span className="bg-green text-grey-0 text-body4-medium font-gsans-medium rounded-xl px-3 py-0.5">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                      <IconCalendar className="h-5 w-5" />
                      <p>{item.date}</p>
                    </div>
                    <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                      <IconClock className="h-5 w-5" />
                      <p>{item.time}</p>
                    </div>
                    <p className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                      <IconLocation className="h-5 w-5" />
                      {item.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
