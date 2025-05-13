"use client";

import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Input from "../../atoms/Input/Input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
}

const InputWithLocation = ({ name, placeholder, validationRules }: Props) => {
  const { setValue } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  /** 우편번호 검색 서비스 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setValue(name, fullAddress);
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
      {isOpen && <DaumPostcodeEmbed onComplete={handleComplete} />}
    </div>
  );
};

export default InputWithLocation;
