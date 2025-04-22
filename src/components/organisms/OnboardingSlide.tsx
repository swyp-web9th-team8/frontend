"use client";

import { motion } from "framer-motion";

interface Slide {
  title: string;
  description?: string;
}

interface OnboardingSlideProps {
  page: number;
  slide: Slide;
  direction: number;
  onDragLeft: () => void;
  onDragRight: () => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function OnboardingSlide({
  page,
  slide,
  direction,
  onDragLeft,
  onDragRight,
}: OnboardingSlideProps) {
  return (
    <motion.div
      key={page}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="cursor-grab text-center active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={(e, info) => {
        const swipe = info.offset.x;
        if (swipe < -100) onDragLeft();
        else if (swipe > 100) onDragRight();
      }}
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{slide.title}</h2>
      {slide.description && (
        <p className="text-gray-600">{slide.description}</p>
      )}
    </motion.div>
  );
}
