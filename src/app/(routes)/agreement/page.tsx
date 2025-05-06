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
    <div className="flex min-h-screen flex-col justify-between bg-[#F6F6F6] px-5 py-[4.5rem]">
      <div>
        <div className="relative mb-12 flex items-center justify-center">
          <button
            type="button"
            onClick={() => router.push("/signup")}
            aria-label="뒤로가기"
            className="absolute left-0 mr-3 cursor-pointer"
          >
            <BackArrow />
          </button>
          <h1 className="text-grey-950 text-heading1-medium font-gsans-medium text-center">
            약관 동의
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={toggleAll}
            className="flex cursor-pointer items-center gap-2"
          >
            {isAllChecked ? (
              <SelectedIcon className="h-5 w-5" />
            ) : (
              <UnSelectedIcon className="h-5 w-5" />
            )}
            <span
              className={`text-body1-medium font-gsans-medium pt-1 ${isAllChecked ? "text-grey-950" : "text-grey-300"}`}
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
                className="flex cursor-pointer items-center gap-2"
              >
                {agreements[id] ? (
                  <SelectedIcon className="h-5 w-5" />
                ) : (
                  <UnSelectedIcon className="h-5 w-5" />
                )}
                <span
                  className={`text-body1-medium font-gsans-medium pt-1 ${agreements[id] ? "text-grey-950" : "text-grey-300"}`}
                >
                  {label}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPopup(id)}
                className="font-gsans-medium text-body3-medium text-grey-300 cursor-pointer underline"
              >
                보기
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={!isAllChecked}
        className="bg-green font-gsans-medium text-body1-medium text-grey-0 disabled:bg-grey-200 w-full cursor-pointer rounded-xl py-3 disabled:opacity-50"
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
