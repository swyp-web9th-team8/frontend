export interface IReviewCreateResponse {
  reviewId: number;
  title: string;
  meetingTime: string;
  placeName: string;
  allMembers: IAttendanceMember[];
}

export interface IAttendanceMember {
  id: number;
  nickname: string;
  imageUrl: string | null;
}

export interface IReviewCreateRequest {
  reviewId: number;
  attendeeIds: number[];
  placeName: string;
  files: File[];
}
