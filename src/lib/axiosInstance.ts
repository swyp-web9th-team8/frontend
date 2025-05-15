import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const DEFAULT_TIMEOUT = 5000;

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
