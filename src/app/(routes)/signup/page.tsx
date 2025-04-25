"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormInput from "@/components/atoms/Input/FormInput";
import GenderSelect from "@/components/atoms/Input/GenderSelect";
import ProfileImageUploader from "@/components/atoms/Input/ProfileImageUploader";
import RegionSelector from "@/components/molecules/RegionSelector";
import { SignupFormValues } from "@/types/signup";
import Tooltip from "@/components/atoms/Tooltip/Tooltip";

export default function SignupPage() {
  const router = useRouter();
  const methods = useForm<SignupFormValues>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: SignupFormValues) => {
    console.log("회원가입 데이터:", data);
    router.push("/");
  };

  const gender = watch("gender");
  const region = watch("region");
  const nickname = watch("nickname");

  const isAllRequiredFilled = gender && region && nickname;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        className="flex flex-col gap-[8.5625rem] px-5 py-[4.5rem]"
      >
        <div className="flex flex-col gap-12">
          <h1 className="text-center text-xl font-medium">회원 가입</h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="block text-[1rem] font-medium text-[#1A1A1A]">
                성별
              </label>
              <GenderSelect />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <label className="block text-[1rem] font-medium text-[#1A1A1A]">
                  거주 지역
                </label>
                <Tooltip />
              </div>
              <RegionSelector />
            </div>

            <FormInput
              name="nickname"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              validationRules={{
                required: "닉네임을 입력해주세요",
                maxLength: {
                  value: 10,
                  message: "10자를 초과할 수 없어요",
                },
                validate: {
                  noEmoji: (value) =>
                    !/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu.test(
                      value,
                    ) || "이모티콘은 사용할 수 없어요",
                  noSpecialChar: (value) =>
                    /^[\p{L}0-9]+$/u.test(value) ||
                    "특수문자는 사용할 수 없어요",
                  noWhitespace: (value) =>
                    !/\s/.test(value) || "띄어쓰기(공백)는 사용할 수 없어요",
                },
              }}
            />

            <ProfileImageUploader />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-[#59AC6E] px-[7.5rem] py-3 text-white disabled:bg-[#D1D1D1] disabled:opacity-50"
          disabled={!isValid || !isAllRequiredFilled}
        >
          다음
        </button>
      </form>
    </FormProvider>
  );
}
