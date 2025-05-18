import { useMemo } from "react";

export function useImageUrl(path?: string): string {
  return useMemo(() => {
    if (!path) return "";
    // 이미 절대 URL 이면 그대로, 아니면 백엔드 기본 URL을 붙여서 반환
    return path.startsWith("http")
      ? path
      : `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
  }, [path]);
}
