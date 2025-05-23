import { createGathering } from "@/api/gatherings/gatherings";
import { useToast } from "@/components/molecules/toast/ToastContext";
import { ERROR_MESSAGES } from "@/constants/errorMessage";
import {
  ICreateGatheringRequest,
  ICreateGatheringResponse,
} from "@/types/gatherings";
import { useMutation } from "@tanstack/react-query";

// TODO: 백엔드 postId 달라고 요청
export const useCreateGathering = () => {
  const showToast = useToast();
  return useMutation<ICreateGatheringResponse, Error, ICreateGatheringRequest>({
    mutationFn: createGathering,
    onSuccess: (res) => {
      if (
        res.statusCode === "BAD_REQUEST" &&
        res.message === ERROR_MESSAGES.NOT_SATISFIED_LOCATION_PARAMETER
      ) {
        showToast("주소 형식이 올바르지 않습니다");
        return;
      }
    },
  });
};
