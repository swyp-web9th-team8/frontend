"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/stores/searchStore";
import SearchHeader from "@/components/atoms/Search/SearchHeader";
import SearchInput from "@/components/molecules/search/SearchInput";

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
      <SearchHeader title="검색" onBack={close} />

      <div className="mb-4">
        <SearchInput
          value={keyword}
          onChange={setKeyword}
          onSubmit={handleSearch}
          onClear={() => setKeyword("")}
        />
      </div>
    </div>
  );
}
