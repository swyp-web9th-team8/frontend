import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "@/lib/axiosInstance";

export const useUpdateProfileImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return httpClient.post("/api/users/profile-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};
