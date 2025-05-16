import { requestHandler } from "@/lib/axiosInstance";

export const getUserProfile = async () => {
  const res = await requestHandler("get", "/api/users/profile");
  return res?.data;
};

export const updateNickname = async (nickname: string) => {
  return await requestHandler("post", "/api/users/nickname", { nickname });
};
