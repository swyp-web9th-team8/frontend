export interface IGatheringListValues {
  totalPage: number;
  pageSize: number;
  totalElements: number;
  number: number;
  content: IGatheringItem[];
}

export interface IGatheringItem {
  postId: number;
  title: string;
  meetingTime: string;
  placeName: string;
  address: string;
  participantCount: number;
}

/** 모임 작성 */
export interface ICreateGatheringRequest {
  title: string;
  content: string;
  address: string;
  meetingTime: string;
  openChatUrl: string | undefined | null;
  maxParticipants: number;
}
