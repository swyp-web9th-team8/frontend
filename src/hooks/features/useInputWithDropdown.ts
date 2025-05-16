import { useState } from "react";
import { useFormContext } from "react-hook-form";
import useOutsideClick from "./commons/useOutsideClick";

export const useInputWithDropdown = (name: string) => {
  const { setValue } = useFormContext();

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const { ref, isOpen, setIsOpen } = useOutsideClick();

  const handleDropdownItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    setValue(name, item);
  };

  const handleButtonclick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => setIsOpen(false);
  const handleControlModal = () => setIsOpen(!false);

  return {
    ref: { ref },
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
