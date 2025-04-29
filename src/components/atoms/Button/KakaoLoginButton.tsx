import KakaoIcon from "@/assets/icons/kakao-icon.svg";
import { getKakaoAuthURL } from "@/api/oauth/kakao";

export default function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    window.location.href = getKakaoAuthURL();
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="flex h-[45px] w-[317px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FEE500] text-sm font-medium text-[#191919] transition"
    >
      <KakaoIcon className="h-6 w-6" />
      <span>카카오 로그인</span>
    </button>
  );
}
