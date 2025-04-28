"use client";

import { useFormContext } from "react-hook-form";

export default function GenderSelect() {
  const { register, watch, setValue } = useFormContext();
  const gender = watch("gender");

  const isSelected = (value: string) =>
    gender === value ? "bg-[#59AC6E] text-white" : "bg-white text-[#B0B0B0]";

  const handleSelect = (value: string) => setValue("gender", value);

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => handleSelect("male")}
        className={`h-12 w-20 cursor-pointer rounded-full border-[0.8px] border-[#B0B0B0] text-sm ${isSelected("male")}`}
      >
        남성
      </button>
      <button
        type="button"
        onClick={() => handleSelect("female")}
        className={`h-12 w-20 cursor-pointer rounded-full border-[0.8px] border-[#B0B0B0] text-sm ${isSelected("female")}`}
      >
        여성
      </button>
      <input type="hidden" {...register("gender")} />
    </div>
  );
}
