import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNickname } from "@/api/profile/getUserProfile";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/useUserStore";

export const useUpdateNickname = () => {
  const router = useRouter();
  const { setProfile } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNickname,
    onSuccess: (updatedProfile) => {
      setProfile(updatedProfile);

      queryClient.invalidateQueries({ queryKey: ["userProfile"] });

      router.push("/profile/edit");
    },
    onError: (err) => {
      console.error("닉네임 변경 실패:", err);
      alert("닉네임 변경에 실패했어요.");
    },
  });
};
