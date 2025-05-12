interface Props {
  isActive: boolean;
}

function ReviewCreateButton({ isActive }: Props) {
  return (
    <button
      className={`w-full items-center justify-center gap-2 rounded-xl px-28 py-3 ${
        isActive ? "bg-green" : "bg-gray-200"
      }`}
      type="submit"
    >
      완료
    </button>
  );
}

export default ReviewCreateButton;
