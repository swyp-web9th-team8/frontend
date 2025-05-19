"use client";

import TextArea from "@/components/atoms/Input/TextArea";
import InputWithCalendar from "@/components/molecules/input/InputWithCalendar";
import InputWithKaKaoLink from "@/components/molecules/input/InputWithKaKaoLink";
import InputWithLabel from "@/components/molecules/input/InputWithLabel";
import InputWithTimePicker from "@/components/molecules/input/InputWithTimePicker";
import InputWithUnit from "@/components/molecules/input/InputWithUnit";
import { useToast } from "@/components/molecules/toast/ToastContext";
import { DUE_TIME, DUE_TIME_OPTIONS } from "@/constants/createForm";
import { useCreateGathering } from "@/hooks/queries/useCreateGathering";
import { IGatheringFormValues } from "@/types/form";
import { convertKoreanTimeToUTC } from "@/utils/day";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../atoms/Input/Input";
import CreateButton from "../molecules/gatherings/CreateButton";
import InputWithCount from "../molecules/input/InputWithCount";
import InputWithDropdown from "../molecules/input/InputWithDropdown";
import InputWithLocation from "../molecules/input/InputwithLocation";
import GatheringCreateConfirmModal from "../organisms/modal/GatheringCreateConfirmModal";

const TITLE = "title";
const CONTENT = "content";
const DATE_PART = "datePart";
const TIME_PART = "timePart";
const ADDRESS = "address";
const MAX_PARTICIPANTS = "maxParticipants";
const DEAD_LINE = "deadLine";
const OPEN_CHAT_URL = "openChatUrl";

export default function GatheringsCreatePage() {
  const methods = useForm<IGatheringFormValues>({
    mode: "onChange",
  });

  const { handleSubmit, watch } = methods;

  const title = watch(TITLE);
  const content = watch(CONTENT);
  const datePart = watch(DATE_PART);
  const timePart = watch(TIME_PART);
  const address = watch(ADDRESS);
  const maxParticipants = watch(MAX_PARTICIPANTS);
  const deadLine = watch(DEAD_LINE);

  const isActive = !!(
    title &&
    content &&
    datePart &&
    timePart &&
    address &&
    maxParticipants &&
    deadLine
  );

  const { mutateAsync } = useCreateGathering();

  const showToast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [confirmMeetingTime, setConfirmMeetingTime] = useState<string>("");
  const [confirmAddress, setConfirmAddress] = useState<string>("");

  const onSubmit = (data: IGatheringFormValues) => {
    const { datePart, timePart, ...rest } = data;
    const meetingTime = convertKoreanTimeToUTC(datePart, timePart);

    mutateAsync({
      title,
      content: rest.content,
      address: rest.address,
      meetingTime,
      maxParticipants: Number(rest.maxParticipants),
      openChatUrl: rest.openChatUrl || null,
      deadline: DUE_TIME_OPTIONS.find(
        (option) => option.screen === rest.deadLine,
      )?.request as DUE_TIME,
    })
      .then((res) => {
        if (res?.data) {
          setConfirmMeetingTime(res.data.meetingTime);
          setConfirmAddress(res.data.address);
          setIsOpen(true);
        }
      })
      .catch(() => {
        showToast("모임 생성에 실패했어요");
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
            name={TITLE}
            label="모임 제목"
            placeholder="모임 제목을 입력해주세요."
            validationRules={{
              required: true,
            }}
          />
        </InputWithLabel>
        <InputWithLabel label="모임 내용" name={CONTENT}>
          <InputWithCount name={CONTENT}>
            <TextArea
              name={CONTENT}
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
            <InputWithLabel label="모임 날짜" name={DATE_PART}>
              <InputWithCalendar
                name={DATE_PART}
                placeholder="4월 30일(수)"
                validationRules={{
                  required: true,
                }}
              />
            </InputWithLabel>
          </div>
          <div className="w-32">
            <InputWithLabel label="모임 시간" name={TIME_PART}>
              <InputWithTimePicker
                name={TIME_PART}
                placeholder="오후 7:00"
                validationRules={{ required: true }}
              />
            </InputWithLabel>
          </div>
        </div>
        <InputWithLabel label="모임 장소" name={ADDRESS}>
          <InputWithLocation
            name={ADDRESS}
            placeholder="장소를 지정해주세요"
            validationRules={{ required: true }}
          />
        </InputWithLabel>
        <div className="flex gap-[25px]">
          <InputWithLabel
            label="최대인원"
            name={MAX_PARTICIPANTS}
            tooltip="본인 포함 최대인원 수를 적어주세요"
          >
            <InputWithUnit unit="명">
              <Input
                name={MAX_PARTICIPANTS}
                type="number"
                max={10}
                min={1}
                validationRules={{ required: true }}
              />
            </InputWithUnit>
          </InputWithLabel>
          <InputWithLabel label="참여 신청 마감" name={DEAD_LINE}>
            <InputWithDropdown
              name={DEAD_LINE}
              options={DUE_TIME_OPTIONS.map((option) => option.screen)}
              validationRules={{ required: true }}
            />
          </InputWithLabel>
        </div>
        <InputWithLabel label="카카오톡 오픈채팅방 (선택)" name={OPEN_CHAT_URL}>
          <InputWithKaKaoLink
            name={OPEN_CHAT_URL}
            placeholder="오픈채팅방 링크를 공유해주세요."
            rows={6}
          />
        </InputWithLabel>

        <CreateButton
          isActive={isActive}
          message="모임장은 모인 후에 최소 사진 1장을 올려주셔야 해요"
        >
          완료
        </CreateButton>
      </form>
      {isOpen && (
        <GatheringCreateConfirmModal
          meetingTime={confirmMeetingTime}
          address={confirmAddress}
        />
      )}
    </FormProvider>
  );
}
