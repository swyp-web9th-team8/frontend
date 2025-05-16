const DEV_MODE = process.env.NODE_ENV === "development";

export const getGoogleAuthURL = () => {
  const BASE_URL = DEV_MODE
    ? "http://localhost:8080"
    : process.env.NEXT_PUBLIC_SERVER_URL;

  return `${BASE_URL}/oauth2/authorization/google`;
};
