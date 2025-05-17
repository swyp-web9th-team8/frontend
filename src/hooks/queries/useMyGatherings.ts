import { useQuery } from "@tanstack/react-query";
import {
  MyGatheringItem,
  fetchCreatedGatherings,
  fetchParticipatedGatherings,
} from "@/api/gatherings/myGatherings";

export const useParticipatedGatherings = () => {
  return useQuery<MyGatheringItem[]>({
    queryKey: ["participatedGatherings"],
    queryFn: fetchParticipatedGatherings,
  });
};

export const useCreatedGatherings = () => {
  return useQuery<MyGatheringItem[]>({
    queryKey: ["createdGatherings"],
    queryFn: fetchCreatedGatherings,
  });
};
