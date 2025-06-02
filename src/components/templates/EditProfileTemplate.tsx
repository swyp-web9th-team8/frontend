"use client";

import { useModal } from "@/hooks/features/commons/useModal";
import Header from "@/components/organisms/Header";
import EditProfileForm from "@/components/organisms/profile/EditProfileForm";
import WithdrawConfirmModal from "@/components/molecules/withdraw/WithdrawConfirmModal";
import WithdrawSuccessModal from "@/components/molecules/withdraw/WithdrawSuccessModal";
import { useRouter } from "next/navigation";
import { useWithdraw } from "@/hooks/mutations/useWithdraw";
import { useToast } from "@/components/molecules/toast/ToastContext";

export default function EditProfileTemplate() {
  const confirmModal = useModal();
  const successModal = useModal();
  const router = useRouter();
  const showToast = useToast();

  const handleWithdraw = () => confirmModal.handlers.handleOpenModal();

  const withdrawMutation = useWithdraw(
    () => {
      confirmModal.handlers.handleCloseModal();
      successModal.handlers.handleOpenModal();
    },
    () => {
      showToast("회원 탈퇴에 실패했습니다. 다시 시도해주세요.");
    },
  );

  const handleConfirmWithdraw = () => {
    withdrawMutation.mutate();
  };

  const handleSuccessModalClose = () => {
    successModal.handlers.handleCloseModal();
    router.replace("/login");
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
        onClose={handleSuccessModalClose}
      />
    </div>
  );
}
