export function getLocalBadgeImageUrl(
  lastBadgeIconDir: string | null | undefined,
): string {
  if (!lastBadgeIconDir) return "/badges/default.svg";
  const fileName = lastBadgeIconDir.split("/").pop();
  return `/badges/${fileName}`;
}
