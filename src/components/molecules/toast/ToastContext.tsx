"use client";

import Toast from "@/components/molecules/toast/Toast";
import { createContext, ReactNode, useContext, useState } from "react";

export type ToastPosition = "bottom-center" | "top-center";

interface Props {
  showToast: (
    message: string,
    options?: {
      duration?: number;
      position?: ToastPosition;
      showIcon?: boolean;
    },
  ) => void;
}

const ToastContext = createContext<Props | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{
    message: string;
    duration: number;
    position: ToastPosition;
    showIcon: boolean;
  } | null>(null);

  const showToast: Props["showToast"] = (
    message,
    { duration = 20000, position = "bottom-center", showIcon = true } = {},
  ) => {
    setToast({ message, duration, position, showIcon });
    setTimeout(() => setToast(null), duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          position={toast.position}
          duration={toast.duration}
          showIcon={toast.showIcon}
        />
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context.showToast;
}
