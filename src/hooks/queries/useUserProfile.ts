import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/api/profile/getUserProfile";
import { UserProfile } from "@/types/userProfile";

export const useUserProfile = () => {
  return useQuery<UserProfile>({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5,
  });
};
