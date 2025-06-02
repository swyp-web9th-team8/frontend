import { requestHandler } from "@/lib/axiosInstance";

export const withdrawUser = async () => {
  return await requestHandler("post", "/api/auth/withdraw");
};
