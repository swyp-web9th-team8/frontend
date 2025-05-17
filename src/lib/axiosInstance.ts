import { handleLogout, isSessionExpiredError } from "@/utils/auth";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : process.env.NEXT_PUBLIC_SERVER_URL;
const DEFAULT_TIMEOUT = 5000;

const PUBLIC_PATHS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/google",
  "/api/auth/kakao",
];

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    ...config,
  });

  // 브라우저 환경에서만 인터셉터 등록
  if (typeof window !== "undefined") {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<unknown>) => {
        const isPublicPath = PUBLIC_PATHS.some((path) =>
          error.config?.url?.includes(path),
        );
        if (!isPublicPath && isSessionExpiredError(error)) {
          handleLogout();
        }
        return Promise.reject(error);
      },
    );
  }

  return axiosInstance;
};

export const httpClient = createClient();

type RequestMethod = "get" | "post" | "put" | "delete";

export const requestHandler = async <T>(
  method: RequestMethod,
  url: string,
  payload?: T,
  config?: AxiosRequestConfig,
) => {
  const client = config ? createClient(config) : httpClient;

  try {
    let response;

    switch (method) {
      case "post":
        response = await client.post(url, payload);
        break;
      case "get":
        response = await client.get(url);
        break;
      case "put":
        response = await client.put(url, payload);
        break;
      case "delete":
        response = await client.delete(url);
        break;
      default:
        throw new Error(`지원하지 않는 요청 방식입니다: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    throw error;
  }
};
