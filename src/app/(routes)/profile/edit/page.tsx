"use client";

import { useModal } from "@/hooks/features/commons/useModal";
import Header from "@/components/organisms/Header";
import Avatar from "@/assets/icons/avatar.svg";
import IconWrite from "@/assets/icons/IconWrite.svg";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";
import WithdrawConfirmModal from "@/components/molecules/withdraw/WithdrawConfirmModal";
import WithdrawSuccessModal from "@/components/molecules/withdraw/WithdrawSuccessModal";

export default function EditProfilePage() {
  const confirmModal = useModal();
  const successModal = useModal();

  const handleWithdraw = () => {
    confirmModal.handlers.handleOpenModal();
  };

  const handleConfirmWithdraw = () => {
    confirmModal.handlers.handleCloseModal();
    successModal.handlers.handleOpenModal();
    // TODO: 회원 탈퇴 API 호출 위치
  };

  return (
    <div>
      <Header title="프로필 수정" backButton />

      <div className="relative mx-auto mb-[1.875rem] w-fit">
        <Avatar className="h-18 w-18 rounded-full" />
        <div className="bg-green absolute right-0 bottom-0 flex h-5 w-5 items-center justify-center rounded-full">
          <IconWrite className="text-grey-0 h-2.5 w-2.5" />
        </div>
      </div>

      <div className="bg-grey-0 rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <span className="text-body2-medium text-grey-950 font-gsans-medium">
            닉네임
          </span>
          <button className="flex items-center gap-1">
            <span className="text-body2-medium font-gsans-medium text-grey-300">
              나리어
            </span>
            <IconChevronRight className="text-grey-400 h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="text-body2-medium font-gsans-medium text-grey-400 mt-6 flex items-center justify-center gap-3">
        <button className="border-r border-[#D9D9D9] pr-3">로그아웃</button>
        <button onClick={handleWithdraw}>회원탈퇴</button>
      </div>

      <WithdrawConfirmModal
        open={confirmModal.state.isOpen}
        onClose={confirmModal.handlers.handleCloseModal}
        onConfirm={handleConfirmWithdraw}
      />
      <WithdrawSuccessModal
        open={successModal.state.isOpen}
        onClose={successModal.handlers.handleCloseModal}
      />
    </div>
  );
}
