"use client";

import IconExclamation from "@/assets/icons/IconExclamation.svg";

interface Props {
  isActive: boolean;
  onClick?: () => void;
  children: string;
  message?: string;
}

function CreateButton({ isActive, onClick, children, message }: Props) {
  return (
    <div className="w=full flex flex-col gap-4">
      <button
        type="submit"
        className="flex-0 cursor-pointer rounded-xl bg-[#59AC6E] px-[7.5rem] py-3 text-white disabled:bg-[#D1D1D1] disabled:opacity-50"
        disabled={!isActive}
        {...(onClick && { onClick })}
      >
        {children}
      </button>
      {message && (
        <p className="text-body3-medium text-grey-400 flex items-center justify-center gap-1">
          <IconExclamation className="h-4 w-4" />
          {message}
        </p>
      )}
    </div>
  );
}

export default CreateButton;
