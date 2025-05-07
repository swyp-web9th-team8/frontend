import { AMPM, HOURS, MINITUES } from "@/constants/createForm";
import { convertTimeFormat } from "@/utils/day";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useModal } from "./commons/useModal";

export const useInputWithTimePicker = (name: string) => {
  const { setValue } = useFormContext();

  const {
    state: { isOpen },
    handlers: { handleCloseModal, handleControlModal },
  } = useModal();
  const [selectedHour, setSelectedHour] = useState("7");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [amPm, setAmPm] = useState("AM");

  // 시간, 분 스크롤 이벤트 핸들러
  const handleHourScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const index = Math.round(container.scrollTop / 34);
    setSelectedHour(HOURS[index] || HOURS[0]);
  };

  const handleMinuteScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const index = Math.round(container.scrollTop / 34);
    setSelectedMinute(MINITUES[index] || MINITUES[0]);
  };

  const handleAmPmScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const index = Math.round(container.scrollTop / 34);
    setAmPm(AMPM[index] || AMPM[0]);
  };

  const handleConfirmTime = () => {
    setValue(
      name,
      `${convertTimeFormat(`${selectedHour}:${selectedMinute}:${amPm}`)}`,
    );
    handleCloseModal();
  };

  return {
    state: { isOpen, selectedHour, selectedMinute, amPm },
    setters: { setSelectedHour, setSelectedMinute, setAmPm },
    handlers: {
      handleCloseModal,
      handleControlModal,
      handleHourScroll,
      handleMinuteScroll,
      handleAmPmScroll,
      handleConfirmTime,
    },
  };
};
