import axios from "axios";

export const getMyProfile = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/me`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};
