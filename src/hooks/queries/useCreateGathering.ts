import { createGathering } from "@/api/gatherings/gatherings";
import { ICreateGatheringRequest } from "@/types/gatherings";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// TODO: 백엔드 postId 달라고 요청
export const useCreateGathering = () => {
  const router = useRouter();
  const { mutate } = useMutation<null, Error, ICreateGatheringRequest>({
    mutationFn: createGathering,
    onSuccess: () => {
      router.push("/home"); // 현재는 /home으로 이동해서 내 모임 생성했는 지 확인할 수 있음
    },
    onError: () => {},
  });

  return {
    mutate,
  };
};
