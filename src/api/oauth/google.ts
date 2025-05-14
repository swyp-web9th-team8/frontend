export const getGoogleAuthURL = () => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/google`;
};
