"use client";

import IconChevronBelow from "@/assets/icons/IconChevronBelow.svg";
import Input from "@/components/atoms/Input/Input";
import Modal from "@/components/atoms/Modal/Modal";
import { useState } from "react";
import { RegisterOptions } from "react-hook-form";
import TwoButtonContents from "../../atoms/Modal/contents/TwoButtonContents";

interface Props {
  name: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
  children: React.ReactNode;
  rows?: number;
  onConfirm?: () => void;
}

function InputWithModal({
  name,
  placeholder = "",
  validationRules,
  children,
  onConfirm,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalConfirm = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div>
        <Input
          name={name}
          placeholder={placeholder}
          validationRules={validationRules}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="absolute top-1/2 right-4 -translate-y-1/2"
        >
          <IconChevronBelow className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <Modal onClose={handleModalClose}>
          <TwoButtonContents
            onClose={handleModalClose}
            onConfirm={handleModalConfirm}
            buttonText={{ close: "취소", confirm: "확인" }}
          >
            {children}
          </TwoButtonContents>
        </Modal>
      )}
    </div>
  );
}

export default InputWithModal;
