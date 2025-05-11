"use client";

import { useFormContext } from "react-hook-form";
import Header from "@/components/organisms/Header";
import FormInput from "@/components/atoms/Input/FormInput";
import IconClose from "@/assets/icons/IconClose.svg";

interface EditNicknameTemplateProps {
  onSubmit: () => void;
  onClear: () => void;
}

export default function EditNicknameTemplate({
  onSubmit,
  onClear,
}: EditNicknameTemplateProps) {
  const {
    watch,
    formState: { isValid },
  } = useFormContext();

  const nickname = watch("nickname");

  return (
    <div className="h-full w-full">
      <Header title="닉네임 변경" backButton />

      <form
        onSubmit={onSubmit}
        className="flex h-full w-full flex-col justify-between pb-10"
      >
        <div className="relative">
          <label className="text-body1-medium font-gsans-medium text-grey-950 mb-2 block">
            새로운 닉네임을 입력해주세요
          </label>
          <FormInput
            name="nickname"
            placeholder="닉네임"
            validationRules={{
              required: "닉네임을 입력해주세요",
              minLength: { value: 2, message: "2자 이상 입력해주세요" },
            }}
          />

          {nickname && (
            <button
              type="button"
              onClick={onClear}
              className="bg-grey-200 absolute top-14 right-3 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full"
            >
              <IconClose className="text-grey-0 h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`text-body2-medium font-gsans-medium mt-6 w-full rounded-xl py-3 ${
            isValid ? "bg-green text-white" : "bg-grey-200 text-grey-400"
          }`}
        >
          확인
        </button>
      </form>
    </div>
  );
}
