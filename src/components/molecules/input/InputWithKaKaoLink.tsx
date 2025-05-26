"use client";

import { useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
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
  const { setValue, getValues } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  /** TextArea와 Input과 분리되어 상태를 저장하도록
   * TextArea의 필드 이름을 생성 (기존 name에 _textarea를 붙임)
   */
  const textAreaName = `${name}_textarea`;

  const handleConfirmTextArea = () => {
    const textAreaValue = getValues(textAreaName);
    setValue(name, textAreaValue);
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
        <Modal onClose={() => setIsOpen(false)}>
          <div className="px-5 pt-[66px] pb-[30px]">
            <TwoButtonContents
              onClose={() => setIsOpen(false)}
              onConfirm={handleConfirmTextArea}
              buttonText={{ close: "취소", confirm: "확인" }}
            >
              <div className="flex flex-col gap-5">
                <div className="text-heading2-medium font-gsans-medium text-gray-950">
                  카카오톡 오픈채팅방 URL을 입력해주세요
                </div>
                <TextArea
                  name={textAreaName}
                  placeholder={`예시: https://open.kakao.com/o/srX5Gdlh`}
                  validationRules={validationRules}
                  rows={rows}
                />
              </div>
            </TwoButtonContents>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default InputWithKaKaoLink;
