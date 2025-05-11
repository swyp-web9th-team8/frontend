import { BADGES } from "@/data/badge";

export function useBadgeStatus(acquiredBadges: number) {
  const currentBadge = BADGES[acquiredBadges - 1] || null;
  const nextBadge = BADGES[acquiredBadges] || null;
  const hasAllBadges = acquiredBadges >= BADGES.length;

  return {
    currentBadge,
    nextBadge,
    hasAllBadges,
  };
}
