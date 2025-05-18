import { createGathering } from "@/api/gatherings/gatherings";
import {
  ICreateGatheringRequest,
  ICreateGatheringResponse,
} from "@/types/gatherings";
import { useMutation } from "@tanstack/react-query";

// TODO: 백엔드 postId 달라고 요청
export const useCreateGathering = () => {
  return useMutation<ICreateGatheringResponse, Error, ICreateGatheringRequest>({
    mutationFn: createGathering,
    onError: () => {},
  });
};
