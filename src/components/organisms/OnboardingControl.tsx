"use client";

import { motion, AnimatePresence } from "framer-motion";

interface OnboardingControlProps {
  showStart: boolean;
  onStartClick: () => void;
  onNextClick: () => void;
}

export default function OnboardingControl({
  showStart,
  onStartClick,
  onNextClick,
}: OnboardingControlProps) {
  return (
    <div className="flex h-12 w-full max-w-xs items-center justify-center">
      <AnimatePresence mode="wait">
        {showStart ? (
          <motion.button
            key="start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={onStartClick}
            className="bg-green text-grey-0 font-gsans-medium text-body1-medium w-full rounded-full px-[7.5rem] py-3"
          >
            시작하기
          </motion.button>
        ) : (
          <motion.button
            key="next"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={onNextClick}
            className="bg-green text-grey-0 font-gsans-medium text-body1-medium w-full rounded-full px-[7.5rem] py-3"
          >
            다음
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
