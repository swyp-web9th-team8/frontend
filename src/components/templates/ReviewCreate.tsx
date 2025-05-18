"use client";

import ImagesUploader from "@/components/atoms/Input/ImagesUploader";
import ReviewCreateItemWithLabel from "@/components/molecules/review/ReviewCreateItemWithLabel";
import { usePostReview } from "@/hooks/mutations/useReview";
import { useFetchGatheringDetail } from "@/hooks/queries/useFetchGatheringDetail";
import { ICreateFormValues } from "@/types/form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReviewSummaryCard from "../molecules/review/ReviewSummaryCard";
import AttendanceManager from "../organisms/review/AttendanceManager";
import ReviewCreateButton from "../organisms/review/ReviewCreateButton";

function ReviewCreate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewCreateContent />
    </Suspense>
  );
}

function ReviewCreateContent() {
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  const methods = useForm<ICreateFormValues>({
    mode: "onChange",
    defaultValues: {
      images: [],
      nicknames: "",
    },
  });

  const { handleSubmit, watch } = methods;
  const watchImages = watch("images");

  const { mutate: postReview } = usePostReview();
  const { data } = useFetchGatheringDetail(Number(postId));

  const participants = data?.participants || [];

  const onSubmit = (data: ICreateFormValues) => {
    const nicknamesArray = data.nicknames.split(", ");

    const userIds = nicknamesArray
      .map((nickname) => participants.find((p) => p.nickname === nickname)?.id)
      .filter((id) => id !== undefined);

    postReview({
      postId: Number(postId),
      files: data.images,
      userIds,
    });
  };

  if (!data) return <div>Loading...</div>;

  return (
    <FormProvider {...methods}>
      <form
        className="font-gsans-medium flex flex-1 flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ReviewCreateItemWithLabel label="완료된 모임">
          <ReviewSummaryCard data={data} />
        </ReviewCreateItemWithLabel>
        <ReviewCreateItemWithLabel label="출석 체크">
          <AttendanceManager name="nicknames" allMembers={participants} />
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
