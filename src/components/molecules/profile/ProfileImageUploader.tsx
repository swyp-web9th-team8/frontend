"use client";

import Avatar from "@/assets/icons/avatar.svg";
import IconWrite from "@/assets/icons/IconWrite.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

interface ProfileImageUploaderProps {
  profileImageUrl: string;
}

export default function ProfileImageUploader({
  profileImageUrl,
}: ProfileImageUploaderProps) {
  const { register, setValue } = useFormContext<{
    profileImage: File | string | null;
  }>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setValue("profileImage", file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="relative mx-auto mb-[1.875rem] w-fit">
      <button type="button" onClick={handleClick}>
        {preview ? (
          <div className="relative h-18 w-18 rounded-full object-cover">
            <Image
              src={preview}
              alt="미리보기"
              fill
              className="rounded-full object-cover"
              quality={100}
            />
          </div>
        ) : profileImageUrl && !imageError ? (
          <div className="relative h-18 w-18 rounded-full object-cover">
            <Image
              src={profileImageUrl}
              alt="프로필 이미지"
              fill
              className="rounded-full object-cover"
              quality={100}
              onError={handleImageError}
            />
          </div>
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
