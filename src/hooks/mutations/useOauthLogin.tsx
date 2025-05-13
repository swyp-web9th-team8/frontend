import { useMutation } from "@tanstack/react-query";
import { loginWithOauthCode } from "@/api/oauth/loginWithOauthCode";
import { useAuthStore } from "@/stores/useAuthStore";

interface LoginResponse {
  user: {
    id: number;
    email: string;
    nickname: string;
    provider: "GOOGLE" | "KAKAO";
    registered: boolean;
  };
  accessToken: string;
  refreshToken: string;
}

export const useOauthLogin = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: ({
      provider,
      code,
    }: {
      provider: "kakao" | "google";
      code: string;
    }) => loginWithOauthCode(provider, code),

    onSuccess: (data: LoginResponse) => {
      const { user, accessToken, refreshToken } = data;

      login({
        user: {
          id: user.id,
          email: user.email,
          nickname: user.nickname,
          provider: user.provider,
        },
        accessToken,
        refreshToken,
      });
    },
  });
};
