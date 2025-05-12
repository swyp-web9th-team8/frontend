"use client";

import IconExclamation from "@/assets/icons/IconExclamation.svg";
import { useEffect, useState } from "react";

interface Props {
  position: "bottom-center" | "top-center";
  message: string;
  showIcon?: boolean;
  duration?: number;
  onClose?: () => void;
}

function Toast({
  position,
  message,
  showIcon = true,
  duration = 20000,
  onClose,
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const positionClass = {
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-[100px] left-1/2 -translate-x-1/2",
  }[position];

  return (
    <div
      className={`fixed z-50 flex w-fit items-center gap-2 rounded-lg bg-gray-950 px-4 py-2 text-white shadow-lg transition-opacity ease-in-out ${positionClass} items-center`}
    >
      {showIcon && (
        <IconExclamation className="text-gray-0 h-[18px] w-[18px]" />
      )}
      <p className="text-sm whitespace-nowrap">{message}</p>
    </div>
  );
}

export default Toast;
