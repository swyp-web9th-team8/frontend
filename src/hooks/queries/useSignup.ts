import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { SignupFormValues } from "@/types/signup";
import { requestHandler } from "@/lib/axiosInstance";

export const useSignup = () => {
  const router = useRouter();
  const { user } = useAuthStore();

  const handleSubmitSignup = async (data: SignupFormValues) => {
    const email = user?.email;
    if (!email) {
      alert("이메일 정보가 없습니다. 다시 로그인해주세요.");
      router.replace("/login");
      return;
    }

    const requestBody = {
      email,
      nickname: data.nickname,
      gender: data.gender,
      region: data.region,
      profileImageUrl: "https://example.com/profile.jpg",
    };

    try {
      const response = await requestHandler(
        "post",
        "/api/auth/register",
        requestBody,
      );
      if (response.success) {
        router.push("/welcome");
      } else {
        alert(response.error || "회원가입에 실패했습니다.");
      }
    } catch (error: any) {
      if (error.response?.data?.error === "Not authenticated") {
        alert("로그인 인증이 필요합니다. 다시 로그인해주세요.");
        router.push("/login");
      } else {
        alert(
          error.response?.data?.error || "예기치 않은 오류가 발생했습니다.",
        );
      }
    }
  };

  return { handleSubmitSignup };
};
