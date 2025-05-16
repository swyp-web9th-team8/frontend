import { requestHandler } from "@/lib/axiosInstance";
import { ICreateGatheringRequest } from "@/types/gatherings";

export const createGathering = async (payload: ICreateGatheringRequest) => {
  return await requestHandler("post", "/api/post/create", payload);
};
