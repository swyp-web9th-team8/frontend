import { fetchCompletedPostId } from "@/api/gatherings/review";
import { useQuery } from "@tanstack/react-query";

export const useFetchCompletedPostId = () => {
  const { data, isError } = useQuery({
    queryKey: ["fetchCompletedPostId"],
    queryFn: fetchCompletedPostId,
  });

  return { data, isError };
};
