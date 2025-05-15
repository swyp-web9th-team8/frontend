import { useQuery } from "@tanstack/react-query";
import { getDistricts, getNeighborhoods } from "@/api/region/regions";

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
