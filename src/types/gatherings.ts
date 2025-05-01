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
