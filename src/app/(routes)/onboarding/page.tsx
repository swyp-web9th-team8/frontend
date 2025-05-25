"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ONBOARDING_SLIDES } from "@/constants/onboarding";
import OnboardingSlide from "@/components/organisms/OnboardingSlide";
import OnboardingControl from "@/components/organisms/OnboardingControl";
import { useAuthStore } from "@/stores/useAuthStore";
import Loading from "@/assets/icons/Loading.svg";

export default function OnboardingPage() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const router = useRouter();
  const total = ONBOARDING_SLIDES.length;
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace("/home");
    }
  }, [router, isLoggedIn, isLoading]);

  const nextPage = () => {
    if (page < total - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };
  const prevPage = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };
  const handleDotClick = (idx: number) => {
    setDirection(idx > page ? 1 : -1);
    setPage(idx);
  };
  const handleStart = () => router.push("/login");
  const handleNextClick = () => nextPage();

  if (isLoading || isLoggedIn) {
    return (
      <p className="flex flex-1 items-center justify-center text-center">
        <Loading className="h-[81px] w-[81px] animate-spin" />
      </p>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-between py-8">
      <div className="flex w-full flex-grow items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <OnboardingSlide
            key={page}
            slide={ONBOARDING_SLIDES[page]}
            page={page}
            total={total}
            direction={direction}
            onDragLeft={nextPage}
            onDragRight={prevPage}
            onDotClick={handleDotClick}
          />
        </AnimatePresence>
      </div>

      <OnboardingControl
        showStart={page === total - 1}
        onStartClick={handleStart}
        onNextClick={handleNextClick}
      />
    </div>
  );
}
