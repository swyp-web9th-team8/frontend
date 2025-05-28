"use client";

import IconChevronLeft from "@/assets/icons/IconChevronLeft.svg";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  backButton?: boolean;
  rightButton?: React.ReactNode;
  onClickRightButton?: () => void;
}

function Header({ title, backButton, rightButton, onClickRightButton }: Props) {
  const router = useRouter();

  return (
    <div className="font-gsans-medium relative -mx-5 flex items-center justify-center px-5 pt-8 pb-11 text-xl leading-normal font-medium">
      <div className="absolute left-5">
        {backButton && (
          <button onClick={() => router.back()} aria-label="뒤로 가기">
            <IconChevronLeft className="h-8 w-8 cursor-pointer text-gray-950" />
          </button>
        )}
      </div>
      {/* 가운데 타이틀 */}
      <div className="text-body1-medium">{title}</div>
      <div className="absolute right-5">
        {rightButton && (
          <button onClick={() => onClickRightButton?.()}>{rightButton}</button>
        )}
      </div>
    </div>
  );
}

export default Header;
