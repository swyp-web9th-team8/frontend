"use client";

import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  position?: "center" | "bottom";
  disableOutsideClick?: boolean;
  variant?: "default" | "plain";
}

export default function Modal({
  children,
  onClose,
  position = "bottom",
  disableOutsideClick = false,
  variant = "default",
}: ModalProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disableOutsideClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-black/40 ${
        position === "center"
          ? "items-center justify-center"
          : "items-end pt-[3.25rem]"
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`relative max-w-[500px] ${
          variant === "default"
            ? "bg-[#F6F6F6]"
            : "bg-white p-6 text-center shadow-lg"
        } ${position === "center" ? "w-[353px] rounded-2xl" : "animate-slide-up mx-auto mt-auto w-full rounded-t-[32px]"}`}
      >
        {variant === "default" && (
          <button
            onClick={onClose}
            className="absolute top-6 right-5 cursor-pointer text-2xl"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
