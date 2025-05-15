/**
 * 예: "강남구 개포동" → "개포동"
 */
export const getDongFromRegion = (
  region: string | undefined | null,
): string => {
  if (!region) return "";
  const parts = region.split(" ");
  return parts.length >= 2 ? parts[1] : "";
};
