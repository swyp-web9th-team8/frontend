import { requestHandler } from "@/lib/axiosInstance";

export interface MyGatheringItem {
  id: number;
  title: string;
  placeName: string | null;
  meetingDt: string;
  completed: boolean;
}

export interface ParticipatedGatheringResponse {
  content: MyGatheringItem[];
  page: number;
  totalPages: number;
}

export const fetchParticipatedGatherings = async (params: {
  page: number;
  size: number;
}): Promise<ParticipatedGatheringResponse> => {
  try {
    const query = `?page=${params.page}&size=${params.size}`;
    const response = await requestHandler<ParticipatedGatheringResponse>(
      "get",
      `/api/users/participated-posts${query}`,
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch participated gatherings:", error);
    return { content: [], page: 0, totalPages: 0 };
  }
};

export interface CreatedGatheringResponse {
  content: MyGatheringItem[];
  page: number;
  totalPages: number;
  // 기타 필요한 필드 추가 가능
}

export const fetchCreatedGatherings = async (params: {
  page: number;
  size: number;
}): Promise<CreatedGatheringResponse> => {
  try {
    const query = `?page=${params.page}&size=${params.size}`;
    const response = await requestHandler<CreatedGatheringResponse>(
      "get",
      `/api/users/created-posts${query}`,
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch created gatherings:", error);
    return { content: [], page: 0, totalPages: 0 };
  }
};
