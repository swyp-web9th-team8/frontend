"use client";

import { useEffect } from "react";
import { GlobalErrorProps } from "@/types/globalerror";

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("🚨 Global error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center text-gray-800">
      <h1 className="mb-4 text-2xl font-bold">⚠️ 문제가 발생했어요</h1>
      <p className="mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 transition hover:bg-gray-200"
      >
        다시 시도하기
      </button>
    </div>
  );
}
