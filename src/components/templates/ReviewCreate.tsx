"use client";

import ImagesUploader from "@/components/atoms/Input/ImagesUploader";
import ReviewCreateItemWithLabel from "@/components/molecules/review/ReviewCreateItemWithLabel";
import { reviewCreateInfo } from "@/data/review";
import { ICreateFormValues } from "@/types/form";
import { FormProvider, useForm } from "react-hook-form";
import ReviewSummaryCard from "../molecules/review/ReviewSummaryCard";
import AttendanceManager from "../organisms/review/AttendanceManager";
import ReviewCreateButton from "../organisms/review/ReviewCreateButton";

function ReviewCreate() {
  const methods = useForm<ICreateFormValues>({
    mode: "onChange",
    defaultValues: {
      images: [],
      attendance: [],
    },
  });

  const { handleSubmit, watch } = methods;

  const watchImages = watch("images");

  const onSubmit = (data: ICreateFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="font-gsans-medium flex flex-1 flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ReviewCreateItemWithLabel label="완료된 모임">
          <ReviewSummaryCard
            title={reviewCreateInfo.title}
            meetingTime={reviewCreateInfo.meetingTime}
            placeName={reviewCreateInfo.placeName}
          />
        </ReviewCreateItemWithLabel>
        <ReviewCreateItemWithLabel label="출석 체크">
          <AttendanceManager
            name="attendance"
            allMembers={reviewCreateInfo.allMembers}
          />
        </ReviewCreateItemWithLabel>
        <ReviewCreateItemWithLabel label="모임 사진을 1장 이상 올려주세요">
          <ImagesUploader
            name="images"
            validationRules={{
              validate: (value: File[]) =>
                value?.length > 0 || "최소 1장의 이미지를 업로드해주세요",
            }}
          />
        </ReviewCreateItemWithLabel>
        <div className="mt-auto mb-[31px] flex flex-col gap-4">
          <ReviewCreateButton isActive={watchImages.length > 0} />
        </div>
      </form>
    </FormProvider>
  );
}

export default ReviewCreate;
