"use client";

import Modal from "@/components/atoms/Modal/Modal";
import RegionPicker from "@/components/organisms/region/RegionPicker";
import { GU_LIST, DONG_MAP } from "@/data/regions";

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
    <Modal onClose={onClose} position="center">
      <RegionPicker
        guList={GU_LIST}
        dongMap={DONG_MAP}
        onComplete={handleComplete}
      />
    </Modal>
  );
}
