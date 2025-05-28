"use client";

import Modal from "@/components/atoms/Modal/Modal";
import RegionPicker from "@/components/organisms/region/RegionPicker";

interface RegionSelectorModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (region: string) => void;
}

export default function RegionSelectorModal({
  open,
  onClose,
  onSelect,
}: RegionSelectorModalProps) {
  if (!open) return null;

  const handleComplete = (gu: string, dong: string) => {
    onSelect(`${gu} ${dong}`);
    onClose();
  };

  return (
    <Modal onClose={onClose} position="bottom">
      <div className="h-full">
        <RegionPicker onComplete={handleComplete} className="px-6 pt-6 pb-24" />
      </div>
    </Modal>
  );
}
