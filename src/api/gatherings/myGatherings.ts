import { requestHandler } from "@/lib/axiosInstance";

export interface MyGatheringItem {
  id: number;
  title: string;
  placeName: string | null;
  meetingDt: string;
  completed: boolean;
}

interface ParticipateGatheringsResponse {
  statusCode: string;
  message: string;
  content: MyGatheringItem[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  timestamp: string;
}

export const fetchParticipatedGatherings = async (): Promise<
  MyGatheringItem[]
> => {
  try {
    const response = await requestHandler<ParticipateGatheringsResponse>(
      "get",
      "/api/users/participated-posts",
    );
    return response?.content || [];
  } catch (error) {
    console.error("Failed to fetch participated gatherings:", error);
    return [];
  }
};

export const fetchCreatedGatherings = async (): Promise<MyGatheringItem[]> => {
  try {
    const response = await requestHandler<ParticipateGatheringsResponse>(
      "get",
      "/api/users/created-posts",
    );
    return response?.content || [];
  } catch (error) {
    console.error("Failed to fetch created gatherings:", error);
    return [];
  }
};
