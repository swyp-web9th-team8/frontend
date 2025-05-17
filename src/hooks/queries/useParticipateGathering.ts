import { participateGathering } from "@/api/gatherings/gatherings";
import { useToast } from "@/components/molecules/toast/ToastContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useParticipateGathering = () => {
  const queryClient = useQueryClient();
  const showToast = useToast();

  return useMutation({
    mutationFn: (postId: number) => participateGathering(postId),
    onSuccess: () => {
      showToast("모임 참여가 완료되었습니다!");
      // 모임 목록 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ["fetchGatheringList"] });
    },
    onError: () => {
      showToast("모임 참여에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
