import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRegion } from "@/api/profile/updateRegion";
import { useRegionStore } from "@/stores/useRegionStore";
import { useRouter } from "next/navigation";

export const useUpdateRegion = () => {
  const setRegion = useRegionStore((state) => state.setRegion);
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: updateRegion,
    onSuccess: async (_, region) => {
      setRegion(region);
      await queryClient.invalidateQueries({ queryKey: ["userprofile"] });
      router.push("/profile");
    },
    onError: () => {
      alert("지역 설정에 실패했어요.");
    },
  });
};
