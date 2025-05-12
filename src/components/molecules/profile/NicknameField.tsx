"use client";

import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";

export default function NicknameField() {
  const router = useRouter();
  const { watch } = useFormContext();
  const nickname = watch("nickname");

  return (
    <div className="bg-grey-0 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-body2-medium text-grey-950 font-gsans-medium">
          닉네임
        </span>
        <button
          type="button"
          onClick={() => router.push("/profile/edit/nickname")}
          className="flex items-center gap-1"
        >
          <span className="text-body2-medium font-gsans-medium text-grey-300">
            {nickname}
          </span>
          <IconChevronRight className="text-grey-400 h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
