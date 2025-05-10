"use client";

import { useState } from "react";
import Modal from "@/components/atoms/Modal/Modal";
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
  const [step, setStep] = useState<"GU" | "DONG">("GU");
  const [selectedGu, setSelectedGu] = useState("");
  const [selectedDong, setSelectedDong] = useState("");

  const handleClose = () => {
    setStep("GU");
    setSelectedGu("");
    setSelectedDong("");
    onClose();
  };

  const handleComplete = () => {
    if (selectedGu && selectedDong) {
      onSelect(`${selectedGu} ${selectedDong}`);
      handleClose();
    }
  };

  const isDisabled =
    (step === "GU" && !selectedGu) || (step === "DONG" && !selectedDong);

  if (!open) return null;

  return (
    <Modal onClose={handleClose} position="center">
      <div className="mt-[1.125rem] flex h-full flex-col gap-9 p-6">
        <h2 className="text-heading1-bold font-gsans-bold">
          {step === "GU" ? (
            <>
              어느 <span className="text-green">구</span>를 찾고 계신가요?
            </>
          ) : (
            <>
              어느 <span className="text-green">동</span>을 찾고 계신가요?
            </>
          )}
        </h2>

        <div className="grid h-full grid-cols-3 gap-2.5 overflow-y-auto">
          {(step === "GU" ? GU_LIST : DONG_MAP[selectedGu] || []).map(
            (name) => {
              const isSelected =
                (step === "GU" && selectedGu === name) ||
                (step === "DONG" && selectedDong === name);

              return (
                <button
                  key={name}
                  onClick={() =>
                    step === "GU" ? setSelectedGu(name) : setSelectedDong(name)
                  }
                  className={`font-gsans-medium text-body1-medium cursor-pointer rounded-xl px-4 py-3 ${
                    isSelected
                      ? "bg-green text-grey-0"
                      : "bg-grey-0 text-grey-950"
                  }`}
                >
                  {name}
                </button>
              );
            },
          )}
        </div>

        <button
          disabled={isDisabled}
          onClick={step === "GU" ? () => setStep("DONG") : handleComplete}
          className="text-body1-medium font-gsans-medium bg-green text-grey-0 w-full cursor-pointer rounded-xl py-3 disabled:cursor-auto disabled:opacity-50"
        >
          {step === "GU" ? "다음" : "완료"}
        </button>
      </div>
    </Modal>
  );
}
