"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const slides = [
  {
    title: "내 동네에 있는 줍깅 모임을 찾아보세요",
  },
  {
    title: "직접 줍깅 모임을 만들수도 있어요",
  },
  {
    title: "랭킹과 도전",
    description: "기록하고, 도전하고, 경쟁하세요!",
  },
];

export default function OnboardingPage() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const router = useRouter();

  const nextPage = () => {
    if (page < slides.length - 1) {
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

  return (
    <div className="flex h-screen flex-col items-center justify-between bg-white px-4 py-8">
      <div className="flex w-full flex-grow items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
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
            onDragEnd={(event, info) => {
              const swipePower = info.offset.x;
              if (swipePower < -100) nextPage();
              else if (swipePower > 100) prevPage();
            }}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {slides[page].title}
            </h2>
            {slides[page].description && (
              <p className="text-gray-600">{slides[page].description}</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mb-4 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > page ? 1 : -1);
              setPage(idx);
            }}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
              idx === page ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex h-12 w-full max-w-xs items-center justify-center">
        <AnimatePresence>
          {page === slides.length - 1 && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={handleStart}
              className="w-full cursor-pointer rounded-full bg-green-500 px-6 py-2 font-medium text-white"
            >
              시작하기
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
