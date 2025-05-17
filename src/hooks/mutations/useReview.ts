import { postReview } from "@/api/gatherings/review";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostReview = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: ({
      postId,
      files,
      userIds,
    }: {
      postId: number;
      files: File[];
      userIds: number[];
    }) => postReview(postId, files, userIds),
    onSuccess: () => {
      router.push("/home");
    },
    onError: () => {},
  });
};
