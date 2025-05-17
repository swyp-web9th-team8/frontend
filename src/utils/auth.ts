import { useAuthStore } from "@/stores/useAuthStore";
import { AxiosError } from "axios";

export const handleLogout = () => {
  const logout = useAuthStore.getState().logout;
  logout();
  window.location.href = "/login";
};

interface ErrorResponse {
  message: string;
  [key: string]: string | number | boolean | null | undefined;
}

export const isSessionExpiredError = (error: AxiosError<unknown>) => {
  const data = error?.response?.data as ErrorResponse | undefined;
  return (
    error?.response?.status === 401 &&
    (data?.message === "Session expired" ||
      data?.message === "Invalid session" ||
      data?.message === "OAuth2User is null (unauthenticated)")
  );
};
