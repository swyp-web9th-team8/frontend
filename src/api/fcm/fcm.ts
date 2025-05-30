import { requestHandler } from "@/lib/axiosInstance";

export const postFcmToken = async (token: string) => {
  return requestHandler("post", "/api/users/fcm", token);
};
