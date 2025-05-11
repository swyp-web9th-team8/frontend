"use client";

import Modal from "@/components/atoms/Modal/Modal";
import IconCheck from "@/assets/icons/IconProfileCheck.svg";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WithdrawSuccessModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <Modal
      onClose={onClose}
      position="center"
      variant="plain"
      disableOutsideClick
    >
      <div className="flex flex-col gap-[1.375rem]">
        <IconCheck className="bg-green text-grey-0 mx-auto h-15 w-15 rounded-full" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-[0.9375rem]">
            <p className="text-heading1-bold text-grey-950 font-gsans-bold">
              계정이 성공적으로 삭제됐어요
            </p>
            <p className="text-body2-medium text-grey-400 font-gsans-medium">
              플로고와 함께해주셔서 감사합니다
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-green text-body1-medium font-gsans-medium text-grey-0 w-full rounded-xl py-3"
          >
            확인
          </button>
        </div>
      </div>
    </Modal>
  );
}
