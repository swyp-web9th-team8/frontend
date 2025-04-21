const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_REDIRECT_URI}/auth/google/callback`; // 백엔드와 반드시 일치해야 함
const SCOPE = "openid email profile";

export const getGoogleAuthURL = () => {
  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const config: Record<string, string> = {
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline", //  refresh_token을 발급받기 위한 설정
    prompt: "consent", //  계정 선택 창을 항상 표시
  };

  return `${baseUrl}?${new URLSearchParams(config).toString()}`;
};
