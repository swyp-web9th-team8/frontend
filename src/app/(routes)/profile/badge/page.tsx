"use client";

import Header from "@/components/organisms/Header";
import BadgeProgressBar from "@/components/molecules/badge/BadgeProgressBar";
import { BADGES } from "@/data/badge";
import BadgeCardItem from "@/components/molecules/badge/BadgeCardItem";
import { getBadge } from "@/api/profile/getBadge";
import { useQuery } from "@tanstack/react-query";

export default function BadgePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["userbadge"],
    queryFn: getBadge,
    refetchOnMount: true,
  });

  const { userBadge = [], remainingActionsForNextBadge = 0 } = data?.data ?? {};
  const latestBadge = userBadge[userBadge.length - 1];

  const acquiredBadges = userBadge.length;
  const hasAllBadges = acquiredBadges >= BADGES.length;

  const currentBadge = BADGES[acquiredBadges - 1] ?? null;
  const nextBadge = BADGES[acquiredBadges] ?? null;

  const grantedDate = latestBadge?.grantedAt
    ? new Date(latestBadge.grantedAt).toISOString().split("T")[0]
    : null;

  if (isLoading) {
    return <p className="text-center">로딩 중...</p>;
  }

  return (
    <div className="px-4 py-6">
      <Header title="내 뱃지" backButton />

      <div className="flex flex-col items-center gap-3 py-6">
        {currentBadge && <currentBadge.Icon className="h-[5.25rem] w-[5rem]" />}

        <p className="text-grey-400 text-body3-medium font-gsans-medium">
          {grantedDate ?? "획득한 뱃지가 없어요"}
        </p>
      </div>

      <BadgeProgressBar
        label={
          hasAllBadges ? "더 이상 딸 수 있는 뱃지가 없어요" : "다음 뱃지까지"
        }
        current={
          nextBadge ? nextBadge.required - remainingActionsForNextBadge : 0
        }
        total={nextBadge?.required ?? currentBadge?.required ?? 0}
        isFull={hasAllBadges}
      />

      <ul className="mt-6 flex flex-col gap-4">
        {BADGES.map((badge, idx) => (
          <BadgeCardItem
            key={badge.id}
            icon={badge.Icon}
            label={badge.label}
            required={badge.required}
            isAcquired={idx < acquiredBadges}
          />
        ))}
      </ul>
    </div>
  );
}
