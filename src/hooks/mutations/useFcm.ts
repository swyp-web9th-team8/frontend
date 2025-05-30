import { postFcmToken } from "@/api/fcm/fcm";
import { useMutation } from "@tanstack/react-query";

export const usePostFcmToken = () => {
  return useMutation({
    mutationFn: (token: string) => postFcmToken(token),
    onError: (error) => {
      console.log("토큰 전송 실패 확인", error);
    },
  });
};
