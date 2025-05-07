import { useModal } from "@/hooks/features/commons/useModal";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const useInputWithDropdown = (name: string) => {
  const { setValue } = useFormContext();

  const {
    state: { isOpen },
    handlers: { handleCloseModal, handleControlModal },
  } = useModal();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDropdownItemClick = (item: string) => {
    setSelectedItem(item);
    handleCloseModal();
    setValue(name, item);
  };

  const handleButtonclick = () => {
    handleControlModal();
  };

  return {
    state: { isOpen, selectedItem },
    setters: { setSelectedItem },
    handlers: {
      handleCloseModal,
      handleControlModal,
      handleDropdownItemClick,
      handleButtonclick,
    },
  };
};
