interface SubmitButtonProps {
  disabled: boolean;
  label: string;
}

export default function SubmitButton({ disabled, label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="cursor-pointer rounded-xl bg-[#59AC6E] px-[7.5rem] py-3 text-white disabled:bg-[#D1D1D1] disabled:opacity-50"
    >
      {label}
    </button>
  );
}
