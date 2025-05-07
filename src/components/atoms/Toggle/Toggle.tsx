"use client";

import IconCheckWithoutCircle from "@/assets/icons/IconCheckWithoutCircle.svg";

interface ToggleProps {
  isOn: boolean;
  onChange?: (isOn: boolean) => void;
  disabled?: boolean;
}

function Toggle({ isOn = false, onChange, disabled = false }: ToggleProps) {
  const handleToggle = () => {
    if (disabled) return;
    onChange?.(isOn);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      disabled={disabled}
      onClick={handleToggle}
      className={`relative inline-flex h-[30px] w-[52px] items-center rounded-full transition-colors focus:ring-offset-2 focus:outline-none ${isOn ? "bg-green" : "bg-gray-200"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} `}
    >
      <span
        className={`flex inline-block h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform ${isOn ? "translate-x-6" : "translate-x-1"} `}
      >
        {isOn && <IconCheckWithoutCircle className="text-green h-6 w-6" />}
      </span>
    </button>
  );
}

export default Toggle;
