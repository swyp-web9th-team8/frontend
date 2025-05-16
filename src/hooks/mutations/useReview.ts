import { postReview } from "@/api/gatherings/review";
import { useMutation } from "@tanstack/react-query";

export const usePostReview = () => {
  return useMutation({
    mutationFn: ({
      postId,
      files,
      participantIds,
    }: {
      postId: number;
      files: File[];
      participantIds: number[];
    }) => postReview(postId, files, participantIds),
    onSuccess: (data) => {
      console.log("✅", data);
    },
    onError: (error) => {
      console.error("❌", error);
    },
  });
};
