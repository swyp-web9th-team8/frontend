"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { requestHandler } from "@/lib/axiosInstance";
import Modal from "@/components/atoms/Modal/Modal";

export default function RegionSelectorForm() {
  const { setValue, watch } = useFormContext();
  const current = watch("region");

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"GU" | "DONG">("GU");
  const [selectedGu, setSelectedGu] = useState("");
  const [selectedDong, setSelectedDong] = useState("");

  // 구 리스트 요청
  const { data: districts = [] } = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const res = await requestHandler("get", "/api/regions/districts");
      return res.districts;
    },
  });

  // 동 리스트 요청 (선택된 구 있을 때만 요청)
  const { data: neighborhoods = [] } = useQuery({
    queryKey: ["neighborhoods", selectedGu],
    queryFn: async () => {
      const res = await requestHandler(
        "get",
        `/api/regions/neighborhoods?district=${encodeURIComponent(selectedGu)}`,
      );
      return res.neighborhoods;
    },
    enabled: !!selectedGu,
  });

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

  const handleClose = () => {
    setOpen(false);
    setStep("GU");
    setSelectedGu("");
    setSelectedDong("");
  };

  const isButtonDisabled = () => {
    if (step === "GU") return !selectedGu;
    if (step === "DONG") return !selectedDong;
    return false;
  };

  const renderList = () => {
    const items = step === "GU" ? districts : neighborhoods;

    if (!Array.isArray(items)) return null;

    return items.map((name) => {
      const isSelected =
        (step === "GU" && selectedGu === name) ||
        (step === "DONG" && selectedDong === name);

      return (
        <button
          key={name}
          onClick={() =>
            step === "GU" ? handleGuSelect(name) : handleDongSelect(name)
          }
          className={`font-gsans-medium text-body1-medium cursor-pointer rounded-xl px-4 py-3 ${
            isSelected ? "bg-green text-grey-0" : "bg-grey-0 text-grey-950"
          }`}
        >
          {name}
        </button>
      );
    });
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
        <Modal onClose={handleClose} position="bottom">
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
              {renderList()}
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
