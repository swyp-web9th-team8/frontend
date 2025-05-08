import { Suspense } from "react";
import SearchResultPage from "@/components/templates/SearchResultPage";

export default function SearchResult() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <SearchResultPage />
    </Suspense>
  );
}
