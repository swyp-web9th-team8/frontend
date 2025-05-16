import { requestHandler } from "@/lib/axiosInstance";

export const getMyProfile = async () => {
  return await requestHandler("get", `/api/auth/me`);
};
