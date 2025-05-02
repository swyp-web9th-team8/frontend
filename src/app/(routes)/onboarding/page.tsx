"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ONBOARDING_SLIDES } from "@/constants/onboarding";
import OnboardingSlide from "@/components/organisms/OnboardingSlide";
import OnboardingControl from "@/components/organisms/OnboardingControl";

export default function OnboardingPage() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const router = useRouter();
  const total = ONBOARDING_SLIDES.length;

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
