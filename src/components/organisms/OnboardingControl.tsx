"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  showStart: boolean;
  onStartClick: () => void;
}

export default function OnboardingControl({
  total,
  current,
  onDotClick,
  showStart,
  onStartClick,
}: Props) {
  return (
    <>
      <div className="mb-4 flex space-x-2">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onDotClick(idx)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
              idx === current ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex h-12 w-full max-w-xs items-center justify-center">
        <AnimatePresence>
          {showStart && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={onStartClick}
              className="w-full cursor-pointer rounded-full bg-green-500 px-6 py-2 font-medium text-white"
            >
              시작하기
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
