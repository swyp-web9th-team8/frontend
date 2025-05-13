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
  const url = `/auth/${provider}`;
  const payload = { code };

  return await requestHandler("post", url, payload);
};
