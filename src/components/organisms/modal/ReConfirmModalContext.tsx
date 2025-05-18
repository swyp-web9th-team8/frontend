"use client";

import Modal from "@/components/atoms/Modal/Modal";
import TwoButtonContents from "@/components/atoms/Modal/contents/TwoButtonContents";
import { createContext, ReactNode, useContext, useState } from "react";
import ReConfirm from "./ReConfirm";

interface ModalContextType {
  isOpen: boolean;
  title: string;
  description?: string;
  showDate?: string;
  showIcon?: boolean;
  buttonText?: {
    close: string;
    confirm: string;
  };
  onConfirm?: () => void;
  /** 모달 사용 시 openModal 호출 */
  openModal: (props: {
    title: string;
    description?: string;
    showDate?: string;
    showIcon?: boolean;
    buttonText?: {
      close: string;
      confirm: string;
    };
    onConfirm?: () => void;
  }) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ReConfirmModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [showDate, setShowDate] = useState<string | undefined>(undefined);
  const [showIcon, setShowIcon] = useState<boolean>(true);
  const [buttonText, setButtonText] = useState<{
    close: string;
    confirm: string;
  }>({
    close: "나중에 하기",
    confirm: "지금하기",
  });
  const [onConfirm, setOnConfirm] = useState<(() => void) | undefined>(
    undefined,
  );

  const openModal = ({
    title,
    description,
    showDate,
    showIcon = true,
    buttonText,
    onConfirm,
  }: {
    title: string;
    description?: string;
    showDate?: string;
    showIcon?: boolean;
    buttonText?: {
      close: string;
      confirm: string;
    };
    onConfirm?: () => void;
  }) => {
    setTitle(title);
    setDescription(description);
    setShowDate(showDate);
    setShowIcon(showIcon);
    if (buttonText) {
      setButtonText(buttonText);
    }
    if (onConfirm) {
      setOnConfirm(() => onConfirm);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  const renderModal = () => {
    if (!isOpen) return null;

    return (
      <Modal onClose={closeModal} position="center" variant="plain">
        <TwoButtonContents
          onClose={closeModal}
          onConfirm={handleConfirm}
          buttonText={buttonText}
        >
          <ReConfirm
            title={title}
            description={description}
            showDate={showDate}
            showIcon={showIcon}
          />
        </TwoButtonContents>
      </Modal>
    );
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        title,
        description,
        showDate,
        showIcon,
        buttonText,
        onConfirm,
        openModal,
        closeModal,
      }}
    >
      {children}
      {renderModal()}
    </ModalContext.Provider>
  );
}

export function useReConfirmModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error(
      "useReConfirmModal must be used within a ReConfirmModalProvider",
    );
  }
  return context;
}
