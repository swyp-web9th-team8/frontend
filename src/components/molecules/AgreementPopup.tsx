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
    <div className="bg-grey-50 fixed inset-0 z-50 flex flex-col px-6 py-[4.5rem]">
      <div className="relative mb-[2.75rem] flex items-center justify-center">
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute left-0 flex cursor-pointer items-center justify-center"
        >
          <BackArrow />
        </button>
        <h2 className="text-grey-950 text-heading1-medium font-gsans-medium text-center">
          {title}
        </h2>
      </div>

      <div className="text-grey-950 text-body2-medium font-gsans-medium flex-1 overflow-y-auto leading-relaxed whitespace-pre-wrap">
        {content}
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="bg-green text-grey-0 font-gsans-medium text-body1-medium w-full cursor-pointer rounded-xl py-3"
      >
        확인
      </button>
    </div>
  );
}
