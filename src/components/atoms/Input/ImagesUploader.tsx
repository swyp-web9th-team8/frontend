"use client";

import IconAdd from "@/assets/icons/IconAdd.svg";
import IconClose from "@/assets/icons/IconClose.svg";
import { useToast } from "@/components/molecules/toast/ToastContext";
import Image from "next/image";
import { useRef, useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "tiff"];
// TODO: 이미지 압축 진행
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 압축하기 전 백엔드(5MB) 제한을 위해 3MB로 설정
const MAX_IMAGE_COUNT = 6;

interface Props {
  name: string;
  validationRules?: RegisterOptions;
}

function ImagesUploader({ name, validationRules }: Props) {
  const { register, setValue, watch } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previews, setPreviews] = useState<string[]>([]);

  const showToast = useToast();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews: string[] = [];
      const fileArray = Array.from(files);

      // 이미지 개수 제한 검사
      if (previews.length + fileArray.length > MAX_IMAGE_COUNT) {
        showToast(`사진은 최대 ${MAX_IMAGE_COUNT}장까지 업로드할 수 있어요`);
        return;
      }

      // 파일 검증
      const validFiles = fileArray.filter((file) => {
        const extension = file.name.split(".").pop()?.toLowerCase();
        const isValidExtension =
          extension && ALLOWED_EXTENSIONS.includes(extension);
        const isValidSize = file.size <= MAX_FILE_SIZE;

        if (!isValidExtension) {
          showToast(
            `${ALLOWED_EXTENSIONS.join(", ")} 외 파일형식은 지원되지 않아요`,
          );
          return false;
        }
        if (!isValidSize) {
          showToast(
            `파일 크기는 ${MAX_FILE_SIZE / (1024 * 1024)}mb를 초과할 수 없어요`,
          );
          return false;
        }
        return true;
      });

      if (validFiles.length === 0) {
        setValue(name, [], { shouldValidate: true });
        return;
      }

      validFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result as string);
          if (newPreviews.length === validFiles.length) {
            setPreviews((prev) => [...prev, ...newPreviews]);
            setValue(name, validFiles, { shouldValidate: true });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    const currentFiles = watch(name) as File[];
    const updatedFiles = currentFiles.filter((_, i) => i !== index);
    setValue(name, updatedFiles, { shouldValidate: true });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        {...register(name, validationRules)}
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />

      {previews.length > 0 ? (
        <div className="grid grid-cols-3 gap-2.5">
          {previews.map((preview, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={preview}
                alt={`미리보기 ${index + 1}`}
                fill
                className="rounded-xl object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/70"
              >
                <IconClose className="h-[14px] w-[14px] text-gray-200" />
              </button>
            </div>
          ))}
          {previews.length < MAX_IMAGE_COUNT && (
            <div
              className="relative aspect-square rounded-xl outline outline-[0.50px] outline-offset-[-0.50px] outline-gray-950 outline-dashed"
              onClick={handleClick}
            >
              <IconAdd className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
        </div>
      ) : (
        <div onClick={handleClick} className="w-full cursor-pointer">
          <NoImages />
        </div>
      )}
    </div>
  );
}

function NoImages() {
  return (
    <div className="relative flex aspect-3/1 w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-50 outline outline-[0.50px] outline-offset-[-0.50px] outline-gray-950 outline-dashed">
      <button className="h-12 w-12 rounded-full bg-zinc-300">
        <IconAdd className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
      </button>
    </div>
  );
}

export default ImagesUploader;
