"use client";

import IconAdd from "@/assets/icons/IconAdd.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

function ProfileImagesUploader() {
  const { register, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previews, setPreviews] = useState<string[]>([]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews: string[] = [];
      const fileArray = Array.from(files);

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result as string);
          if (newPreviews.length === fileArray.length) {
            setPreviews((prev) => [...prev, ...newPreviews]);
            setValue("profileImages", fileArray);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    setValue("profileImages", (prev: File[]) =>
      prev.filter((_, i) => i !== index),
    );
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        {...register("profileImages")}
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
      <div className="grid grid-cols-3 gap-2.5">
        {previews.length > 0 &&
          previews.map((preview, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={preview}
                alt={`미리보기 ${index + 1}`}
                className="h-full w-full rounded-xl object-cover"
                width={0}
                height={0}
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
              >
                x
              </button>
            </div>
          ))}
        {previews.length === 0 && (
          <div onClick={handleClick} className="cursor-pointer">
            <ProfilePreviewImage />
          </div>
        )}
      </div>
    </div>
  );
}

function ProfilePreviewImage() {
  return (
    <div className="bg-greyscale-gray-50 relative flex h-24 w-96 items-center justify-center overflow-hidden rounded-2xl outline outline-[0.50px] outline-offset-[-0.50px] outline-gray-950 outline-dashed">
      <div className="h-12 w-12 rounded-full bg-zinc-300">
        <IconAdd className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default ProfileImagesUploader;
