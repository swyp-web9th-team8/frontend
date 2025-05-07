"use client";

import IconChevronLeft from "@/assets/icons/IconChevronLeft.svg";

interface Props {
  title: string;
  backButton?: boolean;
  rightButton?: React.ReactNode;
}

function Header({ title, backButton, rightButton }: Props) {
  return (
    <div className="font-gsans-medium relative flex items-center justify-center px-5 pt-8 pb-11 text-xl leading-normal font-medium">
      <div className="absolute left-5">
        {backButton && (
          <IconChevronLeft className="h-8 w-8 cursor-pointer text-gray-950" />
        )}
      </div>
      {/* 가운데 타이틀 */}
      <div className="text-body1-medium">{title}</div>
      <div className="absolute right-5">{rightButton && rightButton}</div>
    </div>
  );
}

export default Header;
