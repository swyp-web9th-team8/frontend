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
    setStep("GU");
    setSelectedGu("");
    setSelectedDong("");
  };

  return (
    <>
      <div
        className="w-full cursor-pointer rounded-full border-[0.8px] border-[#B0B0B0] px-4 py-[0.8125rem] text-sm text-[#1A1A1A]"
        onClick={() => setOpen(true)}
      >
        {current || "거주하는 구와 동을 선택해주세요"}
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-9 p-6">
            <h2 className="text-xl font-bold">
              {step === "GU" ? (
                <>
                  어느 <span className="text-[#59AC6E]">구</span>에 사시나요?
                </>
              ) : (
                <>
                  어느 <span className="text-[#59AC6E]">동</span>에 사시나요?
                </>
              )}
            </h2>

            <div className="grid max-h-[400px] grid-cols-3 gap-2.5 overflow-y-auto">
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
                      className={`rounded-xl px-4 py-3 text-sm font-medium ${
                        isSelected
                          ? "bg-[#59AC6E] text-white"
                          : "bg-white text-[#1A1A1A]"
                      }`}
                    >
                      {name}
                    </button>
                  );
                },
              )}
            </div>

            <button
              disabled={step === "DONG" && !selectedDong}
              onClick={step === "GU" ? () => setStep("DONG") : handleComplete}
              className="mt-6 w-full rounded-xl bg-[#59AC6E] py-3 text-white disabled:opacity-50"
            >
              {step === "GU" ? "다음" : "완료"}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
