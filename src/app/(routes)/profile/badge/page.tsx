"use client";

import Header from "@/components/organisms/Header";
import BadgeProgressBar from "@/components/molecules/badge/BadgeProgressBar";
import { BADGES } from "@/data/badge";
import BadgeCardItem from "@/components/molecules/badge/BadgeCardItem";
import { useBadgeStatus } from "@/hooks/features/useBadgeStatus";

const myActivityCount = 13;
const acquiredBadges = 1;

export default function BadgePage() {
  const { currentBadge, nextBadge, hasAllBadges } =
    useBadgeStatus(acquiredBadges);

  return (
    <div className="px-4 py-6">
      <Header title="내 뱃지" backButton />

      <div className="flex flex-col items-center gap-3 py-6">
        {currentBadge && <currentBadge.Icon className="h-[5.25rem] w-[5rem]" />}

        <p className="text-grey-400 text-body3-medium font-gsans-medium">
          {new Date().toISOString().split("T")[0]} 획득
        </p>
      </div>

      <BadgeProgressBar
        label={
          hasAllBadges ? "더 이상 딸 수 있는 뱃지가 없어요" : "다음 뱃지까지"
        }
        current={myActivityCount}
        total={
          hasAllBadges
            ? BADGES[BADGES.length - 1].required
            : nextBadge?.required || 0
        }
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
