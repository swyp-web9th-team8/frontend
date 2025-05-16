import { requestHandler } from "@/lib/axiosInstance";

export const fetchCompletedPostId = async () => {
  return await requestHandler("get", "api/users/completed-post-ids");
};
