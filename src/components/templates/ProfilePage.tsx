"use client";

import { getUserProfile } from "@/api/profile/getUserProfile";
import IconAddNew from "@/assets/icons/IconAddNew.svg";
import IconGroup from "@/assets/icons/IconGroup01.svg";
import IconLocation from "@/assets/icons/IconLocation.svg";
import IconMedal from "@/assets/icons/IconMedal01.svg";
import IconMegaphone from "@/assets/icons/IconMegaphone.svg";
import InfoBox from "@/components/atoms/InfoBox/InfoBox";
import ActivityRow from "@/components/molecules/ActivityRow";
import ProfileHeader from "@/components/organisms/profile/ProfileHeader";
import SectionWithTitle from "@/components/organisms/profile/SectionWithTitle";
import { useQuery } from "@tanstack/react-query";

export default function ProfilePage() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    refetchOnMount: true,
  });

  if (isLoading || !profile) return <p className="text-center">로딩 중...</p>;

  return (
    <main className="bottom-padding h-full w-full px-4 py-6 text-sm">
      <h1 className="text-heading1-medium font-gsans-medium mb-6 text-center">
        프로필
      </h1>

      <ProfileHeader
        name={profile.nickname}
        profileImageUrl={profile.profileImageUrl}
        lastBadgeIconDir={profile.lastBadgeIconDir}
      />

      <section className="mb-6 grid grid-cols-3 gap-2 py-4">
        <InfoBox label="참여한 모임" value={profile.participatedCount} />
        <InfoBox label="내가 만든 모임" value={profile.writtenPostsCount} />
        <InfoBox label="내 기록(누적)" value={profile.totalMeet} />
      </section>

      <SectionWithTitle title="활동">
        <ActivityRow
          href="/profile/mygathering"
          label="내 모임"
          icon={<IconGroup className="h-5 w-5" />}
        />
        <ActivityRow
          href="/profile/badge"
          label="내 뱃지"
          icon={<IconMedal className="h-5 w-5" />}
        />
        <ActivityRow
          href="/profile/region"
          label="지역 설정"
          value={profile.region || "미설정"}
          icon={<IconLocation className="h-5 w-5" />}
        />
      </SectionWithTitle>

      <SectionWithTitle title="알림">
        <ActivityRow
          href="/profile/announcement"
          label="공지사항"
          icon={<IconMegaphone className="h-5 w-5" />}
        />
        <ActivityRow
          href="/profile/invite"
          label="친구 초대하기"
          icon={<IconAddNew className="h-5 w-5" />}
        />
      </SectionWithTitle>
    </main>
  );
}
