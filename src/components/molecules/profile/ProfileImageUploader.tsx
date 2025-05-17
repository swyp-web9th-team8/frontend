"use client";

import { useFormContext } from "react-hook-form";
import { useRef, useState } from "react";
import IconWrite from "@/assets/icons/IconWrite.svg";
import Image from "next/image";
import Avatar from "@/assets/icons/avatar.svg";

interface ProfileImageUploaderProps {
  profileImageUrl: string;
}

export default function ProfileImageUploader({
  profileImageUrl,
}: ProfileImageUploaderProps) {
  const { register, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    <div className="relative mx-auto mb-[1.875rem] w-fit">
      <button type="button" onClick={handleClick}>
        {preview ? (
          <Image
            src={preview}
            alt="미리보기"
            width={72}
            height={72}
            className="rounded-full object-cover"
          />
        ) : profileImageUrl ? (
          <img
            src={profileImageUrl}
            alt="프로필 이미지"
            className="h-18 w-18 rounded-full object-cover"
          />
        ) : (
          <Avatar className="h-18 w-18 rounded-full" />
        )}

        <div className="bg-green absolute right-0 bottom-0 flex h-5 w-5 items-center justify-center rounded-full">
          <IconWrite className="text-grey-0 h-2.5 w-2.5" />
        </div>
      </button>
      <input
        type="file"
        accept="image/*"
        {...register("profileImage")}
        ref={(e) => {
          register("profileImage").ref(e);
          fileInputRef.current = e;
        }}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
