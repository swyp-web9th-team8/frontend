import { useMemo } from "react";

export function useImageUrl(path?: string): string {
  return useMemo(() => {
    if (!path) return "";

    try {
      if (path.startsWith("http")) {
        return path;
      }

      const cleanPath = path.startsWith("/") ? path.slice(1) : path;

      const encodedPath = cleanPath
        .split("/")
        .map((component) => encodeURIComponent(component))
        .join("/");

      return `${process.env.NEXT_PUBLIC_SERVER_URL}/${encodedPath}`;
    } catch (error) {
      console.error("Error processing image URL:", error);
      return "";
    }
  }, [path]);
}
