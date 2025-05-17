import { createGathering } from "@/api/gatherings/gatherings";
import { useReConfirmModal } from "@/components/organisms/modal/ReConfirmModalContext";
import { ICreateGatheringRequest } from "@/types/gatherings";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// TODO: 백엔드 postId 달라고 요청
export const useCreateGathering = () => {
  const router = useRouter();
  const { openModal } = useReConfirmModal();
  const { mutate } = useMutation<null, Error, ICreateGatheringRequest>({
    mutationFn: createGathering,
    onSuccess: () => {
      router.push("/home"); // 현재는 /home으로 이동해서 내 모임 생성했는 지 확인할 수 있음
      openModal({
        title: "모임이 생성됐어요",
        showDate: "날짜",
        showIcon: true,
        buttonText: {
          close: "모임 확인하기",
          confirm: "닫기",
        },
        onConfirm: () => {},
      });
    },
    onError: () => {},
  });

  return {
    mutate,
  };
};
