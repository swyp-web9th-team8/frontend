"use client";

import Calendar from "@/components/molecules/Calendar";
import { useInputWithCalendar } from "@/hooks/features/useInputWithCalendar";
import { RegisterOptions } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import Modal from "../../atoms/Modal/Modal";
import TwoButtonContents from "../../atoms/Modal/contents/TwoButtonContents";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
}

const InputWithCalendar = ({ name, placeholder, validationRules }: Props) => {
  const {
    state: { isOpen, selectedDate },
    handlers: {
      handleCloseCalendar,
      handleControlModal,
      handleConfirmDate,
      handleDayClick,
    },
  } = useInputWithCalendar(name);

  console.log("this is", selectedDate);

  return (
    <div>
      <Input
        name={name}
        placeholder={placeholder}
        validationRules={validationRules}
        onClick={handleControlModal}
        readOnly
      />
      {isOpen && (
        <Modal onClose={handleCloseCalendar}>
          <TwoButtonContents
            onClose={handleCloseCalendar}
            onConfirm={handleConfirmDate}
            buttonText={{ close: "취소", confirm: "확인" }}
          >
            <Calendar date={selectedDate} onSelect={handleDayClick} />
          </TwoButtonContents>
        </Modal>
      )}
    </div>
  );
};

export default InputWithCalendar;
