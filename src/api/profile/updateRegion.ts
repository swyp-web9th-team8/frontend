import { requestHandler } from "@/lib/axiosInstance";

export const updateRegion = async (region: string) => {
  return await requestHandler("post", "/api/users/region", { region });
};
