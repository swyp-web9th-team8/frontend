"use client";

import { useFormContext } from "react-hook-form";
import { useRef, useState } from "react";
import PlusIcon from "@/assets/icons/plus.svg";

export default function ProfileImageUploader() {
  const { register, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("profileImage", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-medium text-[#1A1A1A]">
        프로필 사진 (선택)
      </label>
      <div
        onClick={handleClick}
        className="flex h-[6.25rem] w-full cursor-pointer items-center justify-center rounded-2xl border border-dashed"
      >
        {preview ? (
          <img
            src={preview}
            alt="미리보기"
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <PlusIcon />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        {...register("profileImage")}
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
