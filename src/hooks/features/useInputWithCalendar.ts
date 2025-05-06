import { formatDateKorean } from "@/utils/day";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useModal } from "./commons/useModal";

export const useInputWithCalendar = (name: string) => {
  const { setValue } = useFormContext();

  const { isOpen, handleCancelModal, handleControlModal } = useModal();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleCloseCalendar = () => {
    handleCancelModal();
  };

  const handleConfirmDate = () => {
    setValue(name, formatDateKorean(selectedDate));
    handleCancelModal();
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  return {
    state: { isOpen, selectedDate },
    setters: { setSelectedDate },
    handlers: {
      handleCancelModal,
      handleControlModal,
      handleCloseCalendar,
      handleConfirmDate,
      handleDayClick,
    },
  };
};
