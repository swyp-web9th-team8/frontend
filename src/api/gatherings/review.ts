import { requestHandler } from "@/lib/axiosInstance";

export const fetchCompletedPostId = async () => {
  return await requestHandler("get", "api/users/completed-post-ids");
};

const postReviewImages = async (postId: number, files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append(`files`, file);
  });

  return await requestHandler("post", `/api/post/${postId}/image`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
};

export const postReview = async (
  postId: number,
  files: File[],
  userIds: number[],
) => {
  const uploadPromises = await postReviewImages(postId, files);
  const participantsPromise = await requestHandler(
    "post",
    `/api/post/${postId}/certificate`,
    { userIds },
  );
  return Promise.all([uploadPromises, participantsPromise]);
};
