"use client";

import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import BackArrow from "@/assets/icons/back-arrow.svg";
import ProfileImageUploader from "@/components/atoms/Input/ProfileImageUploader";
import RegionSelectorForm from "@/components/molecules/RegionSelectorForm";
import FormInput from "@/components/atoms/Input/FormInput";
import GenderSelect from "@/components/atoms/Input/GenderSelect";
import Tooltip from "@/components/atoms/Tooltip/Tooltip";
import SubmitButton from "@/components/atoms/Button/SubmitButton";
import { useSignup } from "@/hooks/queries/useSignup";
import { SignupFormValues } from "@/types/signup";

export default function SignupForm() {
  const {
    handleSubmit,
    watch,
    formState: { isValid },
  } = useFormContext<SignupFormValues>();

  const router = useRouter();
  const { handleSubmitSignup } = useSignup();

  const gender = watch("gender");
  const region = watch("region");
  const nickname = watch("nickname");

  const isAllRequiredFilled = gender && region && nickname;

  return (
    <form
      onSubmit={handleSubmit(handleSubmitSignup)}
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      className="flex flex-col gap-[8.5625rem] py-[4.5rem]"
    >
      <div className="flex flex-col gap-12">
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={() => router.push("/login")}
            aria-label="뒤로가기"
            className="absolute left-0 cursor-pointer"
          >
            <BackArrow />
          </button>
          <h1 className="text-grey-950 text-heading1-medium font-gsans-medium text-center">
            회원 가입
          </h1>
        </div>

        <ProfileImageUploader />

        <div className="flex flex-col gap-[1.875rem]">
          <div className="flex flex-col gap-2">
            <label className="text-grey-950 font-gsans-medium text-body1-medium block">
              성별
            </label>
            <GenderSelect />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <label className="text-grey-950 font-gsans-medium text-body1-medium block">
                거주 지역
              </label>
              <Tooltip text="현재는 서울에서만 서비스 이용이 가능해요" />
            </div>
            <RegionSelectorForm />
          </div>

          <FormInput
            name="nickname"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            validationRules={{
              required: "닉네임을 입력해주세요",
              maxLength: { value: 10, message: "10자를 초과할 수 없어요" },
              validate: {
                noEmoji: (value) =>
                  !/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu.test(
                    value,
                  ) || "이모티콘은 사용할 수 없어요",
                noSpecialChar: (value) =>
                  /^[\p{L}0-9]+$/u.test(value) || "특수문자는 사용할 수 없어요",
                noWhitespace: (value) =>
                  !/\s/.test(value) || "띄어쓰기는 사용할 수 없어요",
              },
            }}
          />
        </div>
      </div>

      <SubmitButton disabled={!isValid || !isAllRequiredFilled} label="다음" />
    </form>
  );
}
