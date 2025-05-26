interface Props {
  children: string;
  onClick: () => void;
  buttonType: "close" | "confirm";
}

function ModalButton({ onClick, buttonType, children }: Props) {
  const bgColor = buttonType === "confirm" ? "bg-green" : "bg-grey-200";

  return (
    <button
      onClick={onClick}
      className={`h-[48px] w-full rounded-xl ${bgColor} flex cursor-pointer items-center justify-center text-white`}
    >
      {children}
    </button>
  );
}

export default ModalButton;
