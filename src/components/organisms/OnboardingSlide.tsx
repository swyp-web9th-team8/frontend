"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/types/onboarding";

interface OnboardingSlideProps {
  slide: Slide;
  page: number;
  total: number;
  direction: number;
  onDragLeft: () => void;
  onDragRight: () => void;
  onDotClick: (idx: number) => void;
}

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d < 0 ? 100 : -100, opacity: 0 }),
};

export default function OnboardingSlide({
  slide,
  page,
  total,
  direction,
  onDragLeft,
  onDragRight,
  onDotClick,
}: OnboardingSlideProps) {
  const Image = slide.image;

  return (
    <motion.div
      key={page}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="flex cursor-grab flex-col items-center text-center active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={(_, info) => {
        if (info.offset.x < -100) onDragLeft();
        else if (info.offset.x > 100) onDragRight();
      }}
    >
      <Image />
      <div className="my-11 flex space-x-2">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onDotClick(idx)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx <= page ? "bg-green" : "bg-grey-200"
            }`}
          />
        ))}
      </div>

      <p className="text-heading2-medium font-gsans-medium text-grey-950 whitespace-pre-line">
        {slide.title}
      </p>
    </motion.div>
  );
}
