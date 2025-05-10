"use client";

import { useRegionStore } from "@/stores/useRegionStore";
import InfoBox from "@/components/atoms/InfoBox/InfoBox";
import ActivityRow from "@/components/molecules/ActivityRow";
import SectionWithTitle from "@/components/organisms/profile/SectionWithTitle";
import ProfileHeader from "@/components/organisms/profile/ProfileHeader";

import IconGroup from "@/assets/icons/IconGroup01.svg";
import IconLocation from "@/assets/icons/IconLocation.svg";
import IconAddNew from "@/assets/icons/IconAddNew.svg";
import IconMedal from "@/assets/icons/IconMedal01.svg";
import IconMegaphone from "@/assets/icons/IconMegaphone.svg";

type ProfilePageProps = {
  name: string;
  meetingCount: number;
  createdCount: number;
  recordCount: number;
};

export default function ProfilePage({
  name,
  meetingCount,
  createdCount,
  recordCount,
}: ProfilePageProps) {
  const region = useRegionStore((state) => state.region);

  return (
    <main className="h-full w-full px-4 py-6 text-sm">
      <h1 className="text-heading1-medium font-gsans-medium mb-6 text-center">
        프로필
      </h1>
      <ProfileHeader name={name} />

      <section className="mb-6 grid grid-cols-3 gap-2 py-4">
        <InfoBox label="참여한 모임" value={meetingCount} />
        <InfoBox label="내가 만든 모임" value={createdCount} />
        <InfoBox label="내 기록(누적)" value={recordCount} />
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
          value={region || "미설정"}
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
