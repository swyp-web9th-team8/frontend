import Input from "@/components/atoms/Input/Input";
import TwoButtonContents from "@/components/atoms/Modal/contents/TwoButtonContents";
import Modal from "@/components/atoms/Modal/Modal";
import OverlayView from "@/components/molecules/OverlayView";
import TimePicker from "@/components/molecules/TimePicker";
import { AMPM, HOURS, MINITUES } from "@/constants/createForm";
import { useInputWithTimePicker } from "@/hooks/features/useInputWithTimePicker";
import { RegisterOptions } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
}

function InputWithTimePicker({ name, placeholder, validationRules }: Props) {
  const {
    state: { isOpen, selectedHour, selectedMinute, amPm },
    handlers: {
      handleControlModal,
      handleHourScroll,
      handleMinuteScroll,
      handleAmPmScroll,
      handleCloseModal,
      handleConfirmTime,
    },
  } = useInputWithTimePicker(name);

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
        <Modal onClose={handleCloseModal}>
          <div className="px-5 pt-[63px] pb-[30px]">
            <TwoButtonContents
              onClose={handleCloseModal}
              onConfirm={handleConfirmTime}
              buttonText={{ close: "취소", confirm: "확인" }}
            >
              <div className="relative flex items-center justify-center">
                {/* 시간 선택 */}
                <TimePicker
                  time={HOURS}
                  handleTimeScroll={handleHourScroll}
                  selectedTime={selectedHour}
                />
                {/* 분 선택 */}
                <TimePicker
                  time={MINITUES}
                  handleTimeScroll={handleMinuteScroll}
                  selectedTime={selectedMinute}
                />
                {/* 오전/오후 선택 */}
                <TimePicker
                  time={AMPM}
                  handleTimeScroll={handleAmPmScroll}
                  selectedTime={amPm}
                />
                <OverlayView />
              </div>
            </TwoButtonContents>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default InputWithTimePicker;
