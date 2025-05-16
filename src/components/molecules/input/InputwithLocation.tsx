"use client";

import useOutsideClick from "@/hooks/features/commons/useOutsideClick";
import DaumPostcodeEmbed from "react-daum-postcode";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import { useToast } from "../toast/ToastContext";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
}

const InputWithLocation = ({ name, placeholder, validationRules }: Props) => {
  const { setValue } = useFormContext();
  const showToast = useToast();
  const { ref, isOpen, setIsOpen } = useOutsideClick();

  /** 우편번호 검색 서비스 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleComplete = (data: any) => {
    const address = data.address;

    if (data.sido !== "서울") {
      showToast("현재는 서울에서만 서비스 이용이 가능해요");
      return;
    }
    setValue(name, address);
    setIsOpen(false);
  };

  return (
    <div>
      <Input
        name={name}
        placeholder={placeholder}
        validationRules={validationRules}
        onClick={() => setIsOpen(true)}
        readOnly
      />
      {isOpen && (
        <div ref={ref} className="mt-4" id="postcode-modal">
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </div>
      )}
    </div>
  );
};

export default InputWithLocation;
