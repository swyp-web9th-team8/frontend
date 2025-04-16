// TODO: 백엔드에서 제공하는 REST_API_KEY로 교체
const KAKAO_REST_API_KEY = "카카오_REST_API_KEY"; // ex) process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback"; // 백엔드와 반드시 일치해야 함

export const getKakaoAuthURL = () => {
  const baseUrl = "https://kauth.kakao.com/oauth/authorize";
  const config = {
    client_id: KAKAO_REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
  };
  return `${baseUrl}?${new URLSearchParams(config).toString()}`;
};
