"use client";

import { useRouter } from "next/navigation";
import Avatar from "@/assets/icons/avatar.svg";
import Badge from "@/assets/icons/badge-yellow.svg";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";

export default function ProfileHeader({ name }: { name: string }) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push("/profile/edit");
  };

  return (
    <section className="mb-6 flex items-center justify-between px-2">
      <div className="flex items-center gap-3">
        <Avatar className="h-14 w-14 rounded-full" />
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
      <Badge className="h-[3.6875rem] w-[3.375rem]" />
    </section>
  );
}
