export type RankingType = "WEEKLY" | "ALL";

export interface IRankingRequest {
  type?: RankingType;
}

export interface IRankingResponse {
  data: IRankingResponseDataItem[];
}

export interface IRankingResponseDataItem {
  userId: number;
  nickname: string;
  profileImageDir: string;
  totalMeet: number;
  ranking: number;
}
