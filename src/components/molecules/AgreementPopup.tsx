"use client";

import BackArrow from "@/assets/icons/back-arrow.svg";

interface AgreementPopupProps {
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AgreementPopup({
  title,
  content,
  onClose,
  onConfirm,
}: AgreementPopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F6F6F6] px-6 py-6">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onClose}
          aria-label="닫기"
          className="flex cursor-pointer items-center justify-center"
        >
          <BackArrow />
        </button>
        <h2 className="flex-1 text-center text-xl font-medium text-[#1A1A1A]">
          {title}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto text-sm leading-relaxed whitespace-pre-wrap text-[#1A1A1A]">
        {content}
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="mt-6 w-full cursor-pointer rounded-xl bg-[#59AC6E] py-3 text-sm font-medium text-white"
      >
        확인
      </button>
    </div>
  );
}
