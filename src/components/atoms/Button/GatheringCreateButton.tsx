"use client";

import AddIcon from "@/assets/icons/add.svg";
import { useRouter } from "next/navigation";

export default function GatheringCreateButton() {
  const { push } = useRouter();

  return (
    <button
      className="bg-green fixed right-[18px] bottom-[18px] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      onClick={() => push("/gatherings/create")}
    >
      <AddIcon className="h-8 w-8" />
    </button>
  );
}
