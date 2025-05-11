"use client";

import { useModal } from "@/hooks/features/commons/useModal";
import Header from "@/components/organisms/Header";
import EditProfileForm from "@/components/organisms/profile/EditProfileForm";
import WithdrawConfirmModal from "@/components/molecules/withdraw/WithdrawConfirmModal";
import WithdrawSuccessModal from "@/components/molecules/withdraw/WithdrawSuccessModal";

export default function EditProfileTemplate() {
  const confirmModal = useModal();
  const successModal = useModal();

  const handleWithdraw = () => confirmModal.handlers.handleOpenModal();
  const handleConfirmWithdraw = () => {
    confirmModal.handlers.handleCloseModal();
    successModal.handlers.handleOpenModal();
  };

  return (
    <div>
      <Header title="프로필 수정" backButton />
      <EditProfileForm onWithdraw={handleWithdraw} />

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
