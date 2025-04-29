"use client";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  position?: "center" | "bottom";
  disableOutsideClick?: boolean;
}

export default function Modal({
  children,
  onClose,
  position = "bottom",
  disableOutsideClick = false,
}: ModalProps) {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disableOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end bg-black/40 ${position === "center" ? "justify-center" : " "}`}
      onClick={handleOutsideClick}
    >
      <div
        className={`relative w-full max-w-md bg-[#F6F6F6] ${
          position === "center" ? "rounded-t-2xl" : "mt-auto rounded-t-2xl"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
