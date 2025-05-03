"use client";

import { useFormContext } from "react-hook-form";

export default function GenderSelect() {
  const { register, watch, setValue } = useFormContext();
  const gender = watch("gender");

  const isSelected = (value: string) =>
    gender === value ? "bg-green text-grey-0" : "bg-grey-0 text-grey-300";

  const handleSelect = (value: string) => setValue("gender", value);

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => handleSelect("male")}
        className={`text-body2-medium font-gsans-medium border-grey-300 h-12 w-20 cursor-pointer rounded-full border-[0.8px] pt-1 ${isSelected("male")}`}
      >
        남성
      </button>
      <button
        type="button"
        onClick={() => handleSelect("female")}
        className={`text-body2-medium font-gsans-medium border-grey-300 h-12 w-20 cursor-pointer rounded-full border-[0.8px] pt-1 ${isSelected("female")}`}
      >
        여성
      </button>
      <input type="hidden" {...register("gender")} />
    </div>
  );
}
