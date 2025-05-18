import { requestHandler } from "@/lib/axiosInstance";

export const getDistricts = async () => {
  const res = await requestHandler("get", "/api/regions/districts");
  return res.districts as string[];
};

export const getNeighborhoods = async (district: string) => {
  const res = await requestHandler(
    "get",
    `/api/regions/neighborhoods?district=${encodeURIComponent(district)}`,
  );
  return res.neighborhoods as string[];
};

export const reverseGeocode = async (latitude: number, longitude: number) => {
  const query = `?latitude=${latitude}&longitude=${longitude}`;
  return await requestHandler("get", `/api/location/reverse-geocode${query}`);
};
