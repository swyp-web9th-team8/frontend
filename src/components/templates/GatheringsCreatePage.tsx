"use client";

import TextArea from "@/components/atoms/Input/TextArea";
import InputWithCalendar from "@/components/molecules/input/InputWithCalendar";
import InputWithKaKaoLink from "@/components/molecules/input/InputWithKaKaoLink";
import InputWithLabel from "@/components/molecules/input/InputWithLabel";
import InputWithTimePicker from "@/components/molecules/input/InputWithTimePicker";
import InputWithUnit from "@/components/molecules/input/InputWithUnit";
import { DUE_TIME_OPTIONS } from "@/constants/createForm";
import { IGatheringFormValues } from "@/types/form";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../atoms/Input/Input";
import InputWithCount from "../molecules/input/InputWithCount";
import InputWithDropdown from "../molecules/input/InputWithDropdown";

export default function GatheringsCreatePage() {
  const methods = useForm<IGatheringFormValues>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: IGatheringFormValues) => {
    console.log("모임생성 데이터:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <InputWithLabel label="모임 제목" name="title">
          <Input
            name="title"
            label="모임 제목"
            placeholder="모임 제목을 입력해주세요."
            validationRules={{
              required: "모임 제목을 입력해주세요",
            }}
          />
        </InputWithLabel>
        <InputWithLabel label="모임 내용" name="contents">
          <InputWithCount name="contents">
            <TextArea
              name="contents"
              placeholder="내용을 입력해주세요"
              rows={6}
              validationRules={{
                required: "내용을 입력해주세요",
                maxLength: {
                  value: 150,
                  message: "150자를 초과할 수 없어요",
                },
              }}
            />
          </InputWithCount>
        </InputWithLabel>
        <div className="flex gap-[25px]">
          <div className="w-32">
            <InputWithLabel label="모임 날짜" name="calendarDate">
              <InputWithCalendar
                name="calendarDate"
                placeholder="4월 30일(수)"
              />
            </InputWithLabel>
          </div>
          <div className="w-32">
            <InputWithLabel label="모임 시간" name="startTime">
              <InputWithTimePicker name="startTime" placeholder="오후 7:00" />
            </InputWithLabel>
          </div>
        </div>
        <div className="flex gap-[25px]">
          <InputWithLabel label="최대인원" name="maxParticipants">
            <InputWithUnit unit="명">
              <Input name="maxParticipants" type="number" max={10} min={1} />
            </InputWithUnit>
          </InputWithLabel>
          <InputWithLabel label="참여 신청 마감" name="dueTime">
            <InputWithDropdown name="dueTime" options={DUE_TIME_OPTIONS} />
          </InputWithLabel>
        </div>
        <InputWithLabel label="카카오톡 링크" name="kakaoLink">
          <InputWithKaKaoLink
            name="kakaoLink"
            placeholder="오픈채팅방 링크를 공유해주세요."
            rows={6}
          />
        </InputWithLabel>
        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-[#59AC6E] px-[7.5rem] py-3 text-white disabled:bg-[#D1D1D1] disabled:opacity-50"
          disabled={!isValid}
        >
          완료
        </button>
      </form>
    </FormProvider>
  );
}
