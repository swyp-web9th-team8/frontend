import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleControlModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return {
    state: { isOpen },
    handlers: { handleControlModal, handleCloseModal, handleOpenModal },
  };
};
