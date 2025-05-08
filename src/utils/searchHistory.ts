const STORAGE_KEY = "recentSearchKeywords";

export function getSearchHistory(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addSearchKeyword(keyword: string) {
  if (!keyword.trim()) return;
  const prev = getSearchHistory().filter((k) => k !== keyword);
  const updated = [keyword, ...prev].slice(0, 10); // 최대 10개
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function removeSearchKeyword(keyword: string) {
  const updated = getSearchHistory().filter((k) => k !== keyword);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
