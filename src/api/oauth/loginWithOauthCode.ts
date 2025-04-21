import { requestHandler } from "@/lib/axiosInstance";

export const loginWithOauthCode = async (
  provider: "kakao" | "google",
  code: string,
) => {
  const url = `/auth/${provider}`; // TODO: 백엔드 엔드포인트 확정 시 수정
  const payload = { code };

  return await requestHandler("post", url, payload);
};
