import { requestHandler } from "@/lib/axiosInstance";

export const fetchCompletedPostId = async () => {
  return await requestHandler("get", "api/users/completed-post-ids");
};

const postReviewImage = async (postId: number, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return await requestHandler("post", `/api/post/${postId}/image`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
};

/** 리뷰 이미지들 보내는 요청 */
export const postReviewImages = async (postId: number, files: File[]) => {
  const uploadPromises = files.map((file) => postReviewImage(postId, file));
  return Promise.all(uploadPromises);
};

export const postReview = async (
  postId: number,
  files: File[],
  participantIds: number[],
) => {
  const uploadPromises = files.map((file) => postReviewImage(postId, file));
  const participantsPromise = await requestHandler(
    "post",
    `/api/post${postId}/certificate`,
    participantIds,
  );
  return Promise.all([...uploadPromises, ...participantsPromise]);
};
