"use client";

import { useState } from "react";
import { RegisterOptions } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import TextArea from "../../atoms/Input/TextArea";
import Modal from "../../atoms/Modal/Modal";
import TwoButtonContents from "../../atoms/Modal/contents/TwoButtonContents";

interface Props {
  name: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
  rows?: number;
}

function InputWithKaKaoLink({
  name,
  placeholder = "",
  validationRules,
  rows,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseTextArea = () => {
    setIsOpen(false);
  };

  const handleConfirmTextArea = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Input
        name={name}
        placeholder={placeholder}
        validationRules={validationRules}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
      />
      {isOpen && (
        <Modal onClose={handleCloseTextArea}>
          <TwoButtonContents
            onClose={handleCloseTextArea}
            onConfirm={handleConfirmTextArea}
            buttonText={{ close: "취소", confirm: "확인" }}
          >
            <div className="flex flex-col gap-5">
              <div className="text-heading2-medium font-gsans-medium text-gray-950">
                카카오톡 오픈채팅방 URL을 입력해주세요
              </div>
              <TextArea
                name={name}
                placeholder={`예시: https://open.kakao.com/o/srX5Gdlh`}
                validationRules={validationRules}
                rows={rows}
              />
            </div>
          </TwoButtonContents>
        </Modal>
      )}
    </div>
  );
}

export default InputWithKaKaoLink;
