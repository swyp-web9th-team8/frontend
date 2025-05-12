"use client";

import Modal from "@/components/atoms/Modal/Modal";
import IconExclamation from "@/assets/icons/IconProfileExclamation.svg";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function WithdrawConfirmModal({
  open,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <Modal
      onClose={onClose}
      position="center"
      variant="plain"
      disableOutsideClick
    >
      <div className="flex flex-col gap-[1.375rem]">
        <IconExclamation className="bg-green text-grey-0 mx-auto h-15 w-15 rounded-full" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-[0.9375rem]">
            <p className="text-heading1-bold text-grey-950 font-gsans-bold">
              정말 탈퇴하시겠어요?
            </p>
            <p className="text-body2-medium text-grey-400 font-gsans-medium">
              회원 탈퇴 시 저장된 모든 정보는 삭제돼요
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="bg-grey-200 text-body1-medium font-gsans-medium text-grey-0 w-1/2 rounded-xl py-3"
            >
              취소
            </button>
            <button
              onClick={onConfirm}
              className="bg-green text-body1-medium font-gsans-medium text-grey-0 w-1/2 rounded-xl py-3"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
