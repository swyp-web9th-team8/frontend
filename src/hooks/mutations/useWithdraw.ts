import { useMutation } from "@tanstack/react-query";
import { withdrawUser } from "@/api/auth/withdraw";

export const useWithdraw = (onSuccess?: () => void, onError?: () => void) => {
  return useMutation({
    mutationFn: withdrawUser,
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
    onError: () => {
      if (onError) onError();
    },
  });
};
