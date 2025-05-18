"use client";

import IconDropdown from "@/assets/icons/dropdown-arrow.svg";
import DropdownItem from "@/components/molecules/DropdownItem";
import DropdownList from "@/components/organisms/DropdownList";
import { useReverseGeocode } from "@/hooks/queries/useRegions";
import { useUserProfile } from "@/hooks/queries/useUserProfile";
import { useState } from "react";
import { useToast } from "../toast/ToastContext";

interface LocationSelectorDropdownProps {
  selected: string;
  onSelect: (value: string) => void;
  onOpenModal: () => void;
  latitude: number | undefined;
  longitude: number | undefined;
}

export default function LocationSelectorDropdown({
  selected,
  onSelect,
  onOpenModal,
  latitude,
  longitude,
}: LocationSelectorDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: userProfile } = useUserProfile();

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const { refetch } = useReverseGeocode(latitude, longitude);

  const showToast = useToast();

  const [where, setWhere] = useState<
    "내 거주지역" | "현재 위치한 지역 (동)" | "ETC"
  >("내 거주지역");

  const handleClick = (option: string) => {
    if (option === "다른 지역 보기") {
      onOpenModal();
      setWhere("ETC");
    } else if (option === "내 거주지역") {
      if (userProfile?.region) {
        onSelect(userProfile.region);
        setWhere("내 거주지역");
      }
    } else {
      refetch()
        .then(({ data }) => {
          if (data && data.data) {
            onSelect(`${data.data.district} ${data.data.neighborhood}`);
            setWhere("현재 위치한 지역 (동)");
          }
        })
        .catch(() => {
          showToast("위치 정보를 가져오는데 실패했습니다.");
          setWhere("내 거주지역");
        });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-0.5">
        <h1
          className="font-gsans-medium text-heading2-medium text-grey-950 cursor-pointer"
          onClick={toggleDropdown}
        >
          {selected}
        </h1>
        <button
          type="button"
          onClick={toggleDropdown}
          className="cursor-pointer"
        >
          <IconDropdown
            className={`h-6 w-6 transition-all ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[2.5rem] left-0 z-10">
          <DropdownList>
            {["내 거주지역", "현재 위치한 지역 (동)"].map((option) => {
              let isActive = false;

              if (option === "내 거주지역") {
                isActive = where === "내 거주지역";
              } else {
                isActive = where === "현재 위치한 지역 (동)";
              }

              return (
                <DropdownItem
                  key={option}
                  isActive={isActive}
                  onClick={() => handleClick(option)}
                  type="selectable"
                >
                  {option}
                </DropdownItem>
              );
            })}

            <DropdownItem
              key="다른 지역 보기"
              onClick={() => handleClick("다른 지역 보기")}
              type="action"
            >
              다른 지역 보기
            </DropdownItem>
          </DropdownList>
        </div>
      )}
    </div>
  );
}
