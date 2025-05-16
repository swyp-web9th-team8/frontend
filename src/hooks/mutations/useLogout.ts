import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

export const useLogout = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/logout`,
        {},
        { withCredentials: true },
      );
      logout();
      router.replace("/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return { handleLogout };
};
