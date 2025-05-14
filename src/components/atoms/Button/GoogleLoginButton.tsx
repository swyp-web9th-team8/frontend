// import GoogleLogo from "@/assets/icons/google.svg";
// import { getGoogleAuthURL } from "@/api/oauth/google";

// export default function GoogleLoginButton() {
//   const handleGoogleLogin = () => {
//     window.location.href = getGoogleAuthURL();
//   };
//   return (
//     <button
//       onClick={handleGoogleLogin}
//       className="border-grey-300 bg-grey-0 relative flex h-12 w-[19.8125rem] cursor-pointer items-center justify-center rounded-xl border-[0.8px] transition-all"
//     >
//       <GoogleLogo className="mr-3 h-5 w-5" />
//       <p className="font-['Roboto'] text-sm font-medium text-[#1f1f1f]">
//         구글 계정으로 로그인
//       </p>
//     </button>
//   );
// }

// components/atoms/Button/GoogleLoginButton.tsx

"use client";

import GoogleLogo from "@/assets/icons/google.svg";
import axios from "axios";

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/google`,
      );

      const { redirectUrl } = response.data;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        console.error("Google 로그인 URL을 받아오지 못했습니다.");
      }
    } catch (error) {
      console.error("Google 로그인 요청 실패:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="border-grey-300 bg-grey-0 relative flex h-12 w-[19.8125rem] cursor-pointer items-center justify-center rounded-xl border-[0.8px] transition-all"
    >
      <GoogleLogo className="mr-3 h-5 w-5" />
      <p className="font-['Roboto'] text-sm font-medium text-[#1f1f1f]">
        구글 계정으로 로그인
      </p>
    </button>
  );
}
