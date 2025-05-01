"use client";

import Avatar from "@/assets/icons/avatar.svg";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";
import Badge from "@/assets/icons/badge-yellow.svg";
import IconGroup from "@/assets/icons/IconGroup01.svg";
import IconLocation from "@/assets/icons/IconLocation.svg";
import IconAddNew from "@/assets/icons/IconAddNew.svg";
import IconMedal from "@/assets/icons/IconMedal01.svg";
import IconMegaphone from "@/assets/icons/IconMegaphone.svg";
import IconSupport from "@/assets/icons/IconSupport.svg";

export default function ProfilePage() {
  return (
    <main className="h-full w-full px-4 py-6 text-sm">
      <h1 className="mb-6 text-center text-lg font-semibold">프로필</h1>

      <section className="mb-6 flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="text-grey-950 font-gsans-medium text-body1-medium">
              나리이
            </p>
            <button className="flex items-center">
              <p className="text-body2-medium text-grey-400 font-gsans-medium">
                프로필 수정
              </p>
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <Badge />
      </section>

      <section className="mb-6 grid grid-cols-3 gap-2 py-4">
        <InfoBox label="참여한 모임" value="11" />
        <InfoBox label="내가 만든 모임" value="3" />
        <InfoBox label="내 기록(누적)" value="14" />
      </section>

      <div className="flex flex-col gap-2">
        <h2 className="font-gsans-medium text-body2-medium text-grey-950">
          활동
        </h2>
        <section className="mb-4 rounded-xl bg-white p-5 shadow-sm">
          <ActivityRow label="내 모임" icon={<IconGroup />} />
          <ActivityRow label="내 뱃지" icon={<IconMedal />} />
          <ActivityRow label="친구 초대하기" icon={<IconAddNew />} />
          <ActivityRow
            label="지역 설정"
            value="강남구 개포1동"
            icon={<IconLocation />}
          />
        </section>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-gsans-medium text-body2-medium text-grey-950">
          알림
        </h2>
        <section className="rounded-xl bg-white p-4 shadow-sm">
          <ActivityRow label="공지사항" icon={<IconMegaphone />} />
          <ActivityRow label="고객센터" icon={<IconSupport />} />
        </section>
      </div>
    </main>
  );
}

const InfoBox = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1.5 rounded-xl border px-3 py-3.5">
    <p className="text-body3-medium text-grey-950 font-gsans-medium">{label}</p>
    <div className="flex items-center gap-1.5">
      <p className="text-grey-950 text-heading1-medium font-gsans-bold">
        {value}
      </p>
      <p className="text-grey-950 font-gsans-medium text-body4-medium">회</p>
    </div>
  </div>
);

const ActivityRow = ({
  label,
  value,
  icon,
}: {
  label: string;
  value?: string;
  icon?: React.ReactNode;
}) => (
  <div className="flex items-center justify-between pb-[1.375rem] last:pb-0">
    <div className="flex items-center gap-2.5">
      <div>{icon}</div>
      <p className="text-body2-medium font-gsans-medium text-grey-950">
        {label}
      </p>
    </div>
    <div className="text-body3-medium font-gsans-medium text-grey-400 flex items-center gap-0.5">
      {value && <span>{value}</span>}
      <IconChevronRight className="h-6 w-6" />
    </div>
  </div>
);
