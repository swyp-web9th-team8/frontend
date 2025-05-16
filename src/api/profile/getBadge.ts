import { requestHandler } from "@/lib/axiosInstance";

export const getBadge = async () => {
  return await requestHandler("get", "/api/users/badges");
};
