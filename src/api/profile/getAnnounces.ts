import { requestHandler } from "@/lib/axiosInstance";

export const getAnnounces = async () => {
  return await requestHandler("get", "/api/announces");
};

export const getAnnounceDetail = async (id: number) => {
  const res = await requestHandler("get", `/api/announces/${id}`);
  return res.data;
};
