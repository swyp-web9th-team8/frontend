import { useModal } from "@/hooks/features/commons/useModal";
import { formatDateKorean } from "@/utils/day";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const useInputWithCalendar = (name: string) => {
  const { setValue } = useFormContext();

  const {
    state: { isOpen },
    handlers: { handleCloseModal, handleControlModal },
  } = useModal();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleConfirmDate = () => {
    setValue(name, formatDateKorean(selectedDate));
    handleCloseModal();
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  return {
    state: { isOpen, selectedDate },
    setters: { setSelectedDate },
    handlers: {
      handleCloseModal,
      handleControlModal,
      handleConfirmDate,
      handleDayClick,
    },
  };
};
