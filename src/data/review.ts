import { IReviewCreateResponse } from "@/types/review";

export const reviewCreateInfo: IReviewCreateResponse = {
  reviewId: 1,
  title: "중앙공원 플로깅",
  meetingTime: "2025-05-10T11:11:11",
  placeName: "중랑천",
  allMembers: [
    { id: 1, nickname: "화난라이언", imageUrl: null },
    { id: 2, nickname: "신난라이언", imageUrl: "https://placehold.co/48x48" },
    { id: 3, nickname: "이쁜라이언", imageUrl: "https://placehold.co/48x48" },
    { id: 4, nickname: "행복한라이언", imageUrl: "https://placehold.co/48x48" },
    { id: 5, nickname: "하주영", imageUrl: "https://placehold.co/48x48" },
  ],
};
