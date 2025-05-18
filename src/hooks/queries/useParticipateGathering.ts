import {
  leaveGathering,
  participateGathering,
} from "@/api/gatherings/gatherings";
import { useToast } from "@/components/molecules/toast/ToastContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useParticipateGathering = () => {
  const queryClient = useQueryClient();
  const showToast = useToast();

  return useMutation({
    mutationFn: (postId: number) => participateGathering(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetchGatheringList", "useFetchGatheringDetail"],
      });
    },
    onError: () => {
      showToast("모임 참여에 실패했습니다. 다시 시도해주세요.");
    },
  });
};

export const useLeaveCancelGathering = () => {
  const queryClient = useQueryClient();
  const showToast = useToast();

  return useMutation({
    mutationFn: (postId: number) => leaveGathering(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetchGatheringList", "useFetchGatheringDetail"],
      });
    },
    onError: () => {
      showToast("모임 나가기에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
