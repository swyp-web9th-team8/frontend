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

  const nextPage = () => {
    if (page < ONBOARDING_SLIDES.length - 1) {
      setDirection(1);
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((prev) => prev - 1);
    }
  };

  const handleStart = () => {
    router.push("/login");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between bg-white px-4 py-8">
      <div className="flex w-full flex-grow items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <OnboardingSlide
            key={page}
            page={page}
            slide={ONBOARDING_SLIDES[page]}
            direction={direction}
            onDragLeft={nextPage}
            onDragRight={prevPage}
          />
        </AnimatePresence>
      </div>

      <OnboardingControl
        total={ONBOARDING_SLIDES.length}
        current={page}
        onDotClick={(idx) => {
          setDirection(idx > page ? 1 : -1);
          setPage(idx);
        }}
        showStart={page === ONBOARDING_SLIDES.length - 1}
        onStartClick={handleStart}
      />
    </div>
  );
}
