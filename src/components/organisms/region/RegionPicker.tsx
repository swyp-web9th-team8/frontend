import { useState } from "react";
import RegionOptionGrid from "@/components/molecules/region/RegionOptionGrid";
import clsx from "clsx";
import { useDistricts, useNeighborhoods } from "@/hooks/queries/useRegions";

interface RegionPickerProps {
  onComplete: (gu: string, dong: string) => void;
  className?: string;
}

export default function RegionPicker({
  onComplete,
  className = "p-6",
}: RegionPickerProps) {
  const [step, setStep] = useState<"GU" | "DONG">("GU");
  const [selectedGu, setSelectedGu] = useState("");
  const [selectedDong, setSelectedDong] = useState("");

  const { data: guList = [] } = useDistricts();
  const { data: dongList = [], isLoading } = useNeighborhoods(
    selectedGu,
    step === "DONG",
  );

  const handleNext = () => setStep("DONG");
  const handleComplete = () => onComplete(selectedGu, selectedDong);

  const isDisabled = step === "GU" ? !selectedGu : !selectedDong;

  return (
    <div
      className={clsx(
        "flex h-full max-h-[calc(100vh-6rem)] flex-col gap-9",
        className,
      )}
    >
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

      <div className="max-h-[calc(100vh-18rem)] overflow-y-auto">
        <RegionOptionGrid
          items={step === "GU" ? guList : dongList}
          selected={step === "GU" ? selectedGu : selectedDong}
          onSelect={step === "GU" ? setSelectedGu : setSelectedDong}
          loading={step === "DONG" && isLoading}
        />
      </div>

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
