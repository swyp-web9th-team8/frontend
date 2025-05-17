"use client";

import IconChevronBeolow from "@/assets/icons/IconChevronBelow.svg";
import DropdownItem from "@/components/molecules/DropdownItem";
import DropdownList from "@/components/organisms/DropdownList";
import { useInputWithDropdown } from "@/hooks/features/useInputWithDropdown";
import { RegisterOptions } from "react-hook-form";
import Input from "../../atoms/Input/Input";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  validationRules?: RegisterOptions;
  options: string[];
}

const InputWithDropdown = ({
  name,
  placeholder,
  validationRules,
  options,
}: Props) => {
  const {
    ref: { ref },
    state: { isOpen, selectedItem },
    handlers: {
      handleControlModal,
      handleDropdownItemClick,
      handleButtonclick,
    },
  } = useInputWithDropdown(name);

  return (
    <div className="relative" ref={ref}>
      <div>
        <Input
          name={name}
          placeholder={placeholder}
          validationRules={validationRules}
          onClick={handleControlModal}
          readOnly
        />
        <button
          type="button"
          className="absolute top-1/2 right-4 -translate-y-1/2"
          onClick={handleButtonclick}
        >
          <IconChevronBeolow
            className={`h-6 w-6 transition-all ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 bottom-[-156px] z-10">
          <DropdownList>
            {options.map((option, index) => (
              <DropdownItem
                key={index}
                isActive={selectedItem === option}
                onClick={() => handleDropdownItemClick(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        </div>
      )}
    </div>
  );
};

export default InputWithDropdown;
