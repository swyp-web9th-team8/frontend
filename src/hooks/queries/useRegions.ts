import {
  getDistricts,
  getNeighborhoods,
  reverseGeocode,
} from "@/api/region/regions";
import { IReverseGeocode } from "@/types/region";
import { useQuery } from "@tanstack/react-query";

export const useDistricts = () => {
  return useQuery({
    queryKey: ["regions", "districts"],
    queryFn: getDistricts,
  });
};

export const useNeighborhoods = (district: string, enabled = true) => {
  return useQuery({
    queryKey: ["regions", "neighborhoods", district],
    queryFn: () => getNeighborhoods(district),
    enabled,
  });
};

export const useReverseGeocode = (
  latitude: number | undefined,
  longitude: number | undefined,
) => {
  const { refetch } = useQuery<IReverseGeocode>({
    queryKey: ["reverseGeocode", latitude, longitude],
    queryFn: () => {
      if (latitude === undefined || longitude === undefined) {
        return Promise.reject(new Error("위도 또는 경도가 없습니다."));
      }
      return reverseGeocode(latitude, longitude);
    },
    enabled: latitude !== undefined && longitude !== undefined,
  });

  return {
    refetch,
  };
};
