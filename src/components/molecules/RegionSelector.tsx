"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import Modal from "@/components/atoms/Modal/Modal";

const GU_LIST = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const DONG_MAP: Record<string, string[]> = {
  강남구: [
    "신사동",
    "논현1동",
    "논현2동",
    "압구정동",
    "청담동",
    "삼성1동",
    "삼성2동",
    "대치1동",
    "대치2동",
    "대치4동",
    "역삼1동",
    "역삼2동",
    "도곡1동",
    "도곡2동",
    "개포1동",
    "개포2동",
    "개포3동",
    "개포4동",
    "세곡동",
    "일원본동",
    "일원1동",
    "수서동",
  ],
  // 다른 구의 동도 필요시 여기에 추가
};

export default function RegionSelector() {
  const { setValue, watch } = useFormContext();
  const current = watch("region");

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"GU" | "DONG">("GU");
  const [selectedGu, setSelectedGu] = useState("");
  const [selectedDong, setSelectedDong] = useState("");

  const resetState = () => {
    setStep("GU");
    setSelectedGu("");
    setSelectedDong("");
  };

  const handleGuSelect = (gu: string) => {
    setSelectedGu(gu);
  };

  const handleDongSelect = (dong: string) => {
    setSelectedDong(dong);
  };

  const handleComplete = () => {
    const fullRegion = `${selectedGu} ${selectedDong}`;
    setValue("region", fullRegion);
    setOpen(false);
    resetState();
  };

  const handleClose = () => {
    setOpen(false);
    resetState();
  };

  const isButtonDisabled = () => {
    if (step === "GU") {
      return !selectedGu;
    }
    if (step === "DONG") {
      return !selectedDong;
    }
    return false;
  };

  return (
    <>
      <div
        className={`border-grey-300 font-gsans-medium text-body2-medium h-12 w-full cursor-pointer rounded-full border-[0.8px] px-4 pt-[1rem] pb-[0.8125rem] ${current ? `text-grey-950` : `text-grey-300`}`}
        onClick={() => setOpen(true)}
      >
        {current || "거주하는 구와 동을 선택해주세요"}
      </div>

      {open && (
        <Modal onClose={handleClose} position="center">
          <div className="mt-[1.125rem] flex h-full flex-col gap-9 p-6">
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

            <div className="grid h-[34.375rem] grid-cols-3 gap-2.5 overflow-y-auto">
              {(step === "GU" ? GU_LIST : DONG_MAP[selectedGu] || []).map(
                (name) => {
                  const isSelected =
                    (step === "GU" && selectedGu === name) ||
                    (step === "DONG" && selectedDong === name);
                  return (
                    <button
                      key={name}
                      onClick={() =>
                        step === "GU"
                          ? handleGuSelect(name)
                          : handleDongSelect(name)
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
              disabled={isButtonDisabled()}
              onClick={step === "GU" ? () => setStep("DONG") : handleComplete}
              className="text-body1-medium font-gsans-medium bg-green text-grey-0 w-full cursor-pointer rounded-xl py-3 disabled:cursor-auto disabled:opacity-50"
            >
              {step === "GU" ? "다음" : "완료"}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
