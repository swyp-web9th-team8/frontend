import { requestHandler } from "@/lib/axiosInstance";

export const getMyProfile = async () => {
  const response = await requestHandler("get", `/api/auth/me`);
  return response.data;
};
