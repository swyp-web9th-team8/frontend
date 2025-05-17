export interface IGatheringListValues {
  totalPage: number;
  pageSize: number;
  totalElements: number;
  number: number;
  content: IGatheringItem[];
}

export interface IGatheringItem {
  id: number;
  title: string;
  meetingTime: string;
  placeId: string | null;
  placeName: string | null;
  address: string;
  participantCount: number;
  participants: IParticipant[];
  thumbnail: string | null;
  latitude: number;
  longitude: number;
  maxParticipants: number;
  iin: boolean;
}

/** 모임 작성 */
export interface ICreateGatheringRequest {
  title: string;
  content: string;
  address: string;
  meetingTime: string;
  openChatUrl: string | undefined | null;
  maxParticipants: number;
  deadline?: 60 | 30;
}

export interface IFetchGatheringListRequest {
  pos?: string;
  page: number;
  size: number;
  sort?: string[];
  v?: string;
}

export interface IParticipant {
  id: number;
  nickname: string;
  profileImage: string | undefined;
}

export interface IFetchOngoingGatheringContent {
  id: number;
  title: string;
  meetingTime: string;
  placeId: string;
  placeName: string;
  address: string;
  participantCount: number;
  participants: IParticipant[];
}

export interface IFetchGatheringListResponse {
  content: IGatheringItem[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  timestamp: string;
}

export interface IFetchGatheringDetailResponse {
  data: {
    id: number;
    title: string;
    content: string;
    writer: IParticipant;
    address: string;
    meetingTime: string;
    openChatUrl: string;
    maxParticipants: number;
    deadLine: string;
    participants: IParticipant[];
    imageUrls?: string[];
    iin: boolean; // 작성자이거나 참여자일 때
  };
}

export interface IFetchGatheringCompletedListResponse {
  content: IFetchGatheringCompletedLisContent[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  timestamp: string;
}

export interface IFetchGatheringCompletedLisContent {
  id: number;
  title: string;
  meetingTime: string;
  placeName: string;
  address: string;
  participantCount: number;
  participants: IParticipant[];
  thumnail: string;
  latitiude: number;
  longtitude: number;
  maxParticipants: number;
  inn: boolean;
}
