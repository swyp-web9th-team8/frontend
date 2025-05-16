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
import CreateButton from "../molecules/gatherings/CreateButton";
import InputWithCount from "../molecules/input/InputWithCount";
import InputWithDropdown from "../molecules/input/InputWithDropdown";
import InputWithLocation from "../molecules/input/InputwithLocation";

import { useCreateGathering } from "@/hooks/queries/useCreateGathering";
import { convertKoreanTimeToUTC } from "@/utils/day";

export default function GatheringsCreatePage() {
  const methods = useForm<IGatheringFormValues>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
    watch,
  } = methods;

  const title = watch("title");
  const contents = watch("contents");
  const calendarDate = watch("calendarDate");
  const startTime = watch("startTime");
  const location = watch("location");
  const maxParticipants = watch("maxParticipants");
  const dueTime = watch("dueTime");

  const isActive = !!(
    title &&
    contents &&
    calendarDate &&
    startTime &&
    location &&
    maxParticipants &&
    dueTime
  );

  const { mutate } = useCreateGathering();

  const onSubmit = (data: IGatheringFormValues) => {
    const {
      title,
      contents,
      location,
      calendarDate,
      startTime,
      maxParticipants,
      kakaoLink,
    } = data;
    const meetingTime = convertKoreanTimeToUTC(calendarDate + " " + startTime);
    console.log("meetingTime", meetingTime);

    mutate({
      title,
      content: contents,
      address: location,
      meetingTime,
      maxParticipants,
      openChatUrl: kakaoLink || null,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-[31px] flex flex-1 flex-col gap-6"
      >
        <InputWithLabel label="모임 제목" name="title">
          <Input
            name="title"
            label="모임 제목"
            placeholder="모임 제목을 입력해주세요."
            validationRules={{
              required: true,
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
                required: true,
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
                validationRules={{
                  required: true,
                }}
              />
            </InputWithLabel>
          </div>
          <div className="w-32">
            <InputWithLabel label="모임 시간" name="startTime">
              <InputWithTimePicker
                name="startTime"
                placeholder="오후 7:00"
                validationRules={{ required: true }}
              />
            </InputWithLabel>
          </div>
        </div>
        <InputWithLabel label="모임 장소" name="location">
          <InputWithLocation
            name="location"
            placeholder="장소를 지정해주세요"
            validationRules={{ required: true }}
          />
        </InputWithLabel>
        <div className="flex gap-[25px]">
          <InputWithLabel
            label="최대인원"
            name="maxParticipants"
            tooltip="본인 포함 최대인원 수를 적어주세요"
          >
            <InputWithUnit unit="명">
              <Input
                name="maxParticipants"
                type="number"
                max={10}
                min={1}
                validationRules={{ required: true }}
              />
            </InputWithUnit>
          </InputWithLabel>
          <InputWithLabel label="참여 신청 마감" name="dueTime">
            <InputWithDropdown
              name="dueTime"
              options={DUE_TIME_OPTIONS}
              validationRules={{ required: true }}
            />
          </InputWithLabel>
        </div>
        <InputWithLabel label="카카오톡 링크" name="kakaoLink">
          <InputWithKaKaoLink
            name="kakaoLink"
            placeholder="오픈채팅방 링크를 공유해주세요."
            rows={6}
          />
        </InputWithLabel>

        <CreateButton
          isActive={isActive && isValid}
          message="모임장은 모인 후에 최소 사진 1장을 올려주셔야 해요"
        >
          완료
        </CreateButton>
      </form>
    </FormProvider>
  );
}
