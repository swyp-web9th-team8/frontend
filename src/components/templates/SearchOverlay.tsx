"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/stores/searchStore";
import IconSearch from "@/assets/icons/IconSearch.svg";
import IconClose from "@/assets/icons/IconClose.svg";
import BackArrow from "@/assets/icons/back-arrow.svg";

export default function SearchOverlay() {
  const router = useRouter();
  const { isOpen, close } = useSearchStore();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (!keyword.trim()) return;
    close();
    router.push(`/search/result?q=${encodeURIComponent(keyword)}`);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-grey-50 fixed inset-0 z-5 px-5 py-8">
      <header className="relative mb-[1.875rem] flex items-center justify-center">
        <button
          type="button"
          onClick={close}
          aria-label="뒤로가기"
          className="absolute left-0 mr-3 cursor-pointer"
        >
          <BackArrow />
        </button>
        <h1 className="text-grey-950 text-heading1-medium font-gsans-medium text-center">
          검색
        </h1>
      </header>

      <div className="relative mb-4">
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
    </div>
  );
}
