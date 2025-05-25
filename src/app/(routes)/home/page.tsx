"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import HomeFeedTemplate from "@/components/templates/HomeFeedTemplate";
import Loading from "@/assets/icons/Loading.svg";

export default function HomePage() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);
  const [isClosedView, setIsClosedView] = useState(false);

  useEffect(() => {
    // 초기 로딩이 완료된 후에만 리다이렉트 체크
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.replace("/login");
    }
  }, [router, isLoggedIn, isLoading]);

  if (isLoading || !isLoggedIn) {
    return (
      <p className="flex flex-1 items-center justify-center text-center">
        <Loading className="h-[81px] w-[81px] animate-spin" />
      </p>
    );
  }

  return (
    <HomeFeedTemplate
      isClosedView={isClosedView}
      onChangeTab={(closed) => setIsClosedView(closed)}
    />
  );
}
