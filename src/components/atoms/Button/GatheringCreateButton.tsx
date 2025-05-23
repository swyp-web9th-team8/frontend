"use client";

import AddIcon from "@/assets/icons/add.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GatheringCreateButton() {
  const { push } = useRouter();
  const [right, setRight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateRight = () => {
      const width = window.innerWidth;
      setRight(width > 500 ? (width - 500) / 2 + 21 : 21); // right - 21px
    };

    updateRight();
    window.addEventListener("resize", updateRight);
    return () => {
      window.removeEventListener("resize", updateRight);
    };
  }, []);

  return (
    <button
      className={`bg-green fixed bottom-[96px] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${
        right ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => push("/gatherings/create")}
      style={{ right }}
    >
      <AddIcon className="h-8 w-8" />
    </button>
  );
}
