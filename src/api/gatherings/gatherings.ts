import { requestHandler } from "@/lib/axiosInstance";
import {
  ICreateGatheringRequest,
  IFetchGatheringListRequest,
} from "@/types/gatherings";

export const createGathering = async (payload: ICreateGatheringRequest) => {
  return await requestHandler("post", "/api/post/create", payload);
};

export const fetchOngoingGatheringList = async (
  payload: IFetchGatheringListRequest,
) => {
  // TODO: 백엔드 v 파라미터 선택값으로 수정된 후 v 삭제
  const query = `?pos=${payload.pos}&page=${payload.page}&size=${payload.size}&v=${payload.v}`;
  return await requestHandler("get", `/api/post/list/ing${query}`);
};

export const fetchClosedgatheringList = async (
  payload: IFetchGatheringListRequest,
) => {
  const query = `?pos=${payload.pos}&page=${payload.page}&size=${payload.size}`;
  return await requestHandler("get", `/api/post/list/rec${query}`);
};

export const fetchCompletedGatheringList = async (
  payload: IFetchGatheringListRequest,
) => {
  const query = `?page=${payload.page}&size=${payload.size}`;
  return await requestHandler("get", `/api/post/list/com${query}`);
};

export const fetchGatheringDetail = async (postId: number) => {
  return await requestHandler("get", `/api/post/${postId}`);
};

export const participateGathering = async (postId: number) => {
  return await requestHandler("post", `/api/post/${postId}/participate`);
};

export const leaveGathering = async (postId: number) => {
  return await requestHandler("post", `/api/post/${postId}/leave`);
};
