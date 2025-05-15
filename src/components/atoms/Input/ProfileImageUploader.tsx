"use client";

import { useFormContext } from "react-hook-form";
import { useRef, useState } from "react";
import IconAdd from "@/assets/icons/IconAdd.svg";
import Image from "next/image";

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
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        onClick={handleClick}
        className={`flex h-[6.75rem] w-[6.75rem] cursor-pointer items-center justify-center rounded-full border ${preview ? "border-solid" : "border-dashed"} `}
      >
        {preview ? (
          <Image
            src={preview}
            alt="미리보기"
            className="h-full w-full rounded-full object-cover"
            width={108}
            height={108}
          />
        ) : (
          <IconAdd className="h-7 w-7" />
        )}
      </div>
      <label className="text-grey-950 font-gsans-medium text-body1-medium block">
        프로필 사진 (선택)
      </label>
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
