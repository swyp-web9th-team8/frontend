import { useMutation } from "@tanstack/react-query";
import { loginWithOauthCode } from "@/api/oauth/loginWithOauthCode";
import { useAuthStore } from "@/stores/useAuthStore";

export const useOauthLogin = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: ({ provider, code }: { provider: "kakao"; code: string }) =>
      loginWithOauthCode(provider, code),
    onSuccess: () => {
      login(); // 백엔드 응답 구조와 상관없이 로그인 상태만 설정
    },
  });
};
