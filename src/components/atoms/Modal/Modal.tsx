"use client";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-t-2xl bg-[#F6F6F6]">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
