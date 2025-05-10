"use client";

import { useState } from "react";
import IconDropdown from "@/assets/icons/dropdown-arrow.svg";
import DropdownList from "@/components/organisms/DropdownList";
import DropdownItem from "@/components/molecules/DropdownItem";

interface LocationSelectorDropdownProps {
  selected: string;
  onSelect: (value: string) => void;
  onOpenModal: () => void;
}

export default function LocationSelectorDropdown({
  selected,
  onSelect,
  onOpenModal,
}: LocationSelectorDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClick = (option: string) => {
    if (option === "다른 지역 보기") {
      onOpenModal();
    } else {
      onSelect(option);
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
            {["내 거주지역", "현재 위치한 지역 (동)"].map((option) => (
              <DropdownItem
                key={option}
                isActive={selected === option}
                onClick={() => handleClick(option)}
                type="selectable"
              >
                {option}
              </DropdownItem>
            ))}
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
