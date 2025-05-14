export const getKakaoAuthURL = () => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`;
};
