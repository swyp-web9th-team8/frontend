import { requestHandler } from "@/lib/axiosInstance";

interface OAuthLoginResponse {
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

export const loginWithOauthCode = async (
  provider: "kakao" | "google",
  code: string,
): Promise<OAuthLoginResponse> => {
  const isGoogle = provider === "google";

  const url = isGoogle
    ? `/api/auth/google/callback?code=${encodeURIComponent(code)}`
    : `/auth/kakao`;

  const method = isGoogle ? "get" : "post";
  const payload = isGoogle ? undefined : { code };

  return await requestHandler(method, url, payload);
};
