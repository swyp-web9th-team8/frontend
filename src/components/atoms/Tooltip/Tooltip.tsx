"use client";

import TooltipIcon from "@/assets/icons/tooltip-icon.svg";

export default function Tooltip() {
  return (
    <div className="group relative flex items-center">
      <div className="cursor-pointer">
        <TooltipIcon />
      </div>
      <div className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/3 group-hover:visible">
        <div className="relative rounded-md bg-[#1A1A1A] px-3 py-2 text-xs text-white shadow">
          현재는 서울에서만 서비스 이용이 가능해요
          <div className="absolute -bottom-1 left-1/3 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1A1A1A]" />
        </div>
      </div>
    </div>
  );
}
