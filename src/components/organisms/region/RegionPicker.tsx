import { useState } from "react";
import RegionOptionGrid from "@/components/molecules/region/RegionOptionGrid";

interface RegionPickerProps {
  dongMap: Record<string, string[]>;
  guList: string[];
  onComplete: (gu: string, dong: string) => void;
}

export default function RegionPicker({
  guList,
  dongMap,
  onComplete,
}: RegionPickerProps) {
  const [step, setStep] = useState<"GU" | "DONG">("GU");
  const [selectedGu, setSelectedGu] = useState("");
  const [selectedDong, setSelectedDong] = useState("");

  const handleNext = () => setStep("DONG");
  const handleComplete = () => onComplete(selectedGu, selectedDong);

  const isDisabled = step === "GU" ? !selectedGu : !selectedDong;

  return (
    <div className="flex h-full flex-col gap-9 p-6">
      <h2 className="text-heading1-bold font-gsans-bold">
        {step === "GU" ? (
          <>
            어느 <span className="text-green">구</span>에 사시나요?
          </>
        ) : (
          <>
            어느 <span className="text-green">동</span>에 사시나요?
          </>
        )}
      </h2>

      <RegionOptionGrid
        items={step === "GU" ? guList : dongMap[selectedGu] || []}
        selected={step === "GU" ? selectedGu : selectedDong}
        onSelect={step === "GU" ? setSelectedGu : setSelectedDong}
      />

      <button
        disabled={isDisabled}
        onClick={step === "GU" ? handleNext : handleComplete}
        className="text-body1-medium font-gsans-medium bg-green text-grey-0 w-full cursor-pointer rounded-xl py-3 disabled:cursor-auto disabled:opacity-50"
      >
        {step === "GU" ? "다음" : "완료"}
      </button>
    </div>
  );
}
