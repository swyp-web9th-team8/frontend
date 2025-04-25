"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UnSelectedIcon from "@/assets/icons/unselected.svg";
import SelectedIcon from "@/assets/icons/selected.svg";
import BackArrow from "@/assets/icons/back-arrow.svg";
import AgreementPopup from "@/components/molecules/AgreementPopup";
import { termsContent, termsList } from "@/constants/agreementterms";

export default function AgreementPage() {
  const router = useRouter();
  const [agreements, setAgreements] = useState<Record<string, boolean>>({
    terms: false,
    privacy: false,
    location: false,
  });

  const [selectedPopup, setSelectedPopup] = useState<string | null>(null);

  const isAllChecked = Object.values(agreements).every(Boolean);

  const toggleAll = () => {
    const next = !isAllChecked;
    const updated = Object.fromEntries(
      Object.keys(agreements).map((key) => [key, next]),
    );
    setAgreements(updated);
  };

  const toggleOne = (id: string) => {
    setAgreements((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNext = () => {
    router.push("/welcome");
  };

  const handlePopupConfirm = (id: string) => {
    setAgreements((prev) => ({ ...prev, [id]: true }));
    setSelectedPopup(null);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] px-5 py-6">
      <div className="mb-10 flex items-center">
        <button
          type="button"
          onClick={() => router.push("/signup")}
          aria-label="뒤로가기"
          className="mr-3"
        >
          <BackArrow />
        </button>
        <h1 className="flex-1 text-center text-xl font-medium text-[#1A1A1A]">
          약관 동의
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={toggleAll}
          className="flex items-center gap-2"
        >
          {isAllChecked ? (
            <SelectedIcon className="h-5 w-5" />
          ) : (
            <UnSelectedIcon className="h-5 w-5" />
          )}
          <span
            className={`text-base font-medium ${isAllChecked ? "text-[#1A1A1A]" : "text-[#B0B0B0]"}`}
          >
            전체 동의
          </span>
        </button>

        <hr className="my-1 border-gray-200" />

        {termsList.map(({ id, label }) => (
          <div key={id} className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => toggleOne(id)}
              className="flex items-center gap-2"
            >
              {agreements[id] ? (
                <SelectedIcon className="h-5 w-5" />
              ) : (
                <UnSelectedIcon className="h-5 w-5" />
              )}
              <span
                className={`text-sm ${agreements[id] ? "text-[#1A1A1A]" : "text-[#B0B0B0]"}`}
              >
                {label}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPopup(id)}
              className="text-sm font-medium text-[#B0B0B0] underline"
            >
              보기
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={!isAllChecked}
        className="mt-16 w-full rounded-xl bg-[#59AC6E] py-3 text-sm font-medium text-white disabled:bg-[#D1D1D1] disabled:opacity-50"
      >
        확인
      </button>

      {selectedPopup && (
        <AgreementPopup
          title={
            termsList.find((term) => term.id === selectedPopup)?.title || ""
          }
          content={termsContent[selectedPopup]}
          onClose={() => setSelectedPopup(null)}
          onConfirm={() => handlePopupConfirm(selectedPopup)}
        />
      )}
    </div>
  );
}
