"use client";

import ImagesUploader from "@/components/atoms/Input/ImagesUploader";
import ReviewCreateItemWithLabel from "@/components/molecules/review/ReviewCreateItemWithLabel";
import { ICreateFormValues } from "@/types/form";
import { FormProvider, useForm } from "react-hook-form";
import ReviewSummaryCard from "../molecules/review/ReviewSummaryCard";
import AttendanceManager from "../organisms/review/AttendanceManager";

function ReviewCreate() {
  const methods = useForm<ICreateFormValues>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: {},
  } = methods;

  const onSubmit = (data: ICreateFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="font-gsans-medium flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ReviewCreateItemWithLabel label="완료된 모임">
          <ReviewSummaryCard />
        </ReviewCreateItemWithLabel>
        <ReviewCreateItemWithLabel label="출석 체크">
          <AttendanceManager name="attendance" />
        </ReviewCreateItemWithLabel>
        <ReviewCreateItemWithLabel label="모임 사진을 1장 이상 올려주세요">
          <ImagesUploader name="images" />
        </ReviewCreateItemWithLabel>
      </form>
    </FormProvider>
  );
}

export default ReviewCreate;
