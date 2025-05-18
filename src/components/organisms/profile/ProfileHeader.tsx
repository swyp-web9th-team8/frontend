"use client";

import Avatar from "@/assets/icons/avatar.svg";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileHeader({
  name,
  lastBadgeIconDir,
  profileImageUrl,
}: {
  name: string;
  lastBadgeIconDir: string | null;
  profileImageUrl: string;
}) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push("/profile/edit");
  };

  return (
    <section className="mb-6 flex items-center justify-between px-2">
      <div className="flex items-center gap-3">
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt="프로필 이미지"
            className="h-14 w-14 rounded-full object-cover"
          />
        ) : (
          <Avatar className="h-14 w-14 rounded-full" />
        )}

        <div className="flex flex-col gap-1">
          <p className="text-body1-medium text-grey-950 font-gsans-medium">
            {name}
          </p>
          <button
            onClick={handleEditClick}
            className="text-body2-medium text-grey-400 font-gsans-medium flex items-center gap-1"
          >
            프로필 수정
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      {lastBadgeIconDir && (
        <Image
          src={lastBadgeIconDir}
          alt="뱃지 아이콘"
          width={54}
          height={59}
        />
      )}
    </section>
  );
}
