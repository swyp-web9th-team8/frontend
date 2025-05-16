import { fetchCompletedPostId } from "@/api/gatherings/review";
import { useQuery } from "@tanstack/react-query";

export const useFetchCompletedPostId = () => {
  const { data } = useQuery({
    queryKey: ["fetchCompletedPostId"],
    queryFn: fetchCompletedPostId,
  });

  return {
    reviewOpen: !!data?.data?.length,
    reviewId: data?.data?.[0],
  };
};
