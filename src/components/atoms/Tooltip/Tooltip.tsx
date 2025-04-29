"use client";

import TooltipIcon from "@/assets/icons/tooltip-icon.svg";

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  return (
    <div className="group relative flex items-center">
      <div className="cursor-pointer">
        <TooltipIcon />
      </div>
      <div className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/3 group-hover:visible">
        <div className="relative rounded-md bg-[#1A1A1A] px-3 py-2 text-xs text-white shadow">
          {text}
          <div className="absolute -bottom-1 left-1/3 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1A1A1A]" />
        </div>
      </div>
    </div>
  );
}
