"use client";

import { FormProvider, useForm } from "react-hook-form";
import FormInput from "@/components/atoms/Input/FormInput";
import GenderSelect from "@/components/atoms/Input/GenderSelect";
import ProfileImageUploader from "@/components/atoms/Input/ProfileImageUploader";
import RegionSelector from "@/components/molecules/RegionSelector";
import { SignupFormValues } from "@/types/signup";

export default function SignupPage() {
  const methods = useForm<SignupFormValues>();

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
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
              <label className="block text-[1rem] font-medium text-[#1A1A1A]">
                거주 지역
              </label>
              <RegionSelector />
            </div>

            <FormInput
              name="nickname"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
            />
            <ProfileImageUploader />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-[#D1D1D1] px-[7.5rem] py-3 text-white disabled:opacity-50"
          disabled
        >
          다음
        </button>
      </form>
    </FormProvider>
  );
}
